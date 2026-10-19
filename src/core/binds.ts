import accountvalBinds from "../../data/accountval_binds.txt";

export type Bind =
  | { type: "untradeable"; item: string; untradeable: string }
  | { type: "book"; item: string; skill: string }
  | {
      type: "property";
      item: string;
      property: string;
      coolItem?: string;
      page?: { url: string; text: string };
    }
  | { type: "eudora"; item: string; correspondence: string }
  | { type: "garden"; item: string; garden: string; text: string }
  | { type: "currency"; item: string; untradeable?: string; amount?: number }
  | { type: "campground"; item: string; text: string }
  | { type: "skill"; item: string; skill: string }
  | { type: "price"; item: string; price: number }
  | { type: "coinmaster"; item: string; shops: string[] };

function parse(line: string): Bind {
  const [type, item, ...rest] = line.split("\t");

  switch (type) {
    case "i":
      return { type: "untradeable", item, untradeable: rest[0] };
    case "b":
      return { type: "book", item, skill: rest[0] };

    case "p": {
      const [property, check, ...args] = rest;

      return {
        type: "property",
        item,
        property,
        coolItem: check == "coolitem" ? args[0] : undefined,
        page: check == "page" ? { url: args[0], text: args[1] } : undefined,
      };
    }

    case "e":
      return { type: "eudora", item, correspondence: rest[0] };
    case "g":
      return { type: "garden", item, garden: rest[0], text: rest[1] };
    case "t":
      return rest.length > 0
        ? {
            type: "currency",
            item,
            untradeable: rest[0],
            amount: parseInt(rest[1]),
          }
        : { type: "currency", item };
    case "c":
      return { type: "campground", item, text: rest[0] };
    case "h":
      return { type: "price", item, price: parseInt(rest[0]) };
    case "m":
      return { type: "coinmaster", item, shops: rest };
    default:
      throw new Error(`Found line '${line}' which I can't handle!`);
  }
}

export const binds: Bind[] = accountvalBinds
  .split(/\r?\n/)
  .filter((line) => line.length > 0 && !line.startsWith("#"))
  .map(parse);

export function bindsOf<T extends Bind["type"]>(
  type: T,
): Extract<Bind, { type: T }>[] {
  return binds.filter(
    (bind): bind is Extract<Bind, { type: T }> => bind.type == type,
  );
}
