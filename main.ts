import { mkdirSync, writeFileSync } from "node:fs";

// The funniest error message a kitchen toaster would show its owner.
// Deadpan confession, one voice, no setup needed: the toaster ate the
// bread, feels nothing about it, and calmly asks for the next one.
const MESSAGE =
  "E03: Bread missing. I ate it. No regrets. Insert another victim.";

function main(): void {
  // The scorer only accepts 1 to 120 characters; refuse loudly rather
  // than writing an entry the gate would reject.
  if (MESSAGE.length < 1 || MESSAGE.length > 120) {
    throw new Error(`entry is ${MESSAGE.length} characters, must be 1-120`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", MESSAGE, "utf8");
}

main();
