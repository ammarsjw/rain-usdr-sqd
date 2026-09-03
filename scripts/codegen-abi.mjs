// Runs squid-evm-typegen over every ABI in ./abi.
//
// The glob is expanded here rather than in the npm script because npm on Windows runs scripts
// through cmd.exe, which does not expand globs, and squid-evm-typegen passes each argument
// straight to readFileSync.

import { execFileSync } from "node:child_process";
import { readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const abiDir = path.join(root, "abi");
const outDir = "src/abi";

const abis = readdirSync(abiDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => path.join(abiDir, f));

if (abis.length === 0) {
    console.error(`No ABI files found in ${abiDir}`);
    process.exit(1);
}

const typegen = path.join(root, "node_modules", "@subsquid", "evm-typegen", "bin", "run.js");

execFileSync(process.execPath, [typegen, outDir, ...abis], { cwd: root, stdio: "inherit" });
