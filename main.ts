import { writeFileSync } from "node:fs";
import path from "node:path";

// The Funniest Toaster Error Message — entry for
// yusfiyan/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd
//
// One line, deadpan, and fresh: instead of the toaster apologising for
// burnt bread (the obvious joke every entry will make), the toaster
// blames the owner. It reads like a real appliance error code, holds
// one voice to the end, and lands on a single read.
const ENTRY = "E12: The bread is fine. You are the problem.";

// Gate guard: the entry must be 1-120 characters and not whitespace-only.
if (ENTRY.length < 1 || ENTRY.length > 120 || ENTRY.trim().length === 0) {
  throw new Error(`Entry fails the gate: ${ENTRY.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const outPath = path.join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
