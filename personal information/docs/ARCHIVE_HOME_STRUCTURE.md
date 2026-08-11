# 个人档案主页结构

## 隔离边界

个人主页的业务代码、数据、样式、专属素材与文档全部位于 `personal information/`。项目根目录的 `app/` 仅保留 Next.js 必需的路由入口。

## 页面入口

- `app/page.tsx`：根路由 `/`，只负责渲染个人档案主页。
- `personal information/src/pages/archive-home/ArchiveHomePage.tsx`：页面组合层，只安排模块，不承载模块细节。
- `personal information/src/pages/archive-home/ArchiveHomePage.module.css`：固定画布与模块容器。

## 目录职责

- `src/config/`：画布、位置、尺寸、旋转、层级与主题。
- `src/features/archive-folders/`：左侧三个档案袋及其数据、动画、学生证。
- `src/features/clue-wall/`：右侧报纸、明信片、照片、便签、票据、地图、弹窗和 SVG 红线。
- `src/features/lighting/`：灯泡、老式开关、手电筒蒙版和灯光状态。
- `src/features/archive-desk/`：桌面、书籍、地图、放大镜、笔记本和钢笔。
- `src/features/archive-navigation/`：顶部标题栏和底部章节导航。
- `src/shared/`：确实被多个功能复用的类型、弹窗与 Hooks。
- `src/styles/`：全局重置和主题 CSS 变量。

## 控制内容的位置

- 全局模块位置：`src/config/archiveLayout.ts`
- 线索墙纸片位置：`src/features/clue-wall/data/clueItems.ts`
- 档案袋文字和内部信息：`src/features/archive-folders/data/archiveFolders.ts`
- 线索墙文字和详情：`src/features/clue-wall/data/clueItems.ts`
- 红线连接：`src/features/clue-wall/data/clueConnections.ts`
- 主题颜色：`src/config/archiveTheme.ts` 与 `src/styles/variables.css`

## 图片归属

- 档案袋专属图片放在 `src/features/archive-folders/assets/` 对应地点子目录。
- 线索墙专属图片放在 `src/features/clue-wall/assets/` 对应类别子目录。
- 只被整个页面共同使用的背景纹理放在 `src/assets/`。
- 当前版本的主要视觉由 HTML 与 CSS 构成，没有把标题或正文写进图片。
