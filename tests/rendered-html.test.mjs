import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("route delegates to the isolated personal archive page", async () => {
  const page = await read("app/page.tsx");
  assert.match(page, /personal information\/src\/pages\/archive-home/);
  assert.match(page, /<ArchiveHomePage/);
});

test("content, layout and clue connections stay data-driven", async () => {
  const [folders, clues, connections, layout] = await Promise.all([
    read("personal information/src/features/archive-folders/data/archiveFolders.ts"),
    read("personal information/src/features/clue-wall/data/clueItems.ts"),
    read("personal information/src/features/clue-wall/data/clueConnections.ts"),
    read("personal information/src/config/archiveLayout.ts"),
  ]);
  assert.match(folders, /个人档案/);
  assert.match(folders, /四川农业大学/);
  assert.match(folders, /华南理工大学/);
  assert.match(clues, /论文研究/);
  assert.match(connections, /design-research/);
  assert.match(layout, /designWidth:\s*1672/);
  assert.match(layout, /designHeight:\s*941/);
});

test("lighting and red strings use interactive CSS and SVG implementations", async () => {
  const [flashlight, strings] = await Promise.all([
    read("personal information/src/features/lighting/components/FlashlightMask.tsx"),
    read("personal information/src/features/clue-wall/components/RedStringLayer.tsx"),
  ]);
  assert.match(flashlight, /--flashlight-x/);
  assert.match(flashlight, /pointermove/);
  assert.match(strings, /<svg/);
  assert.match(strings, /<line/);
});
