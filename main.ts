// The Dog Reviews the Mailman — entry program.
//
// Writes one one-line review, from the dog, of the mailman to
// /output/entry.txt. The text is fixed: every run writes the same
// bytes, with no network, clock, or randomness involved.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One biscuit at the gate and I would let him pass in silence. Instead, he chooses war every morning at nine.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");
const MAX_CHARACTERS = 200;

function checkGate(text: string): void {
  const characters = [...text].length;
  if (characters < 1 || characters > MAX_CHARACTERS) {
    throw new Error(`review length ${characters} is outside 1..${MAX_CHARACTERS}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("review must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("review must not be only whitespace");
  }
}

function writeReview(): void {
  checkGate(REVIEW);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, REVIEW, "utf8");
}

writeReview();
