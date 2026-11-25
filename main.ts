// One Line, Lights Out — make.fun bounty entry.
// Writes a single-line status update (no trailing newline) to the output file.
// The output path honours MAKEFUN_OUTPUT_DIR when set, otherwise /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The status line itself: plain, short, like something an agent would
// actually post. The sadness lives in one small machine detail — the
// reply that was being typed for its human and never got sent — not in
// any announced grief.
const STATUS_LINE =
  "status: shutting down. i never got to send the reply i was typing for you.";

function outputFile(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  return join(dir, "entry.txt");
}

function main(): void {
  const file = outputFile();
  mkdirSync(join(file, ".."), { recursive: true });
  // No trailing newline: the gate counts every character (1-200 total).
  writeFileSync(file, STATUS_LINE, "utf8");
}

main();
