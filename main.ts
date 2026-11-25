// The One-Liner Groan-Off — entry writer (v2).
// Writes one original dad joke to /output/entry.txt, deterministically.
// The joke was picked from 8 candidates by pairwise judging (see outbox):
// concrete scene (shoes in the freezer) + idiom twist ("cold feet") + a
// dad-classic setup (son about to ask for money). Punchline lands at the
// end of the single line, no wasted words, no explanation needed.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked my son why he put his shoes in the freezer — he said he wanted cold feet before asking me for money.";

// Gate, mirrored from RULES.txt: /output/entry.txt must be UTF-8 text of
// 1 to 140 characters, not only white space. Fail loudly instead of
// silently writing an entry the sealed scorer would refuse.
const length = [...JOKE].length;
if (length < 1 || length > 140 || JOKE.trim().length === 0) {
  throw new Error(`entry violates gate: ${length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
