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
    .replaceAll("./personal-archive-new.html", "/Personal-Profile/")
    .replaceAll('href="./"', 'href="/Personal-Profile/"');
  html = html.replace(
    /<a class="back" href="\/Personal-Profile\/">/g,
    '<a class="back" href="/Personal-Profile/" onclick="if(document.referrer.includes(\'/Personal-Profile/\')){event.preventDefault();history.back()}">',
  );
  const target = file === "personal-archive-new.html" ? "index.html" : basename(file);
  await writeFile(join(outputDir, target), html, "utf8");
}

await writeFile(
  join(outputDir, "404.html"),
  `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>返回个人档案</title><script>location.replace("/Personal-Profile/")</script></head><body style="margin:0;background:#050504;color:#c8b18a;display:grid;place-items:center;min-height:100vh;font-family:serif">正在返回个人档案……</body></html>`,
  "utf8",
);
