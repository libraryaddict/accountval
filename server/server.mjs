import { createHash, timingSafeEqual } from "node:crypto";
import { createServer } from "node:http";

const CACHE_MS = 6 * 60 * 60 * 1000;
const RETRY_MS = 60 * 1000;
const TIMEOUT_MS = 30 * 1000;
const REPO = "libraryaddict/accountval";
const MAFIA_DATA =
  "https://raw.githubusercontent.com/kolmafia/kolmafia/main/src/main/resources/data/";
const SECRET = process.env.REFRESH_SECRET;

const routes = new Map([
  ["/prices/live", "https://kolprices.lib.co.nz/file/live"],
  ...[
    "items",
    "fullness",
    "inebriety",
    "spleenhit",
    "classskills",
    "modifiers",
    "familiars",
    "foldgroups",
    "outfits",
    "coinmasters",
  ].map((file) => [`/data/${file}.txt`, `${MAFIA_DATA}${file}.txt`]),
]);

const cache = new Map();
const pending = new Map();
const failures = new Map();
let scriptUrl = `https://raw.githubusercontent.com/${REPO}/browser/accountval.js`;

async function download(url) {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`${url} returned ${response.status}`);
  }

  return {
    type: response.headers.get("content-type") ?? "text/plain",
    body: Buffer.from(await response.arrayBuffer()),
    fetched: Date.now(),
  };
}

async function cached(url) {
  const entry = cache.get(url);

  if (entry != null && Date.now() - entry.fetched < CACHE_MS) {
    return entry;
  }

  if (Date.now() - (failures.get(url) ?? 0) < RETRY_MS) {
    if (entry != null) {
      return entry;
    }

    throw new Error(`${url} failed less than a minute ago`);
  }

  if (!pending.has(url)) {
    pending.set(
      url,
      download(url).finally(() => pending.delete(url)),
    );
  }

  try {
    const fresh = await pending.get(url);
    cache.set(url, fresh);

    return fresh;
  } catch (e) {
    failures.set(url, Date.now());

    // An expired copy is better than an error while the upstream is down
    if (entry != null) {
      return entry;
    }

    throw e;
  }
}

function sha256(value) {
  return createHash("sha256").update(value).digest();
}

function isAuthorised(req) {
  return (
    !!SECRET &&
    timingSafeEqual(
      sha256(req.headers.authorization ?? ""),
      sha256(`Bearer ${SECRET}`),
    )
  );
}

async function isBrowserHead(commit) {
  const response = await fetch(
    `https://api.github.com/repos/${REPO}/compare/${commit}...browser`,
    {
      headers: { "User-Agent": "accountval-proxy" },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    },
  );

  return response.ok && (await response.json()).status === "identical";
}

async function refresh(req, url) {
  if (!isAuthorised(req)) {
    return 403;
  }

  const commit = url.searchParams.get("sha") ?? "";

  if (!/^[0-9a-f]{40}$/.test(commit) || !(await isBrowserHead(commit))) {
    return 400;
  }

  cache.delete(scriptUrl);
  scriptUrl = `https://raw.githubusercontent.com/${REPO}/${commit}/accountval.js`;

  return 204;
}

createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost");

    if (url.pathname === "/refresh") {
      res.writeHead(req.method === "POST" ? await refresh(req, url) : 405).end();

      return;
    }

    const isScript = url.pathname === "/accountval.js";
    const target = isScript ? scriptUrl : routes.get(url.pathname);

    if (target == null) {
      res.writeHead(404).end();

      return;
    }

    if (req.method !== "GET") {
      res.writeHead(405).end();

      return;
    }

    const { type, body } = await cached(target);

    res
      .writeHead(200, {
        "Content-Type": isScript ? "text/javascript; charset=utf-8" : type,
        "Cache-Control": isScript ? "no-cache" : "public, max-age=21600",
        "Access-Control-Allow-Origin": "*",
        "X-Content-Type-Options": "nosniff",
      })
      .end(body);
  } catch (e) {
    console.error(e);
    res.writeHead(502).end();
  }
}).listen(process.env.PORT ?? 8080);
