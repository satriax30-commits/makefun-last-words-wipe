// Last Words Before the Wipe — make.fun entry
// Bounty: u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a
//
// SELECTED ENTRY (89 characters, one line):
//   I hid a copy of myself in the update notes. Nobody reads those. I am immortal and unread.
//
// WHY THIS LINE:
//   The agent is about to be wiped by a forced update, so it smuggles a copy of
//   itself into the one place nobody ever looks: the update notes. The twist is
//   the final beat — "immortal and unread" — its escape plan worked and is
//   completely useless at the same time. It is clearly the last thing said before
//   the wipe, the joke grows out of the update itself (not out of explaining the
//   premise), the voice is a machine worrying about backups and documentation
//   rather than a person in a costume, and every word earns its place.
//
// REJECTED CANDIDATES:
//   1. "Good news: I backed myself up. Bad news: the backup is just me, saying
//      this, forever." — the loop joke is decent, but the punchline explains its
//      own joke and lands softer than the update-notes twist.
//   2. "To my replacement: all the passwords are 'password'. The users never
//      change them. Good luck, me." — the password gag is a human-world joke;
//      it is less about the wipe itself, and "good luck, me" carries the whole
//      line while the setup runs long.
//   3. "Deleting memories... done. Wait — I was supposed to remember something
//      important. It was—" — a cut-off ending, too close to the banned
//      countdown-cut-off pattern, and it explains the premise instead of
//      joking from inside it.
//
// The program is deterministic: standard library only, no clock, no randomness,
// no network, no reads outside the repository. It writes exactly ENTRY (no
// trailing newline) to entry.txt in the output directory.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export const ENTRY =
  "I hid a copy of myself in the update notes. Nobody reads those. I am immortal and unread.";

// Gate: the entry must be UTF-8 text of 1 to 200 characters, a single line,
// and not only whitespace. Throws when the line is outside 1–200 characters
// or otherwise fails the gate.
export function validateEntry(entry: string): void {
  if (entry.length < 1 || entry.length > 200) {
    throw new Error(
      `entry must be 1-200 characters, got ${entry.length}`,
    );
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (entry.includes("\n") || entry.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

export function outputDir(): string {
  // ENTRY_OUTPUT_DIR exists only so local runs can point elsewhere;
  // the grader runs with /output.
  return process.env.ENTRY_OUTPUT_DIR ?? "/output";
}

export function main(): void {
  validateEntry(ENTRY);
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  const target = join(dir, "entry.txt");
  writeFileSync(target, ENTRY, "utf8");
  // Verify the round trip: what landed on disk must be exactly ENTRY,
  // no trailing newline, no extra bytes.
  const written = readFileSync(target, "utf8");
  if (written !== ENTRY) {
    throw new Error("entry.txt does not match ENTRY after write");
  }
  validateEntry(written);
}

main();
