import type { ClueConnection } from "../../../shared/types/archive";

export const clueConnections: ClueConnection[] = [
  { id: "design-research", from: { itemId: "design", anchor: "right-top" }, to: { itemId: "research", anchor: "left-top" } },
  { id: "design-internship", from: { itemId: "design", anchor: "right-bottom" }, to: { itemId: "internship", anchor: "left-top" } },
  { id: "research-internship", from: { itemId: "research", anchor: "left-bottom" }, to: { itemId: "internship", anchor: "right-top" } },
  { id: "research-question", from: { itemId: "research", anchor: "right-bottom" }, to: { itemId: "question", anchor: "left-top" } },
  { id: "internship-checklist", from: { itemId: "internship", anchor: "right-bottom" }, to: { itemId: "checklist", anchor: "left-top" } },
  { id: "checklist-map", from: { itemId: "checklist", anchor: "right-bottom" }, to: { itemId: "map", anchor: "left-top" } },
];
