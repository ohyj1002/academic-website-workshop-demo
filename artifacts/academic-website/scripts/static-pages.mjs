import { mkdir, readFile, writeFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import assert from "node:assert/strict";

const output = fileURLToPath(new URL("../dist/public/", import.meta.url));
const base = process.env.BASE_PATH;
assert(base?.startsWith("/") && base.endsWith("/"), "BASE_PATH must start and end with /");
const html = await readFile(path.join(output, "index.html"), "utf8");

// Pages serves these real directories without an SPA fallback or a backend.
// Wouter renders the matching page using the browser's current pathname.
for (const route of ["research", "cv", "contact"]) {
  const directory = path.join(output, route);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), html);
}
await writeFile(path.join(output, ".nojekyll"), "");

const required = [
  "index.html",
  "research/index.html",
  "cv/index.html",
  "contact/index.html",
  "favicon.svg",
  "assets/profile-photo.png",
  "assets/featured-figure.png",
  "assets/featured-study.pdf",
  "assets/cv.pdf",
];
for (const file of required) {
  assert((await stat(path.join(output, file))).size > 0, `Missing or empty output: ${file}`);
}
const bundledFiles = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((url) => !url.startsWith("https://"));
assert(bundledFiles.some((url) => url.endsWith(".js")), "Missing JavaScript bundle");
assert(bundledFiles.some((url) => url.endsWith(".css")), "Missing CSS bundle");
for (const url of bundledFiles) {
  assert(url.startsWith(base), `Asset escapes the project base path: ${url}`);
  await stat(path.join(output, url.slice(base.length)));
}
console.info(`Static output verified: all four page entries and required assets under ${base}`);
