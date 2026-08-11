import type { ClueItem } from "../../../shared/types/archive";
import styles from "../styles/clueWall.module.css";
export function TicketCard({ item }: { item: ClueItem }) {
  return <span className={styles.ticketContent}><small>{item.label}</small><strong>{item.title}</strong><em>23 MAY 2023</em></span>;
}
