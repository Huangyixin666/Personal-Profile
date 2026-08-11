import type { ArchiveFolderData } from "../../../shared/types/archive";

export const archiveFolders: ArchiveFolderData[] = [
  { id: "origin", number: "01", label: "PERSONAL FILE", coverTitle: "个人档案", institution: "浙江台州", summary: "姓名______  性别______  民族______", documents: [
    { title: "出生地", value: "浙江台州" }, { title: "关键词", value: "沿海、城市、观察、设计" }, { title: "起点", value: "从日常生活中发现人与空间的关系" },
  ] },
  { id: "undergraduate", number: "02", label: "UNDERGRADUATE", coverTitle: "本科档案", institution: "四川农业大学", summary: "姓名______  性别______  民族______", documents: [
    { title: "专业", value: "城乡规划" }, { title: "方向", value: "城市设计、空间分析与公共空间" }, { title: "能力", value: "调研、制图、叙事与方案表达" },
  ] },
  { id: "graduate", number: "03", label: "GRADUATE", coverTitle: "硕士档案", institution: "华南理工大学", summary: "姓名______  性别______  民族______", documents: [
    { title: "专业", value: "城乡规划" }, { title: "研究", value: "城市研究、数据分析与设计方法" }, { title: "转向", value: "从空间设计延伸至 AI 产品与体验" },
  ], studentCard: { enabled: true, name: "黄一昕", institution: "华南理工大学", major: "城乡规划", number: "ARCHIVE 03" } },
];
