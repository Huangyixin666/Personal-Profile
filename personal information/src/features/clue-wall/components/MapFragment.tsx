import type { ClueItem } from "../../../shared/types/archive";
import styles from "../styles/clueWall.module.css";
export function MapFragment({ item }: { item: ClueItem }) {
  return <span className={styles.mapContent} aria-label={item.title}><i /><i /><i /><i /></span>;
}
