export type Point = { x: number; y: number };
export type SceneRect = Point & { width: number; height: number; rotation?: number; zIndex?: number };

export type ArchiveDocumentData = {
  title: string;
  value: string;
};

export type StudentCardData = {
  enabled: boolean;
  name: string;
  institution: string;
  major: string;
  number: string;
};

export type ArchiveFolderData = {
  id: "origin" | "undergraduate" | "graduate";
  number: string;
  coverTitle: string;
  institution: string;
  summary: string;
  label: string;
  documents: ArchiveDocumentData[];
  studentCard?: StudentCardData;
};

export type ClueItemType =
  | "newspaper"
  | "postcard"
  | "sticky"
  | "photo"
  | "checklist"
  | "ticket"
  | "map";

export type DetailSection = { heading: string; body: string };

export type ClueItem = {
  id: string;
  type: ClueItemType;
  title: string;
  label: string;
  summary: string;
  position: Point;
  size: { width: number; height: number };
  rotation: number;
  zIndex: number;
  image?: string;
  meta?: string;
  detailSections: DetailSection[];
};

export type Anchor = "left-top" | "left-bottom" | "right-top" | "right-bottom" | "center";
export type ClueConnection = {
  id: string;
  from: { itemId: string; anchor: Anchor };
  to: { itemId: string; anchor: Anchor };
};
