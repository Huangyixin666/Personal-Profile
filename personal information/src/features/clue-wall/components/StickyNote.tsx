import type { ClueItem } from "../../../shared/types/archive";
import styles from "../styles/clueWall.module.css";
export function StickyNote({ item }: { item: ClueItem }) {
  return <span className={styles.stickyContent}><small>{item.label}</small><strong>{item.title}</strong><em>{item.summary}</em></span>;
}
