# 个人档案主页：通用视觉素材调研

更新日期：2026-07-31  
状态：第一批候选已确认并完成归档；页面尚未修改。

## 1. 筛选原则

- 优先级：CC0 / 公共领域 → 允许商用且需署名 → 仅作造型参考。
- 正式素材只从素材详情页下载，不从搜索结果图片或第三方搬运站下载。
- 不采用带水印、带品牌标识、许可不清楚、像素过低或包含不可编辑成品文字的图片。
- 报纸、档案袋、便签与车票保留 HTML 文字能力；纹理只作为底层材质。
- 表内“待确认采用”不等于已下载。得到确认后才会进入 `src/assets/`。

## 2. 第一批候选素材

| 素材名称 | 预览或建议文件名 | 来源页面 | 作者 | 授权类型 | 允许商业使用 | 需要署名 | 建议使用位置 | 是否准备正式采用 |
|---|---|---|---|---|---|---|---|---|
| 深色旧墙面纹理 | `wall-plaster-03.webp` | [Poly Haven · Plastered Wall 03](https://polyhaven.com/a/plastered_wall_03) | Rob Tuytel / Poly Haven | CC0 | 是 | 否 | 主页面墙面，压暗、降饱和后使用 | **待确认采用（首选）** |
| 备选旧墙面纹理 | `wall-painted-plaster.webp` | [Poly Haven · Painted Plaster Wall](https://polyhaven.com/a/painted_plaster_wall) | Amal Kumar / Poly Haven | CC0 | 是 | 否 | 备用墙面；污渍更明显 | 待确认，二选一 |
| 木质桌面纹理 | `desk-fine-grained-wood.webp` | [Poly Haven · Fine Grained Wood](https://polyhaven.com/a/fine_grained_wood) | Rob Tuytel / Poly Haven | CC0 | 是 | 否 | 页面底部桌面；裁切为横向并调成深胡桃木色 | **待确认采用** |
| 牛皮纸/纸板纹理 | `kraft-cardboard-001.webp` | [ambientCG · Cardboard 001](https://ambientcg.com/view?id=Cardboard001) | ambientCG | CC0 | 是 | 否 | 三个档案袋、牛皮纸便签、旧票据底纹 | **已采用并归档** |
| 米白档案纸纹理 | `paper-ivory-001.webp` | [ambientCG · Paper 001](https://ambientcg.com/view?id=Paper001) | ambientCG | CC0 | 是 | 否 | 报纸、档案内页和说明卡；在 CSS 中染成米白 | **已采用并归档** |
| 旧报纸纹理 | 复用 `paper-ivory-001.webp` + CSS 污渍层 | 同上 | ambientCG + 项目代码 | CC0 + 自制代码 | 是 | 否 | 通用纸纹理上叠加噪点、折痕、边缘泛黄；正文全部用 HTML | **不另找成品报纸，按此方案实现** |
| 透明白炽灯泡 | `bulb-clear-public-domain.png` | [Wikimedia Commons · Clear light bulb](https://commons.wikimedia.org/wiki/File:Clear_light_bulb.png) | Dogears | 公共领域 | 是 | 否 | 灯泡玻璃和灯丝主体；灯座、吊线与光晕由 CSS/SVG 补齐 | **待确认采用，但清晰度中等** |
| 复古灯泡造型参考 | `reference-vintage-bulb.jpg` | [Wikimedia Commons · Vintage Light bulb](https://commons.wikimedia.org/wiki/File:Vintage_Light_bulb.jpg) | Viano Arcery | CC BY 4.0 | 是 | 是 | 只用于校准灯丝、色温和玻璃质感 | 仅放 `assets/references/`，不直接上页面 |
| 电木墙壁开关参考 | `reference-bakelite-switch.jpg` | [Wikimedia Commons · Bakelite tumbler switch](https://commons.wikimedia.org/wiki/File:Bakelite_tumbler_switch.jpg) | Shyamal L. | CC BY-SA 4.0 | 是 | 是，并有相同方式共享要求 | 参考 1940 年代电木旋钮与面板比例；正式开关建议用 CSS/SVG 重绘 | **仅参考，不直接采用** |
| 中国传统档案袋外形 | `archive-envelope-css` | 无合适的授权明确成品；采用项目内 HTML/CSS | 项目代码 | 自制 | 是 | 否 | 带翻盖、绕线扣和表格线的中文档案袋；文字保持可编辑 | **代码实现，不下载成品图** |
| 旧书叠放场景 | `old-books-eli-francis.jpg` | [Wikimedia Commons · Old books (Unsplash)](https://commons.wikimedia.org/wiki/File:Old_books_(Unsplash).jpg) | Eli Francis | CC0 | 是 | 否 | 桌面左下角书堆；需要抠图、暖色化并压暗 | **待确认采用，先验证抠图效果** |
| 笔记本与铅笔 | `notebook-jan-kahanek.jpg` | [Wikimedia Commons · A notebook](https://commons.wikimedia.org/wiki/File:A_notebook.jpg) | Jan Kahánek | CC0 | 是 | 否 | 桌面右下角；构图合适但目前是铅笔而非钢笔 | 待确认；钢笔另作 SVG 或继续寻找 |
| 放大镜 | `magnifier-placeholder.svg` | 当前未找到同时满足写实、透明底、高分辨率、许可清楚的候选 | 项目代码（临时） | 自制 | 是 | 否 | 桌面中下部；先用简化 SVG 占位，标记 TODO | **暂不下载，继续寻找** |
| 空白老式明信片 | `blank-postcard.svg` | [Wikimedia Commons · Plain postcard](https://commons.wikimedia.org/wiki/File:Plain_postcard.svg) | Altstar | CC0 | 是 | 否 | 线索墙小卡片或桌面纸件；文字与邮戳另用 HTML/SVG 叠加 | **待确认采用** |
| 老地图 | `old-world-map-forlani.jpg` | [Wikimedia Commons · Old-world-map](https://commons.wikimedia.org/wiki/File:Old-world-map.jpg) | Paolo Forlani（1565） | 公共领域 | 是 | 否 | 桌面散落地图或线索墙地图碎片；低对比度处理 | **待确认采用** |
| 红色图钉照片 | `pushpin-red-cc0.png` | [Wikimedia Commons · Red push pin](https://commons.wikimedia.org/wiki/File:Red_push_pin.png) | 原 Pixabay 作者；Commons 已复核 | CC0 | 是 | 否 | 线索墙图钉；需去白边并统一成暗红/黄铜色 | 待确认；更建议 CSS/SVG 重绘 |
| 图钉造型备选 | `pushpin-public-domain.jpg` | [Wikimedia Commons · Pushpin](https://commons.wikimedia.org/wiki/File:Pushpin.jpg) | Lander777 | 公共领域 | 是 | 否 | 只作光影与比例参考 | 仅参考，不直接采用 |
| 回形针 | `paperclip-standing.svg` | [Wikimedia Commons · Paperclip standing](https://commons.wikimedia.org/wiki/File:Paperclip_standing.svg) | GeMet | 公共领域 | 是 | 否 | 报纸和纸条上的回形针；SVG 可着色为旧黄铜 | **待确认采用** |
| 老式车票 | `vintage-ticket-css` | 未发现风格吻合且文字可编辑的成品 | 项目代码 | 自制 | 是 | 否 | 用 CSS/SVG 画票根、齿孔、编号线，票面文字保持可编辑 | **代码实现，不下载成品图** |
| 邮票 | `stamp-frame-css` | 不使用含人物、国家或不可编辑文字的成品邮票 | 项目代码 | 自制 | 是 | 否 | 只做齿孔边框、印章和色块，内容由用户后续提供 | **代码实现，不下载成品图** |
| 绕线扣、红线、折痕、阴影 | `decorative-elements-css` | 无外部素材 | 项目代码 | 自制 | 是 | 否 | 档案袋绕线扣、线索连线、纸张折痕与悬浮阴影 | **代码实现** |

## 3. 本轮明确淘汰的候选

| 候选 | 淘汰原因 |
|---|---|
| 搜索引擎里直接出现的“复古档案袋/侦探线索墙”成品图 | 来源与二次使用许可不清楚，而且文字不可编辑 |
| `Loupe-transparent.png` 等低分辨率放大镜图标 | 只有约 66×62 等小尺寸，放大后失真，且不符合写实风格 |
| 通用信封图标或邮件图标 | 外形不符合中国传统绕线档案袋，视觉过于现代、扁平 |
| 完整报纸模板图片 | 会把标题和正文固化进图片，违背“通用纹理 + HTML 排版 + 用户内容图”的要求 |
| CC BY-SA 开关照片直接用于页面 | 虽然允许商用，但需要署名并涉及相同方式共享；只保留为造型参考更稳妥 |

## 4. 推荐采用组合

建议第一轮正式素材采用以下组合，整体最接近目标图的写实、复古、低饱和效果：

1. 墙面：`Plastered Wall 03`，深色化后作为全屏无缝背景。
2. 桌面：`Fine Grained Wood`，转成横向深胡桃木色。
3. 档案袋：`Cardboard 001` 只提供纹理，档案袋外形、绕线扣和文字全部代码实现。
4. 报纸和档案纸：`Paper 001` 提供统一纸纤维；老化、污渍、折痕和分栏由 CSS/HTML 完成。
5. 灯泡：公共领域透明灯泡作为基础，灯座、吊线、光晕与开关状态由代码完成。
6. 桌面装饰：旧书、地图、明信片可以采用候选图片；放大镜和钢笔暂用明确标注的占位版本。
7. 小五金：红线、绕线扣、图钉优先代码实现；回形针可采用公共领域 SVG。

## 5. 用户需要确认的事项

请确认是否同意以下决策后再下载正式版本：

- 墙面使用 `Plastered Wall 03`，不使用更浅的 `Painted Plaster Wall`。
- 档案袋不使用完整照片，而采用 `Cardboard 001` 纹理 + HTML/CSS 可编辑结构。
- 灯泡先采用公共领域透明 PNG 组合实现；如果最终质感不足，再单独寻找或制作更高质量透明素材。
- 电木开关照片只作参考，正式控件由 CSS/SVG 重绘。
- 旧书、地图、明信片进入正式候选；笔记本候选保留，但钢笔另寻。
- 放大镜本轮不使用低质量图标，保持 TODO 占位，后续继续寻找或制作。

## 6. 确认后才会执行的下载结构

```text
personal information/
├─ assets/
│  └─ references/          # 只用于理解风格，不进入正式页面
└─ src/
   └─ assets/
      ├─ lighting/
      ├─ archive-folders/
      ├─ textures/
      ├─ desk/
      ├─ clue-wall/
      ├─ paper-elements/
      └─ icons/
```

下载时还会同步创建素材登记文件，记录原始文件名、来源 URL、作者、授权和实际使用位置，避免后续无法追溯。

## 7. 归档执行结果

- 第一批正式素材已整理至 `personal information/src/assets/`。
- 仅作造型参考的电木开关和复古灯泡已放入 `personal information/assets/references/`。
- 正式素材来源、作者、许可及处理方式见 `personal information/src/assets/ASSET_SOURCES.md`。
- 8K 牛皮纸与较大的纸张原图未直接留在项目中，已转换为适合网页的 2048px WebP。
- 当前没有下载放大镜、钢笔或完整报纸图片；这些项目继续遵守 TODO / 代码实现方案。
