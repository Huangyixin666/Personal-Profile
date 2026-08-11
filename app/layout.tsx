import type { Metadata } from "next";
import "../personal information/src/styles/globals.css";

export const metadata: Metadata = {
  title: "黄一昕档案袋｜个人作品与经历",
  description: "一份关于成长、设计、研究与 AI 转变的互动个人档案。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
