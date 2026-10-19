import { setProvider } from "../api/apiSupplier";
import { KolmafiaProvider } from "./kolmafiaProvider";

setProvider(new KolmafiaProvider());

// The settings module reads the item list as it loads, so it has to load after the provider is set
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { run } = require("../accountval");

export function main(command: string) {
  run(command);
}
