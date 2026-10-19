import { provider } from "../api/apiSupplier";
import { KoLFamiliar, KoLItem, KoLSkill } from "../api/supplierTypings";
import { AccountValColors } from "../utils/colors";
import { AccountValUtils } from "../utils/utils";

export interface StoreItem {
  item: KoLItem;
  amount: number;
  limit: number;
  price: number;
}

export interface DisplaycaseItem {
  shelf?: string;
  item: KoLItem;
}

export class PageResolver {
  getSnapshot(
    username: string,
  ): (KoLFamiliar | KoLSkill | KoLItem | [KoLItem, number])[] {
    const items: Map<string, KoLItem> = new Map(
      KoLItem.all().map((i) => {
        let name = i.name;

        while (name.match(/<\/?i>/)) {
          name = name.replace(/<\/?i>/, "");
        }

        return [provider().entityDecode(name).toLowerCase(), i];
      }),
    );
    const skills: Map<string, KoLSkill> = new Map(
      KoLSkill.all().map((s) => [
        provider().entityDecode(s.name).toLowerCase(),
        s,
      ]),
    );
    const fams: Map<string, KoLFamiliar> = new Map(
      KoLFamiliar.all().map((f) => [f.toString().toLowerCase(), f]),
    );
    const ignore: string[] = [...fams.values()].map((f) =>
      f.hatchling.toString().toLowerCase(),
    );
    ignore.push(
      ...Object.values(provider().allNormalOutfits()).map((s) =>
        s.toLowerCase(),
      ),
    );
    ignore.push("miming regalia");

    let page = provider().visitUrl(
      `https://api.aventuristo.net/av-snapshot?u=${  username}`,
    );

    if (!page.includes("<p>Snapshot for <b>")) {
      return [];
    }

    page = page.substring(0, page.indexOf(`id='a7'>Discoveries</h1>`));

    const tdRegex = /<td(.*?)<\/td>/m;
    const linkRegex =
      /class='(perm|hcperm|fam_run_90|fam_have|fam_run_100)'.*?<a href="[^"]+" rel="noreferrer">(?:.*?>)?([^>]*?)<\/a>/;
    let match: RegExpMatchArray | null;
    const has: (KoLFamiliar | KoLSkill | KoLItem | [KoLItem, number])[] = [];

    while ((match = page.match(tdRegex)) !== null) {
      page = page.substring(page.indexOf(match[0]) + match[0].length);
      const link = match[1].match(linkRegex);

      if (link === null) {
        continue;
      }

      let name = provider().entityDecode(link[2]).toLowerCase();

      if (ignore.includes(name)) {
        continue;
      }

      const type = link[1];
      const isFam = !type.includes("perm");

      if (isFam) {
        const familiar = fams.get(name);

        if (familiar !== undefined) {
          has.push(familiar);
        } else {
          provider().print(
            `Unable to resolve the familiar '${  name  }' from av-snapshot`,
            AccountValColors.attentionGrabbingWarning,
          );
        }

        continue;
      }

      if (name.match(/: level \d+$/)) {
        name = name.substring(0, name.lastIndexOf(":"));
      } else if (name.match(/ \(\d+\/\d+\)$/)) {
        name = name.substring(0, name.lastIndexOf(" "));
      } else if (name.match(/ \d+\/\d+$/)) {
        continue;
      }

      const skill = skills.get(name);

      if (skill !== undefined) {
        has.push(skill);
        continue;
      }

      const exactItem = items.get(name);

      if (exactItem !== undefined) {
        has.push(exactItem);
        continue;
      }

      let count = 1;

      if (name.match(/ x\d+$/)) {
        count = AccountValUtils.toInt(
          name.substring(name.lastIndexOf("x") + 1),
        );
        name = name.substring(0, name.lastIndexOf(" "));
      }

      const item = items.get(name);

      if (item === undefined) {
        provider().print(
          `Unable to resolve the item '${  name  }' from av-snapshot`,
          AccountValColors.attentionGrabbingWarning,
        );
        continue;
      }

      has.push([item, count]);
    }

    return has;
  }

  getFamiliars(userId: number): KoLFamiliar[] {
    let page = provider().visitUrl(`showfamiliars.php?who=${  userId}`);
    const regex = /onClick='fam\((\d+)\)'/;
    let match: RegExpMatchArray | null;
    const familiars: KoLFamiliar[] = [];

    while ((match = page.match(regex)) !== null) {
      page = page.replace(match[0], "");
      familiars.push(provider().toFamiliar(AccountValUtils.toInt(match[1])));
    }

    return familiars;
  }

  getStore(userId: number): StoreItem[] {
    const items: StoreItem[] = [];
    const page = provider().visitUrl(`mallstore.php?whichstore=${  userId}`);

    for (const s of page.split("<tr>")) {
      const match = s.match(
        /selecteditem=(\d+).+?<b>.+?<\/b> \(([\d,]+)\) +(?:\(Limit ([\d,]+) \/ day\))?<\/td><td>((?:\d|,)+) Meat<\/td>/,
      );

      if (match === null) {
        continue;
      }

      items.push({
        item: KoLItem.get(AccountValUtils.toInt(match[1])),
        amount: AccountValUtils.toInt(match[2]),
        limit: match[3] ? AccountValUtils.toInt(match[3]) : 0,
        price: AccountValUtils.toInt(match[4]),
      });
    }

    return items;
  }

  getDisplaycase(userId: number): Map<DisplaycaseItem, number> {
    const map: Map<DisplaycaseItem, number> = new Map();
    const descs: Map<string, KoLItem> = new Map(
      KoLItem.all().map((i) => [i.descid, i]),
    );
    const page = provider().visitUrl(`displaycollection.php?who=${  userId}`);
    let lastShelf: string | undefined;
    const itemRegex =
      /<td width=30 height=30><img src=".+?" class=hand onClick='descitem\((\d+),(\d+)\)'><\/td><td valign=center><b>.+?<\/b>(?: \(((?:\d|,)+)\))?<\/td><\/tr>/;
    const shelfRegex = /<font color=white>([^<]+)<\/font>/;

    for (const s of page.split("<tr>")) {
      const shelfMatch = s.match(shelfRegex);

      if (shelfMatch !== null) {
        lastShelf = provider().entityDecode(shelfMatch[1]);
      }

      const match = s.match(itemRegex);

      if (match === null) {
        continue;
      }

      const item = descs.get(match[1]);

      if (item === undefined) {
        provider().print(
          `Unknown item description: ${  match[1]  }, update mafia?`,
          AccountValColors.attentionGrabbingWarning,
        );
        continue;
      }

      map.set(
        { item: item, shelf: lastShelf },
        match[3] ? AccountValUtils.toInt(match[3]) : 1,
      );
    }

    return map;
  }
}
