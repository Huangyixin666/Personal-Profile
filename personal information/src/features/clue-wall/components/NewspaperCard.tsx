import type { ClueItem } from "../../../shared/types/archive";
import styles from "../styles/clueWall.module.css";

export function NewspaperCard({ item }: { item: ClueItem }) {
  return (
    <span className={styles.newspaperContent}>
      <small>{item.label}</small>
      <strong>{item.title}</strong>
      <span className={styles.newspaperPhoto}><i /><i /><i /></span>
      <em>{item.summary}</em>
      <span className={styles.columnLines} />
    </span>
  );
}
