import type { ClueItem } from "../../../shared/types/archive";
import styles from "../styles/clueWall.module.css";
export function ChecklistCard({ item }: { item: ClueItem }) {
  return <span className={styles.checklistContent}><strong>{item.title}</strong>{item.summary.split(" · ").map((line) => <em key={line}>☑ {line}</em>)}</span>;
}
