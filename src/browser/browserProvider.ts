import { DataType, KoLAPI, KoLItem } from "../api/supplierTypings";
import { bindsOf } from "../core/binds";
import { PageResolver } from "../resolvers/pages";
import { AccountValUtils } from "../utils/utils";
import {
  BrowserCoinmaster,
  BrowserFamiliar,
  BrowserItem,
  BrowserSkill,
  GameData,
  noFamiliar,
  noItem,
  noSkill,
} from "./gameData";

const KEY_PREFIX = "kol-accountval-";

type KoLStatus = {
  playerid: string;
  pwd: string;
  meat: string;
  closetmeat: string;
  storagemeat: string;
  level: string;
  full: string;
  drunk: string;
  spleen: string;
  familiar: string;
  coolitems?: string;
  equipment: Record<string, string | number>;
  stickers?: (string | number)[];
};

type KoLApiData = {
  status: KoLStatus;
  inventory: Record<string, string>;
  closet: Record<string, string>;
  storage: Record<string, string>;
};

const itemTypes: Record<string, string> = {
  food: "food",
  drink: "booze",
  spleen: "spleen item",
  "food helper": "food helper",
  "drink helper": "drink helper",
  sticker: "sticker",
  card: "card",
  folder: "folder",
  bootskin: "bootskin",
  bootspur: "bootspur",
  sixgun: "sixgun",
  potion: "potion",
  avatar: "avatar potion",
  grow: "familiar larva",
  zap: "zap wand",
  familiar: "familiar equipment",
  accessory: "accessory",
  hat: "hat",
  pants: "pants",
  shirt: "shirt",
  weapon: "weapon",
  offhand: "offhand",
  container: "container",
  guardian: "pasta guardian",
};

const slots: Record<string, string> = {
  hat: "hat",
  weapon: "weapon",
  sixgun: "holster",
  offhand: "off-hand",
  container: "back",
  shirt: "shirt",
  pants: "pants",
  accessory: "acc1",
  familiar: "familiar",
  sticker: "sticker1",
  card: "card-sleeve",
  folder: "folder1",
  bootskin: "bootskin",
  bootspur: "bootspur",
};

function notAvailable(what: string): Error {
  return new Error(`${what} isn't available outside of KoLmafia`);
}

function isHardcorePermed(link: Element): boolean | undefined {
  let hardcore: boolean | undefined;

  for (let node = link.nextSibling; node !== null; node = node.nextSibling) {
    const text = node.textContent ?? "";

    if (node.nodeType === Node.TEXT_NODE) {
      if (text.includes("(HP)")) {
        hardcore = true;
      } else if (text.includes("(P)")) {
        hardcore = false;
      }

      continue;
    }

    if (node.nodeName === "B") {
      if (text.includes("HP")) {
        hardcore = true;
      } else if (text.includes("P")) {
        hardcore = false;
      }
    }

    break;
  }

  return hardcore;
}

export class BrowserProvider implements KoLAPI {
  private ele = document.createElement("div");
  private pages = new Map<string, string>();
  private properties = new Map<string, () => boolean>();
  private apiData?: KoLApiData;

  private equipped?: Map<BrowserItem, number>;
  private skills?: {
    available: Set<BrowserSkill>;
    permed: Map<BrowserSkill, boolean>;
  };

  private terrarium?: Map<BrowserFamiliar, BrowserItem>;
  private store?: Map<BrowserItem, { amount: number; price: number }>;

  constructor(
    private data: GameData,
    private output: HTMLElement,
  ) {
    for (const { property, coolItem, page } of bindsOf("property")) {
      const name = property.split("&")[0];

      if (coolItem !== undefined) {
        this.properties.set(name, () =>
          (this.status().coolitems ?? "").split(",").includes(coolItem),
        );
      } else if (page !== undefined) {
        this.properties.set(name, () =>
          this.visitCached(page.url).includes(page.text),
        );
      }
    }
  }

  private request(url: string): string {
    const request = new XMLHttpRequest();
    request.open("GET", new URL(url, location.origin).href, false);
    request.send();

    if (request.status !== 200) {
      throw new Error(`Visiting ${url} failed with status ${request.status}`);
    }

    return request.responseText;
  }

  private visitCached(url: string): string {
    let page = this.pages.get(url);

    if (page === undefined) {
      page = this.request(url);
      this.pages.set(url, page);
    }

    return page;
  }

  private parse(url: string): Document {
    return new DOMParser().parseFromString(this.request(url), "text/html");
  }

  private api(): KoLApiData {
    this.apiData ??= JSON.parse(
      this.request(
        "api.php?what=status,inventory,closet,storage&for=accountval",
      ),
    ) as KoLApiData;

    return this.apiData;
  }

  private status(): KoLStatus {
    return this.api().status;
  }

  private apiItems(
    what: "inventory" | "closet" | "storage",
  ): Map<BrowserItem, number> {
    const items = new Map<BrowserItem, number>();

    for (const [id, amount] of Object.entries(this.api()[what])) {
      const item = this.data.itemsById.get(parseInt(id));

      if (item !== undefined) {
        items.set(item, Number(amount));
      }
    }

    return items;
  }

  private charSheet() {
    if (this.skills !== undefined) {
      return this.skills;
    }

    this.skills = { available: new Set(), permed: new Map() };

    for (const link of this.parse("charsheet.php").querySelectorAll(
      "a[onclick*=skill]",
    )) {
      const match = link
        .getAttribute("onclick")!
        .match(/\bwhichskill=(\d+)|\bskill\((\d+)\)/);

      if (match === null) {
        continue;
      }

      let id = parseInt(match[1] ?? match[2]);

      // KoL lists Summon Hilarious Objects under skill id 17
      if (id === 17 && link.textContent.trim() === "Summon Hilarious Objects") {
        id = 7226;
      }

      const skill = this.data.skillsById.get(id);

      if (skill === undefined) {
        continue;
      }

      if (link.closest("#permskills") === null) {
        this.skills.available.add(skill);
      }

      const hardcore = isHardcorePermed(link);

      if (hardcore !== undefined) {
        this.skills.permed.set(skill, hardcore);
      }
    }

    return this.skills;
  }

  private familiars(): Map<BrowserFamiliar, BrowserItem> {
    if (this.terrarium !== undefined) {
      return this.terrarium;
    }

    this.terrarium = new Map();

    for (const row of this.parse("familiar.php").querySelectorAll("tr.frow")) {
      const id =
        row.querySelector("input[name=newfam]")?.getAttribute("value") ??
        row
          .querySelector("[onclick*='fam(']")
          ?.getAttribute("onclick")!
          .match(/fam\((\d+)\)/)?.[1];

      if (id === undefined) {
        continue;
      }

      const descid = row
        .querySelector("[onclick*='descitem(']")
        ?.getAttribute("onclick")!
        .match(/descitem\((\d+)\)/)?.[1];
      const familiar = this.data.familiarsById.get(parseInt(id));

      if (familiar !== undefined) {
        this.terrarium.set(
          familiar,
          descid === undefined
            ? noItem
            : (this.data.itemsByDescid.get(descid) ?? noItem),
        );
      }
    }

    return this.terrarium;
  }

  private shop(): Map<BrowserItem, { amount: number; price: number }> {
    if (this.store !== undefined) {
      return this.store;
    }

    this.store = new Map();

    for (const row of this.parse(
      "backoffice.php?which=1",
    ).querySelectorAll<HTMLTableRowElement>("tr.deets")) {
      const price = row.querySelector<HTMLInputElement>("input.price")!;
      const item = this.data.itemsById.get(
        parseInt(price.name.match(/\d+/)![0]),
      );

      if (item !== undefined) {
        this.store.set(item, {
          amount: AccountValUtils.toInt(row.cells[2].textContent),
          price: AccountValUtils.toInt(price.value),
        });
      }
    }

    return this.store;
  }

  private whois(player: string): RegExpMatchArray | null {
    const status = this.status();
    const response = JSON.parse(
      this.request(
        `submitnewchat.php?j=1&pwd=${status.pwd}&playerid=${status.playerid}&graf=${encodeURIComponent(`/whois ${player}`)}`,
      ),
    );

    return (response.output ?? "").match(
      /showplayer\.php\?who=(\d+)['"][^>]*>(.*?)<\/a>/,
    );
  }

  mallPrice(): never {
    throw notAvailable("Mall searching");
  }

  resolveAllMallPrices(): never {
    throw notAvailable("Mall searching");
  }

  storeCache(key: string, value: string, dataType: DataType): void {
    const storage = dataType === "transient" ? sessionStorage : localStorage;
    storage.setItem(KEY_PREFIX + key, value);
  }

  retrieveCache(key: string, dataType: DataType): string {
    if (dataType === "large_persist" && key === "irrats_item_prices.txt") {
      return this.data.irratPrices;
    }

    const property = this.properties.get(key);

    if (dataType === "small_persist" && property !== undefined) {
      return String(property());
    }

    const storage = dataType === "transient" ? sessionStorage : localStorage;

    return storage.getItem(KEY_PREFIX + key) ?? "";
  }

  print(message: string, color?: string): void {
    message = this.entityEncode(message);

    if (color) {
      this.printHtml(`<font color='${color}'>${message}</font>`);
    } else {
      this.printHtml(message);
    }
  }

  printHtml(message: string): void {
    const line = this.output.ownerDocument.createElement("div");
    line.innerHTML = message || "<br>";
    this.output.append(line);
  }

  abort(message: string): void {
    throw new Error(message);
  }

  visitUrl(url: string): string {
    try {
      return this.request(url);
    } catch (e) {
      console.warn(e);

      return "";
    }
  }

  checkOutdated(): void {}

  myId(): string {
    return this.status().playerid;
  }

  getPlayerId(name: string): string {
    return this.whois(name)?.[1] ?? name;
  }

  getPlayerName(id: number): string {
    return this.whois(String(id))?.[2].replace(/<[^>]*>/g, "") ?? String(id);
  }

  myMeat(): number {
    return Number(this.status().meat);
  }

  myClosetMeat(): number {
    return Number(this.status().closetmeat);
  }

  myStorageMeat(): number {
    return Number(this.status().storagemeat);
  }

  mySessionMeat(): never {
    throw notAvailable("Session tracking");
  }

  myFullness(): number {
    return Number(this.status().full);
  }

  fullnessLimit(): never {
    throw notAvailable("Fullness limit");
  }

  myInebriety(): number {
    return Number(this.status().drunk);
  }

  inebrietyLimit(): never {
    throw notAvailable("Inebriety limit");
  }

  mySpleenUse(): number {
    return Number(this.status().spleen);
  }

  spleenLimit(): never {
    throw notAvailable("Spleen limit");
  }

  myLevel(): number {
    return Number(this.status().level);
  }

  isDarkMode(): boolean {
    return false;
  }

  getInventory(): Map<BrowserItem, number> {
    return this.apiItems("inventory");
  }

  getCloset(): Map<BrowserItem, number> {
    return this.apiItems("closet");
  }

  getStorage(): Map<BrowserItem, number> {
    return this.apiItems("storage");
  }

  getStash(): Map<BrowserItem, number> {
    const items = new Map<BrowserItem, number>();

    for (const option of this.parse("clan_stash.php").querySelectorAll(
      "form[name=takegoodies] option",
    )) {
      const item = this.data.itemsById.get(
        parseInt(option.getAttribute("value") ?? ""),
      );
      const amount = option.textContent.match(/\(([\d,]+)\)(?: \(-[\d,]*\))?$/);

      if (item !== undefined) {
        items.set(item, amount ? AccountValUtils.toInt(amount[1]) : 1);
      }
    }

    return items;
  }

  getDisplay(): Map<KoLItem, number> {
    const items = new Map<KoLItem, number>();

    new PageResolver()
      .getDisplaycase(parseInt(this.myId()))
      .forEach((amount, { item }) =>
        items.set(item, (items.get(item) ?? 0) + amount),
      );

    return items;
  }

  getShop(): Map<BrowserItem, number> {
    return new Map(
      [...this.shop()].map(([item, { amount }]): [BrowserItem, number] => [
        item,
        amount,
      ]),
    );
  }

  mySessionItems(): Map<BrowserItem, number> {
    return new Map();
  }

  getCampground(): Map<BrowserItem, number> {
    const page = this.visitCached("campground.php");

    return new Map(
      bindsOf("campground")
        .filter(({ text }) => page.includes(text))
        .map(({ item }): [BrowserItem, number] => [this.data.getItem(item), 1]),
    );
  }

  getFoldables(item: BrowserItem): BrowserItem[] {
    return this.data.folds.get(item) ?? [];
  }

  toItem(val: number): BrowserItem {
    return this.data.itemsById.get(val) ?? noItem;
  }

  toFamiliar(val: string | number): BrowserFamiliar {
    if (typeof val === "number") {
      return this.data.familiarsById.get(val) ?? noFamiliar;
    }

    return this.data.getFamiliar(val) ?? noFamiliar;
  }

  entityEncode(val: string): string {
    this.ele.textContent = val;

    return this.ele.innerHTML;
  }

  entityDecode(val: string): string {
    this.ele.innerHTML = val;

    return this.ele.textContent;
  }

  autosellPrice(item: BrowserItem): number {
    return item.autosell;
  }

  shopPrice(item: BrowserItem): number {
    return this.shop().get(item)?.price ?? 0;
  }

  sellPrice(coinmaster: BrowserCoinmaster, item: BrowserItem): number {
    return coinmaster.prices.get(item) ?? 0;
  }

  historicalPrice(): number {
    return 0;
  }

  historicalAge(): number {
    return 0;
  }

  private addEquipped(
    equipped: Map<BrowserItem, number>,
    item: BrowserItem | undefined,
    amount: number,
  ) {
    if (item !== undefined) {
      equipped.set(item, (equipped.get(item) ?? 0) + amount);
    }
  }

  equippedAmount(item: BrowserItem): number {
    if (this.equipped === undefined) {
      const { equipment, stickers } = this.status();
      this.equipped = new Map();

      for (const [slot, value] of Object.entries(equipment)) {
        if (slot === "fakehands") {
          this.addEquipped(
            this.equipped,
            this.data.getItem("fake hand"),
            Number(value),
          );
        } else {
          this.addEquipped(
            this.equipped,
            this.data.itemsById.get(Number(value)),
            1,
          );
        }
      }

      for (const sticker of stickers ?? []) {
        this.addEquipped(
          this.equipped,
          this.data.itemsById.get(Number(sticker)),
          1,
        );
      }
    }

    return this.equipped.get(item) ?? 0;
  }

  familiarEquippedEquipment(fam: BrowserFamiliar): BrowserItem {
    return this.familiars().get(fam) ?? noItem;
  }

  myFamiliar(): BrowserFamiliar {
    return this.toFamiliar(Number(this.status().familiar));
  }

  haveFamiliar(fam: BrowserFamiliar): boolean {
    return fam === this.myFamiliar() || this.familiars().has(fam);
  }

  haveSkill(skill: BrowserSkill): boolean {
    return this.charSheet().available.has(skill);
  }

  getPermedSkills(): { [skill: string]: boolean } {
    return Object.fromEntries(
      [...this.charSheet().permed].map(([skill, hardcore]) => [
        skill.name,
        hardcore,
      ]),
    );
  }

  associatedSkill(item: BrowserItem): BrowserSkill {
    return item.skill;
  }

  myGardenType(): string {
    const page = this.visitCached("campground.php");
    const garden = bindsOf("garden").find(({ text }) => page.includes(text));

    return garden?.garden ?? "none";
  }

  getWorkshed(): BrowserItem {
    return noItem;
  }

  allNormalOutfits(): string[] {
    return this.data.outfits;
  }

  itemType(item: BrowserItem): string {
    return itemTypes[item.use] ?? "";
  }

  getItem(name: string | number): BrowserItem {
    if (typeof name === "string") {
      return this.data.getItem(name);
    }

    const item = this.data.itemsById.get(name);

    if (item === undefined) {
      throw new Error(`Bad item value: "${name}"`);
    }

    return item;
  }

  allItems(): BrowserItem[] {
    return this.data.items;
  }

  noItem(): BrowserItem {
    return noItem;
  }

  allFamiliars(): BrowserFamiliar[] {
    return this.data.familiars;
  }

  getSkill(name: string): BrowserSkill {
    return this.data.getSkill(name);
  }

  allSkills(): BrowserSkill[] {
    return this.data.skills;
  }

  noSkill(): BrowserSkill {
    return noSkill;
  }

  noSlot(): string {
    return "none";
  }

  toSlot(item: BrowserItem): string {
    return slots[item.use] ?? "none";
  }

  evalJsFilter(): never {
    throw notAvailable("jsfilter");
  }
}
