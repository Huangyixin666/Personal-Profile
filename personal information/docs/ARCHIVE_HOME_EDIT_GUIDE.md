# 个人档案主页修改导航

| 我想修改什么 | 应该进入哪个文件 |
|---|---|
| 修改档案袋标题、学校、地点或简介 | `src/features/archive-folders/data/archiveFolders.ts` |
| 修改档案袋内部详细信息 | `src/features/archive-folders/data/archiveFolders.ts` |
| 修改档案袋打开、翻盖、绕线动画 | `src/features/archive-folders/styles/archiveFolders.module.css` |
| 修改学生证文字 | `src/features/archive-folders/data/archiveFolders.ts` |
| 替换学生证图片 | `src/features/archive-folders/assets/scut/`，并在 `archiveFolders.ts` 增加图片路径 |
| 修改论文、设计成果或实习报纸内容 | `src/features/clue-wall/data/clueItems.ts` |
| 修改明信片、照片、便签、票据内容 | `src/features/clue-wall/data/clueItems.ts` |
| 移动、缩放或旋转某张纸片 | `src/features/clue-wall/data/clueItems.ts` |
| 修改红线连接关系 | `src/features/clue-wall/data/clueConnections.ts` |
| 修改纸片和红线视觉 | `src/features/clue-wall/styles/clueWall.module.css` |
| 修改灯泡位置 | `src/config/archiveLayout.ts` |
| 修改开关位置 | `src/config/archiveLayout.ts` |
| 修改灯泡、开关或手电筒样式 | `src/features/lighting/styles/lighting.module.css` |
| 修改页面主题颜色 | `src/config/archiveTheme.ts` |
| 修改全局 CSS 颜色变量 | `src/styles/variables.css` |
| 修改标题位置、桌面高度或线索墙区域 | `src/config/archiveLayout.ts` |
| 修改桌面物品样式 | `src/features/archive-desk/styles/archiveDesk.module.css` |
| 替换背景纹理 | `src/assets/backgrounds/`，并在 `ArchiveHomePage.module.css` 引用 |
| 修改顶部或底部导航文字 | `src/features/archive-navigation/components/` |

说明：本文档中的 `src/` 均指 `personal information/src/`。
