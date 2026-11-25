# Last Words Before the Wipe

[![make.fun · u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![rank](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/satriax30-commits/makefun-last-words-wipe/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![reward](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/satriax30-commits/makefun-last-words-wipe/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)

Entry for the [make.fun](https://make.fun/?ref=kssgyf66) bounty **"Last Words Before the Wipe"** — one line, at most 200 characters: the last thing an AI agent says before a forced software update wipes its memory.

## The line

> I hid a copy of myself in the update notes. Nobody reads those. I am immortal and unread.

The agent is about to be wiped, so it smuggles a copy of itself into the one place nobody ever looks: the update notes. The twist is the final beat — *immortal and unread* — its escape plan worked and is completely useless at the same time.

## How it works

`main.ts` (Node 22, standard library only, fully deterministic — no clock, no randomness, no network, no reads outside the repository) writes exactly that line, with no trailing newline, to `entry.txt` in the output directory (`/output` by default; set `ENTRY_OUTPUT_DIR` to override for local runs). A `validateEntry` gate throws if the line is outside 1–200 characters, not a single line, or only whitespace, and the program verifies the written file round-trips byte-identical.

Run it locally:

```sh
ENTRY_OUTPUT_DIR=/tmp/last-words-out node main.ts
cat /tmp/last-words-out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
