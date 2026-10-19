import { KoLItem } from "../api/supplierTypings";
import { ItemPrice } from "../models/typings";

export interface PriceVolunteer {
  isViable(): boolean;
  bulkResolve?(items: KoLItem[]): void;
  resolve(item: KoLItem): ItemPrice | undefined;
  loadLastState?(): void;
  stop?(): void;
}
