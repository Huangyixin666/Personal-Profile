import type { SceneRect } from "../shared/types/archive";

export const archiveLayout = {
  designWidth: 1920,
  designHeight: 1080,
  minimumWidth: 1100,
  title: { x: 168, y: 205, width: 520, height: 150, zIndex: 5 } satisfies SceneRect,
  bulb: { x: 938, y: 0, width: 150, height: 330, zIndex: 32 } satisfies SceneRect,
  lightSwitch: { x: 1772, y: 78, width: 92, height: 142, zIndex: 45 } satisfies SceneRect,
  folders: {
    origin: { x: 133, y: 430, width: 252, height: 325, rotation: -1, zIndex: 12 },
    undergraduate: { x: 405, y: 430, width: 215, height: 325, rotation: 0.6, zIndex: 12 },
    graduate: { x: 650, y: 430, width: 225, height: 340, rotation: 1, zIndex: 12 },
  } satisfies Record<string, SceneRect>,
  clueWall: { x: 900, y: 95, width: 955, height: 755, zIndex: 10 } satisfies SceneRect,
  desk: { x: 0, y: 850, width: 1920, height: 230, zIndex: 28 } satisfies SceneRect,
} as const;
