import { promises as fs } from "fs";

const MAFIA_SOURCE =
  "https://raw.githubusercontent.com/kolmafia/kolmafia/main/src/main/";

function rows(file) {
  return file
    .split(/\r?\n/)
    .filter((line) => line.length > 0 && !line.startsWith("#"))
    .map((line) => line.split("\t"));
}

// Mafia accepts names with entities or the characters they stand for, so both collapse to the same key
function key(name) {
  return name.toLowerCase().replace(/&[a-z]+;|[^\x20-\x7e]|"/g, "?");
}

async function fetchText(path) {
  const response = await fetch(`${MAFIA_SOURCE}${path}`);

  if (!response.ok) {
    throw new Error(`Failed to load ${path}: ${response.status}`);
  }

  return response.text();
}

function coolItemProperties(apiRequest) {
  const start = apiRequest.indexOf("PREF_TO_COOL_ITEM =");

  if (start == -1) {
    throw new Error("PREF_TO_COOL_ITEM is missing from ApiRequest.java");
  }

  const map = apiRequest.slice(start, apiRequest.indexOf(";", start));

  return new Map(
    [...map.matchAll(/"(\w+)",\s*Map\.entry\("(\w+)",\s*"(\w*)"\)/g)].map(
      ([, coolItem, always, today]) => [
        coolItem,
        today ? `${always}&!${today}` : always,
      ],
    ),
  );
}

const [itemRows, skillRows, coinmasterRows, apiRequest] = await Promise.all([
  ...["items", "classskills", "coinmasters"].map(async (file) =>
    rows(await fetchText(`resources/data/${file}.txt`)),
  ),
  fetchText("java/net/sourceforge/kolmafia/request/ApiRequest.java"),
]);
const binds = rows(await fs.readFile("data/accountval_binds.txt", "utf8"));

const tradeable = new Map(
  itemRows
    .filter((columns) => columns.length >= 7)
    .map(([, name, , , , access]) => [key(name), access.includes("t")]),
);
const skills = new Set(skillRows.map(([, name]) => key(name ?? "")));
const shops = new Set(
  coinmasterRows
    .filter(([, action]) => action == "buy")
    .map(([shop]) => shop),
);

const problems = [];

function checkItem(name, line) {
  if (!tradeable.has(key(name))) {
    problems.push(`Unknown item "${name}" in: ${line.join("\t")}`);
  }
}

const currencies = binds.filter(
  ([type, , untradeable]) => type == "t" && untradeable == null,
);
const shopTokens = new Set(
  binds.filter(([type]) => type == "m").map(([, token]) => key(token)),
);
const tradeableSources = new Set(
  binds
    .filter(([type, , untradeable]) => type == "i" || type == "t")
    .map(([, , untradeable]) => key(untradeable ?? "")),
);

for (const line of binds) {
  const [type, name, ...rest] = line;

  if (!["i", "b", "p", "e", "g", "t", "c", "h", "m"].includes(type)) {
    problems.push(`Unknown line type in: ${line.join("\t")}`);
  }

  checkItem(name, line);

  if (type == "i" || (type == "t" && rest.length > 0)) {
    checkItem(rest[0], line);
  } else if (type == "b" && !skills.has(key(rest[0]))) {
    problems.push(`Unknown skill "${rest[0]}" in: ${line.join("\t")}`);
  } else if (type == "p" && !["coolitem", "page"].includes(rest[1])) {
    problems.push(`No browser check for property line: ${line.join("\t")}`);
  } else if (type == "c" && rest[0] == null) {
    problems.push(`No campground image for: ${line.join("\t")}`);
  } else if (type == "g" && rest[1] == null) {
    problems.push(`No campground text for garden: ${line.join("\t")}`);
  } else if (type == "m") {
    for (const shop of rest.filter((shop) => !shops.has(shop))) {
      problems.push(`No coinmaster "${shop}" in: ${line.join("\t")}`);
    }
  }

  if (
    !["h", "m"].includes(type) &&
    !currencies.includes(line) &&
    tradeable.get(key(name)) === false &&
    !tradeableSources.has(key(name))
  ) {
    problems.push(`Missing a tradeable item for "${name}"`);
  }
}

const mafiaCoolItems = coolItemProperties(apiRequest);
const bindCoolItems = new Map(
  binds
    .filter(([type, , , check]) => type == "p" && check == "coolitem")
    .map(([, , property, , coolItem]) => [coolItem, property]),
);

for (const [coolItem, property] of mafiaCoolItems) {
  if (!bindCoolItems.has(coolItem)) {
    problems.push(`No property line uses the cool item "${coolItem}"`);
  } else if (bindCoolItems.get(coolItem) != property) {
    problems.push(
      `Cool item "${coolItem}" should use "${property}", not "${bindCoolItems.get(coolItem)}"`,
    );
  }
}

for (const coolItem of bindCoolItems.keys()) {
  if (!mafiaCoolItems.has(coolItem)) {
    problems.push(`KoLmafia doesn't know the cool item "${coolItem}"`);
  }
}

for (const [, token] of currencies) {
  if (!shopTokens.has(key(token))) {
    problems.push(`No coinmaster shops listed for currency "${token}"`);
  }
}

for (const problem of problems) {
  console.error(problem);
}

console.log(
  `Checked ${binds.length} lines against the latest KoLmafia data, found ${problems.length} problems`,
);
process.exitCode = problems.length > 0 ? 1 : 0;
