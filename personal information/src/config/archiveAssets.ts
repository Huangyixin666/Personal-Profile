/**
 * 首页通用素材变量。
 * 替换文件时优先保持这些文件名不变，页面组件无需同步修改。
 */
export const archiveAssets = {
  desk: {
    foreground: "../assets/desk/foreground-objects.png",
  },
  lighting: {
    backgroundLit: "../assets/lighting/archive-background-lit.png",
    backgroundUnlit: "../assets/lighting/archive-background-unlit.png",
    bulbLit: "../assets/lighting/bulb-lit.png",
    bulbUnlit: "../assets/lighting/bulb-unlit.png",
    litBrightness: 1.65,
    unlitBrightness: 0.52,
  },
  viewport: {
    mode: "stretch",
    designWidth: 1920,
    designHeight: 1080,
  },
} as const;
