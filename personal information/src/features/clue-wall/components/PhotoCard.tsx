import type { ClueItem } from "../../../shared/types/archive";
import styles from "../styles/clueWall.module.css";
export function PhotoCard({ item }: { item: ClueItem }) {
  return <span className={styles.photoContent}><span className={styles.photoScene}><i /></span><small>{item.title}</small></span>;
}
