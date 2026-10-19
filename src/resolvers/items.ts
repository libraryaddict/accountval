import { provider } from "../api/apiSupplier";
import { KoLFamiliar, KoLItem, KoLSkill } from "../api/supplierTypings";
import { Bind, binds, bindsOf } from "../core/binds";
import { ItemStatus, ValItem } from "../models/typings";
import { PriceResolver } from "../pricing/priceResolver";
import { AccountValColors } from "../utils/colors";
import { AccountValUtils } from "../utils/utils";
import { CoinmasterResolver } from "./coinmaster";

class AccValStuff {
  untradeableItem?: KoLItem;
  skill?: KoLSkill;
  currencyAmount?: number;

  constructor(
    public bind: Bind,
    public actualItem: KoLItem,
  ) {}
}

export class ItemResolver {
  private visitCache: Map<string, string> = new Map();
  accValStuff: AccValStuff[];
  private accountValCache: Map<KoLItem, boolean> = new Map();
  private accountValVisitCachePropName = "_accountValVisitCache";
  prices: PriceResolver;

  constructor(prices: PriceResolver) {
    this.prices = prices;
    this.accValStuff = this.loadAccountValStuff();
  }

  loadCache() {
    const prop: string[] = provider()
      .retrieveCache(this.accountValVisitCachePropName, "transient")
      .split(",");

    for (const p of prop) {
      if (!p.includes(":")) {
        continue;
      }

      const spl = p.split(":");
      this.accountValCache.set(
        KoLItem.get(AccountValUtils.toInt(spl[0])),
        spl[1].startsWith("t"),
      );
    }
  }

  saveCache() {
    const values: string[] = [];
    this.accountValCache.forEach((val, key) =>
      values.push(`${key.id}:${val ? "t" : "f"}`),
    );
    values.sort((v1, v2) => v1.localeCompare(v2));

    const val = values.join(",");

    if (
      provider().retrieveCache(
        this.accountValVisitCachePropName,
        "transient",
      ) === val
    ) {
      return;
    }

    provider().storeCache(
      this.accountValVisitCachePropName,
      values.join(","),
      "transient",
    );
  }

  getUrledItems(): [KoLItem, ItemStatus?][] {
    const items: [KoLItem, ItemStatus][] = [];
    const origSize = this.accountValCache.size;

    for (const s of this.accValStuff) {
      const { bind } = s;

      switch (bind.type) {
        case "book":
          if (provider().haveSkill(s.skill!)) {
            items.push([s.actualItem, ItemStatus.BOUND]);
          }

          break;
        case "eudora":
          if (
            this.visitCheck(
              s.actualItem,
              "account.php?tab=correspondence",
              bind.correspondence,
            )
          ) {
            items.push([s.actualItem, ItemStatus.BOUND]);
          }

          break;
        case "property":
          if (this.testProperty(bind.property)) {
            items.push([s.actualItem, ItemStatus.BOUND]);
          }

          break;
        case "garden":
          if (provider().myGardenType() === bind.garden) {
            items.push([s.actualItem, ItemStatus.IN_USE]);
          }

          break;
        case "skill":
          if (provider().getPermedSkills()[s.skill!.name]) {
            items.push([s.actualItem, ItemStatus.BOUND]);
          }

          break;
        case "campground":
          if (provider().getCampground().has(s.actualItem)) {
            items.push([s.actualItem, ItemStatus.BOUND]);
          }

          break;
      }
    }

    if (origSize !== this.accountValCache.size) {
      this.saveCache();
    }

    return items;
  }

  private testProperty(property: string): boolean {
    let result: boolean = true;

    for (const prop of property.split("&")) {
      const isTrue = AccountValUtils.toBoolean(
        provider().retrieveCache(prop.replace("!", ""), "small_persist"),
      );
      const isNotNegated = !prop.includes("!");
      result = result && isTrue === isNotNegated;
    }

    return result;
  }

  private addItem(
    ownedItems: Map<ValItem, number>,
    actualItem: KoLItem,
    item: KoLItem,
    name: string,
    plural: string,
    bound?: ItemStatus,
    count: number = 1,
    worthMultiplier: number = 1,
  ) {
    const v = new ValItem(actualItem, item, name, plural, bound);
    v.worthMultiplier = worthMultiplier;
    ownedItems.set(v, (ownedItems.get(v) ?? 0) + count);
  }

  resolveBoundToTradeables(
    copy: { [item: string]: [ValItem, number] },
    ownedItems: Map<ValItem, number>,
    resolve: Bind["type"][],
  ) {
    let coinmaster: CoinmasterResolver | undefined;

    for (const s of this.accValStuff) {
      if (!resolve.includes(s.bind.type)) {
        continue;
      }

      try {
        if (s.bind.type === "currency" && s.untradeableItem === undefined) {
          if (coinmaster === undefined) {
            coinmaster = new CoinmasterResolver(this.prices);
            coinmaster.load();
          }

          const item = coinmaster.getHighestCoinmaster(s.actualItem);

          if (item === undefined) {
            continue;
          }

          s.currencyAmount = item.currencyCost;
          s.untradeableItem = item.currency;
          s.actualItem = item.item;
        }

        const item = s.untradeableItem!;
        const pair: [ValItem, number] = copy[item.name];

        if (pair === undefined) {
          continue;
        }

        const v = pair[0];
        this.addItem(
          ownedItems,
          item,
          s.actualItem,
          item.name,
          item.plural,
          v.bound === undefined ||
            v.bound === ItemStatus.NO_TRADE ||
            v.bound === ItemStatus.IN_USE
            ? s.bind.type === "untradeable"
              ? ItemStatus.BOUND
              : ItemStatus.NO_TRADE
            : v.bound,
          pair[1],
          s.currencyAmount ?? 1,
        );
      } catch (e) {
        provider().print(
          `You probably need to update mafia! Got an error! ${e}`,
          AccountValColors.attentionGrabbingWarning,
        );
      }
    }
  }

  resolveFamiliars(familiars: KoLFamiliar[], ownedItems: Map<ValItem, number>) {
    for (const fam of familiars) {
      if (!fam.hatchling.tradeable) {
        continue;
      }

      this.addItem(
        ownedItems,
        fam.hatchling,
        fam.hatchling,
        fam.toString(),
        fam.toString(),
        ItemStatus.FAMILIAR,
      );
    }
  }

  resolveFamiliarItems() {
    const famEquipped: Map<KoLItem, number> = new Map();

    for (const fam of KoLFamiliar.all()) {
      if (!provider().haveFamiliar(fam) || provider().myFamiliar() === fam) {
        continue;
      }

      const item = provider().familiarEquippedEquipment(fam);

      if (item == null || item === KoLItem.none) {
        continue;
      }

      famEquipped.set(item, (famEquipped.get(item) ?? 0) + 1);
    }

    return famEquipped;
  }

  visitCheck(item: KoLItem, url: string, find: string) {
    if (this.accountValCache.has(item)) {
      return this.accountValCache.get(item);
    }

    let page = this.visitCache.get(url);

    if (page === undefined) {
      page = provider().visitUrl(url);
      this.visitCache.set(url, page);
    }

    const result: boolean = page.includes(find);
    this.accountValCache.set(item, result);

    return result;
  }

  loadAccountValStuff(): AccValStuff[] {
    for (const { item, price } of bindsOf("price")) {
      try {
        this.prices.addSpecialCase(KoLItem.get(item), price);
      } catch (e) {
        provider().print(
          `Error! Update mafia? ${e}`,
          AccountValColors.attentionGrabbingWarning,
        );
      }
    }

    const values: AccValStuff[] = [];

    for (const bind of binds) {
      if (bind.type === "price" || bind.type === "coinmaster") {
        continue;
      }

      try {
        const v = new AccValStuff(bind, KoLItem.get(bind.item));

        if (bind.type === "untradeable") {
          v.untradeableItem = KoLItem.get(bind.untradeable);
        } else if (bind.type === "book") {
          v.skill = KoLSkill.get(bind.skill);
        } else if (bind.type === "currency" && bind.untradeable !== undefined) {
          v.untradeableItem = KoLItem.get(bind.untradeable);
          v.currencyAmount = bind.amount;
        }

        values.push(v);
      } catch (e) {
        provider().print(
          `Error! Update mafia? ${e}`,
          AccountValColors.attentionGrabbingWarning,
        );
      }
    }

    this.loadSkills(values);

    const tradeableSources = new Set(values.map((v) => v.untradeableItem));

    for (const v of values) {
      if (
        v.actualItem.tradeable ||
        tradeableSources.has(v.actualItem) ||
        (v.bind.type === "currency" && v.untradeableItem === undefined)
      ) {
        continue;
      }

      provider().print(
        `Missing a tradeable item for ${v.actualItem}`,
        AccountValColors.attentionGrabbingWarning,
      );
    }

    this.loadCache();

    return values;
  }

  loadSkills(values: AccValStuff[]) {
    const itemsSkills: Map<KoLItem, KoLSkill> = new Map(
      KoLItem.all()
        .map((i) => [i, provider().associatedSkill(i)] as [KoLItem, KoLSkill])
        .filter(
          ([i, skill]) =>
            !i.reusable && !i.quest && !i.gift && skill !== KoLSkill.none,
        ),
    );
    const alreadyNoted = values.map((v) => v.actualItem);

    for (const [i, skill] of itemsSkills) {
      if (!i.tradeable || alreadyNoted.includes(i)) {
        continue;
      }

      const v = new AccValStuff(
        { type: "skill", item: i.name, skill: skill.name },
        i,
      );
      v.skill = skill;
      values.push(v);
    }
  }
}
