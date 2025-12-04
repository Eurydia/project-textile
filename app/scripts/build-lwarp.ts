#!/usr/bin/env node
import { promises as fs } from "node:fs";
import path from "node:path";
import os from "node:os";
import { spawn } from "node:child_process";
import { globby } from "globby";

const SOURCE_DIR = path.resolve(process.cwd(), "tex-src");
const OUT_DIR = path.resolve(process.cwd(), "public", "lwarp");
const TEMP_ROOT = process.env.RUNNER_TEMP || os.tmpdir();
const VERBOSE = false;

async function findTexFiles(): Promise<string[]> {
  const files = await globby("**/*.tex", {
    cwd: SOURCE_DIR,
    absolute: true,
    gitignore: true,
    ignore: ["**/node_modules/**", "**/.git/**", "**/.next/**"],
  });
  files.sort();
  return files;
}

function makeLatexmkEnv(buildDir: string): NodeJS.ProcessEnv {
  const existing = process.env.LATEXMKOPTS ?? "";
  const outdirOpt = `-outdir=${buildDir}`;
  const merged = existing ? `${existing} ${outdirOpt}` : outdirOpt;

  return {
    LATEXMKOPTS: merged,
  };
}

function runCommand(
  cmd: string,
  args: string[],
  cwd: string,
  verbose: boolean,
  extraEnv?: NodeJS.ProcessEnv
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (verbose) {
      console.log(`\n$ ${cmd} ${args.join(" ")} (cwd: ${cwd})`);
      if (extraEnv?.LATEXMKOPTS) {
        console.log(`   LATEXMKOPTS=${extraEnv.LATEXMKOPTS}`);
      }
    }

    const child = spawn(cmd, args, {
      cwd,
      stdio: "inherit",
      shell: process.platform === "win32",
      env: extraEnv ? { ...process.env, ...extraEnv } : process.env,
    });

    child.on("error", (err) => reject(err));
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} exited with code ${code}`));
    });
  });
}

async function copyHtmlFromBuildDir(buildDir: string, texPath: string) {
  // All lwarp HTML lives in the LaTeX output directory
  const htmlFiles = await globby("*.html", {
    cwd: buildDir,
    absolute: true,
  });

  if (htmlFiles.length === 0) {
    if (VERBOSE) {
      console.warn(`No HTML files in build dir: ${buildDir}`);
    }
    return;
  }

  const relTexDir = path.dirname(path.relative(SOURCE_DIR, texPath));
  const destDir = path.join(OUT_DIR, relTexDir === "." ? "" : relTexDir);
  await fs.mkdir(destDir, { recursive: true });

  for (const srcPath of htmlFiles) {
    const destPath = path.join(destDir, path.basename(srcPath));
    if (VERBOSE) {
      console.log(`Copying ${srcPath} -> ${destPath}`);
    }
    await fs.copyFile(srcPath, destPath);
  }
}

async function processTexFile(texPath: string): Promise<void> {
  const projectDir = path.dirname(texPath);
  const jobname = path.basename(texPath, ".tex");
  const relTexPath = path.relative(SOURCE_DIR, texPath);

  // Per-file temp build directory
  const buildDir = await fs.mkdtemp(path.join(TEMP_ROOT, "lwarp-"));

  console.log(`\n=== Processing ${relTexPath} ===`);
  // console.log(`Build dir: ${buildDir}`);

  try {
    // 1. Print PDF compile into temp (keeps projectDir clean)
    await runCommand(
      "pdflatex",
      ["-interaction=nonstopmode", "-output-directory", buildDir, jobname],
      projectDir,
      VERBOSE
    );

    // 2. Full HTML pipeline via lwarpmk, with latexmk outdir = temp
    await runCommand(
      "lwarpmk",
      ["html"],
      projectDir,
      VERBOSE,
      makeLatexmkEnv(buildDir)
    );

    // 3. Copy finished HTML from temp to OUT_DIR (preserve relative path)
    await copyHtmlFromBuildDir(buildDir, texPath);
  } finally {
    // 4. Drop temp tree (on CI this is redundant but keeps local runs clean)
    await fs.rm(buildDir, { recursive: true, force: true });
  }
}

async function main() {
  console.log(`Source directory: ${SOURCE_DIR}\nOutput directory: ${OUT_DIR}`);
  await fs.mkdir(OUT_DIR, { recursive: true });

  const texFiles = await findTexFiles();
  if (texFiles.length === 0) {
    console.log("No .tex files found.");
    return;
  }

  console.log(`Found ${texFiles.length} .tex file(s).`);

  for (const texPath of texFiles) {
    try {
      await processTexFile(texPath);
    } catch (err) {
      console.error(
        `Error while processing ${path.relative(SOURCE_DIR, texPath)}:`,
        err
      );
      process.exitCode = 1;
    }
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
