import {
  KoLCoinmaster,
  KoLFamiliar,
  KoLItem,
  KoLSkill,
} from "../api/supplierTypings";

const MAFIA_DATA =
  "https://cdn.jsdelivr.net/gh/kolmafia/kolmafia@main/src/main/resources/data/";
const IRRAT_PRICES = "https://kolprices.lib.co.nz/file/live";

const mafiaFiles = [
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
] as const;

type MafiaFile = (typeof mafiaFiles)[number];

// Covers the currencies in accountval_binds.txt, since coinmasters.txt doesn't name each shop's token
const coinmasterTokens: Record<string, string> = {
  "Vending Machine": "fat loot token",
  "Drip Institute Armory": "Driplet",
  "The Neandermall": "Chroner",
  "Ni&ntilde;a Store": "Chroner",
  "The Terrified Eagle Inn": "Freddy Kruegerand",
  "Guzzlr Company Store Website": "Guzzlrbuck",
  "Buff Jimmy's Souvenir Shop": "Beach Buck",
  "The Frozen Brogurt Stand": "Beach Buck",
  "Taco Dan's Taco Stand": "Beach Buck",
  "Disco GiftCo": "Volcoino",
  "The Dinsey Company Store": "FunFunds&trade;",
  "The Armory": "Coinspiracy",
  "The Canteen": "Coinspiracy",
  "The SHAWARMA Initiative": "Coinspiracy",
  "Wal-Mart": "Wal-Mart gift certificate",
  "FantasyRealm Rubee&trade; Store": "Rubee&trade;",
  "LT&T Gift Shop": "buffalo dime",
  "Spacegate Fabrication Facility": "Spacegate Research",
};

export class BrowserSkill implements KoLSkill {
  constructor(
    public id: number,
    public name: string,
  ) {}

  toString() {
    return this.name;
  }
}

export const noSkill = new BrowserSkill(-1, "none");

export class BrowserItem implements KoLItem {
  id: number;
  name: string;
  plural: string;
  descid: string;
  use: string;
  autosell: number;
  tradeable: boolean;
  gift: boolean;
  quest: boolean;
  discardable: boolean;
  reusable: boolean;
  fullness = 0;
  inebriety = 0;
  spleen = 0;
  levelreq = 0;
  notes = "";
  seller?: BrowserCoinmaster;
  skill = noSkill;

  constructor(columns: string[]) {
    const [id, name, descid, , use, access, autosell, plural] = columns;
    const uses = use.split(/, ?/);
    const flags = access.split(",");

    this.id = parseInt(id);
    this.name = name;
    this.plural = plural || `${name}s`;
    this.descid = descid;
    this.use = uses[0];
    this.autosell = parseInt(autosell);
    this.tradeable = flags.includes("t");
    this.gift = flags.includes("g");
    this.quest = flags.includes("q");
    this.discardable = flags.includes("d");
    this.reusable = uses.includes("reusable");
  }

  toString() {
    return this.name;
  }
}

export const noItem = new BrowserItem([
  "-1",
  "none",
  "",
  "",
  "none",
  "",
  "0",
  "none",
]);

export class BrowserCoinmaster implements KoLCoinmaster {
  prices = new Map<BrowserItem, number>();

  constructor(
    public name: string,
    public item: BrowserItem,
  ) {}

  toString() {
    return this.name;
  }
}

export class BrowserFamiliar implements KoLFamiliar {
  constructor(
    public id: number,
    public name: string,
    public hatchling: BrowserItem,
  ) {}

  toString() {
    return this.name;
  }
}

export const noFamiliar = new BrowserFamiliar(-1, "none", noItem);

const decoder = document.createElement("textarea");

function decodeEntities(text: string): string {
  if (!text.includes("&")) {
    return text;
  }

  decoder.innerHTML = text;

  return decoder.value;
}

function rows(file: string): string[][] {
  return file
    .split(/\r?\n/)
    .filter((line) => line.length > 0 && !line.startsWith("#"))
    .map((line) => line.split("\t"));
}

export class GameData {
  items: BrowserItem[] = [];
  itemsById = new Map<number, BrowserItem>();
  itemsByDescid = new Map<string, BrowserItem>();
  skills: BrowserSkill[] = [];
  skillsById = new Map<number, BrowserSkill>();
  familiars: BrowserFamiliar[] = [];
  familiarsById = new Map<number, BrowserFamiliar>();
  folds = new Map<BrowserItem, BrowserItem[]>();
  outfits: string[] = [];
  private itemsByName = new Map<string, BrowserItem>();
  private skillsByName = new Map<string, BrowserSkill>();

  constructor(
    files: Record<MafiaFile, string>,
    public irratPrices: string,
  ) {
    this.loadItems(files.items);
    this.loadConsumables(files.fullness, "fullness");
    this.loadConsumables(files.inebriety, "inebriety");
    this.loadConsumables(files.spleenhit, "spleen");
    this.loadSkills(files.classskills);
    this.loadSkillItems(files.modifiers);
    this.loadFamiliars(files.familiars);
    this.loadFolds(files.foldgroups);
    this.loadOutfits(files.outfits);
    this.loadCoinmasters(files.coinmasters);
  }

  findItem(name: string): BrowserItem | undefined {
    const id = name.match(/^\[(\d+)\]/);

    if (id != null) {
      return this.itemsById.get(parseInt(id[1]));
    }

    return this.itemsByName.get(name.toLowerCase());
  }

  getItem(name: string): BrowserItem {
    const item = this.findItem(name);

    if (item == null) {
      throw new Error(`Bad item value: "${name}"`);
    }

    return item;
  }

  getSkill(name: string): BrowserSkill {
    const skill = this.skillsByName.get(name.toLowerCase());

    if (skill == null) {
      throw new Error(`Bad skill value: "${name}"`);
    }

    return skill;
  }

  getFamiliar(name: string): BrowserFamiliar | undefined {
    return this.familiars.find(
      (f) => f.name.toLowerCase() == name.toLowerCase(),
    );
  }

  private loadItems(file: string) {
    for (const columns of rows(file)) {
      if (columns.length < 7) {
        continue;
      }

      const item = new BrowserItem(columns);
      this.items.push(item);
      this.itemsById.set(item.id, item);
      this.itemsByDescid.set(item.descid, item);

      for (const name of [item.name, decodeEntities(item.name)]) {
        if (!this.itemsByName.has(name.toLowerCase())) {
          this.itemsByName.set(name.toLowerCase(), item);
        }
      }
    }
  }

  private loadConsumables(
    file: string,
    organ: "fullness" | "inebriety" | "spleen",
  ) {
    for (const columns of rows(file)) {
      const item = this.findItem(columns[0]);

      if (item == null || columns.length < 3) {
        continue;
      }

      item[organ] = parseInt(columns[1]);
      item.levelreq = parseInt(columns[2]);
      item.notes = columns[8] ?? "";
    }
  }

  private loadSkills(file: string) {
    for (const [id, name] of rows(file)) {
      if (name == null) {
        continue;
      }

      const skill = new BrowserSkill(parseInt(id), name);
      this.skills.push(skill);
      this.skillsById.set(skill.id, skill);
      this.skillsByName.set(name.toLowerCase(), skill);
      this.skillsByName.set(decodeEntities(name).toLowerCase(), skill);
    }
  }

  private loadSkillItems(file: string) {
    for (const [type, name, modifiers] of rows(file)) {
      const skillName = modifiers?.match(/(?:^|, )Skill: "(.+?)"/)?.[1];

      if (type != "Item" || skillName == null) {
        continue;
      }

      const item = this.findItem(name);
      const skill = this.skillsByName.get(skillName.toLowerCase());

      if (item != null && skill != null) {
        item.skill = skill;
      }
    }
  }

  private loadFamiliars(file: string) {
    for (const [id, name, , , hatchling] of rows(file)) {
      if (hatchling == null) {
        continue;
      }

      const familiar = new BrowserFamiliar(
        parseInt(id),
        name,
        this.findItem(hatchling) ?? noItem,
      );
      this.familiars.push(familiar);
      this.familiarsById.set(familiar.id, familiar);
    }
  }

  private loadFolds(file: string) {
    for (const [, ...names] of rows(file)) {
      const group = names
        .map((name) => this.findItem(name))
        .filter((item) => item != null);

      for (const item of group) {
        this.folds.set(item, group);
      }
    }
  }

  private loadOutfits(file: string) {
    for (const [, name] of rows(file)) {
      if (name != null) {
        this.outfits.push(name);
      }
    }
  }

  private loadCoinmasters(file: string) {
    const coinmasters = new Map<string, BrowserCoinmaster>();

    for (const [shop, action, cost, name] of rows(file)) {
      const token = coinmasterTokens[shop];

      if (action != "buy" || token == null) {
        continue;
      }

      const item = this.findItem(name.replace(/ \(\d+\)$/, ""));

      if (item == null) {
        continue;
      }

      if (!coinmasters.has(shop)) {
        coinmasters.set(shop, new BrowserCoinmaster(shop, this.getItem(token)));
      }

      const coinmaster = coinmasters.get(shop);
      coinmaster.prices.set(item, parseInt(cost));
      item.seller ??= coinmaster;
    }
  }
}

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to load ${url}: ${response.status} ${response.statusText}`,
    );
  }

  return response.text();
}

export async function loadGameData(): Promise<GameData> {
  const [irratPrices, ...files] = await Promise.all([
    fetchText(IRRAT_PRICES),
    ...mafiaFiles.map((file) => fetchText(`${MAFIA_DATA}${file}.txt`)),
  ]);

  return new GameData(
    Object.fromEntries(mafiaFiles.map((file, i) => [file, files[i]])) as Record<
      MafiaFile,
      string
    >,
    irratPrices,
  );
}
