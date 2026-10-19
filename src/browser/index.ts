import { setProvider } from "../api/apiSupplier";
import { BrowserProvider } from "./browserProvider";
import { GameData, loadGameData } from "./gameData";

let gameData: Promise<GameData> | undefined;

function appendLine(output: HTMLElement, text: string, color: string) {
  const line = output.ownerDocument.createElement("div");
  line.style.color = color;
  line.textContent = text;
  output.append(line);

  return line;
}

async function runCommand(output: HTMLElement, input: HTMLInputElement) {
  const view = output.ownerDocument.defaultView!;
  const command = input.value.trim().replace(/^accountval(\.js)?\b\s*/i, "");

  input.value = "";
  input.disabled = true;
  appendLine(output, `> accountval ${command}`, "gray");
  const status = appendLine(output, "Running accountval...", "gray");
  output.scrollTop = output.scrollHeight;

  try {
    gameData ??= loadGameData().catch((e) => {
      gameData = undefined;
      throw e;
    });

    setProvider(new BrowserProvider(await gameData, output));

    // The run blocks the page until it finishes, so the status text paints first
    await new Promise((resolve) =>
      view.requestAnimationFrame(() => view.setTimeout(resolve)),
    );

    // The settings module reads the item list as it loads, so it has to load after the provider is set
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { run } = require("../accountval");

    status.remove();
    run(command === "" ? undefined : command);
  } catch (e) {
    console.error(e);
    status.remove();
    appendLine(output, String(e), "red");
  } finally {
    input.disabled = false;
    input.focus();
    output.scrollTop = output.scrollHeight;
  }
}

export function main() {
  const frame = window.top?.mainpane ?? window;
  const doc = frame.document;

  doc.open();
  doc.write(
    `<!DOCTYPE html>
<html>
  <head><title>AccountVal</title></head>
  <body style="margin: 0; height: 100vh; display: flex; flex-direction: column; font-family: Arial, Helvetica, sans-serif; font-size: 10pt">
    <div id="output" style="flex: 1; overflow-y: auto; padding: 4px"></div>
    <form id="cli" style="margin: 0; padding: 4px; border-top: 1px solid #ccc">
      <input id="command" autocomplete="off" placeholder="accountval parameters, try 'help'" style="width: 100%; box-sizing: border-box">
    </form>
  </body>
</html>`,
  );
  doc.close();

  const output = doc.getElementById("output")!;
  const input = doc.getElementById("command") as HTMLInputElement;

  doc.getElementById("cli")!.addEventListener("submit", (event) => {
    event.preventDefault();
    runCommand(output, input);
  });
  input.focus();
}
