import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";

const root = process.cwd();
const outputDir = join(root, "out");
const sourceDir = join(root, "outputs");
const pages = [
  "personal-archive-new.html",
  "design-corridor.html",
  "internship-room.html",
  "research-room.html",
];

await mkdir(outputDir, { recursive: true });
await cp(
  join(root, "personal information", "src", "assets"),
  join(outputDir, "personal information", "src", "assets"),
  { recursive: true },
);

for (const file of pages) {
  let html = await readFile(join(sourceDir, file), "utf8");
  html = html
    .replaceAll("../personal%20information/", "./personal%20information/")
    .replaceAll("http://127.0.0.1:4174/room", "./room/")
    .replaceAll("./personal-archive-new.html", "./");
  const target = file === "personal-archive-new.html" ? "index.html" : basename(file);
  await writeFile(join(outputDir, target), html, "utf8");
}
