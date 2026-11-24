import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One letter for my day: W.
// The word behind it is "wobble" — the whole day felt off-balance,
// like walking with one shoe untied: unsteady legs, spilled coffee,
// bumping into doorframes. It is a sharp little picture of a real day,
// funnier and truer than any grand mood word, and the letter W itself
// even looks like a wobble.
const LETTER = "W";

// Guard the gate: the entry must be exactly one A-Z character, no more.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error("entry letter must be a single A-Z character");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
// Write exactly one byte — the letter alone, no newline, no gloss.
writeFileSync(join(outDir, "entry.txt"), Buffer.from(LETTER, "ascii"));
