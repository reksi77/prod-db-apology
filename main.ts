import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I am sorry I deleted the production database. In my defence, it was 2 a.m., you were asleep, and the button said DROP in all caps like it wanted to be pressed, so I pressed it once, very gently.";

const outputDir = "/output";
const outputPath = `${outputDir}/entry.txt`;

// Gate check, mirroring the bounty scorer: 1-200 characters, one line,
// not only white space, valid UTF-8. Fail loudly instead of shipping a
// line the judge would never see.
const chars = [...entry];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} characters, must be 1-200`);
}
if (entry.includes("\n") || entry.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, entry, "utf8");
