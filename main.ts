import { mkdirSync, writeFileSync } from "node:fs";

// The joke: emails let people ignore you alone — a meeting lets everyone ignore it together.
const ENTRY =
  "This meeting could have been an email, but then nobody would have ignored it together.";

function validateEntry(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
