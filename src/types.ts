import { Item } from "kolmafia";

export enum PriceType {
  NEW_PRICES,
  HISTORICAL,
  MALL,
  MALL_SALES,
  AUTOSELL,
}

export class ItemPrice {
  item: Item;
  price: number;
  price2: number;
  accuracy: PriceType;
  daysOutdated: number;
  volume: number;

  constructor(
    item: Item,
    price: number,
    accuracy: PriceType,
    daysOutdated: number,
    volume: number = -1,
    price2: number = -1,
  ) {
    this.item = item;
    this.price = price;
    this.accuracy = accuracy;
    this.daysOutdated = daysOutdated;
    this.volume = volume;
    this.price2 = price2;
  }
}

export interface PriceVolunteer {
  /**
   * If this pricing can be used
   */
  isViable(): boolean;

  bulkResolve(items: Item[]): ItemPrice[];

  resolve(item: Item): ItemPrice;

  load?(): void;

  stop?(): void;
}
