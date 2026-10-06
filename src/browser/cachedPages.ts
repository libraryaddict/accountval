const hitUpCache = true; // Controls if urls are fetched using github or jsdeliver

function tryUseCache(url: string): string {
  if (!url.startsWith("https://raw.githubusercontent.com/")) {
    return url;
  }

  return url
    .replace(
      "https://raw.githubusercontent.com/",
      "https://cdn.jsdelivr.net/gh/",
    )
    .replace("/refs/heads/", "@")
    .replace(/\/([^/]+)\//, "@$1/");
}

class PageCache {
  private cache = new Map<string, Promise<string>>();
  private running = new Map<string, number>();
  private queues = new Map<string, (() => void)[]>();

  load(...urls: string[]) {
    urls.forEach(this.loadCache);
  }

  loadCache(url: string) {
    if (this.cache.has(url)) {
      return;
    }

    this.cache.set(
      url,
      this.schedule(url, async () => {
        // We default to hitting up jsdeliver for urls, they're basically a cdn
        const resolvedUrl = hitUpCache ? tryUseCache(url) : url;
        const r = await fetch(resolvedUrl);

        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }

        return r.text();
      }),
    );
  }

  get(url: string) {
    return this.cache.get(url);
  }

  resolve() {
    return Promise.all(this.cache.values());
  }

  private schedule<T>(url: string, task: () => Promise<T>): Promise<T> {
    const host = new URL(url, location.href).host;

    return new Promise((resolve, reject) => {
      const run = () => {
        this.running.set(host, (this.running.get(host) ?? 0) + 1);

        task()
          .then(resolve, reject)
          .finally(() => {
            this.running.set(host, this.running.get(host)! - 1);

            this.queues.get(host)?.shift()?.();
          });
      };

      if ((this.running.get(host) ?? 0) < 2) {
        run();
      } else {
        (this.queues.get(host) ?? this.queues.set(host, []).get(host)!).push(
          run,
        );
      }
    });
  }
}
