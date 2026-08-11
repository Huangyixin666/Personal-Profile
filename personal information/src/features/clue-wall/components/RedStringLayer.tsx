import type { Anchor, ClueConnection, ClueItem, Point } from "../../../shared/types/archive";
import styles from "../styles/clueWall.module.css";

function anchorPoint(item: ClueItem, anchor: Anchor): Point {
  const { x, y } = item.position;
  const { width, height } = item.size;
  const points: Record<Anchor, Point> = {
    "left-top": { x, y: y + 18 }, "left-bottom": { x, y: y + height - 18 },
    "right-top": { x: x + width, y: y + 18 }, "right-bottom": { x: x + width, y: y + height - 18 },
    center: { x: x + width / 2, y: y + height / 2 },
  };
  return points[anchor];
}

export function RedStringLayer({ items, connections, highlightedId }: { items: ClueItem[]; connections: ClueConnection[]; highlightedId: string | null }) {
  const byId = new Map(items.map((item) => [item.id, item]));
  return (
    <svg className={styles.redStrings} viewBox="0 0 865 670" aria-hidden="true">
      {connections.map((connection) => {
        const fromItem = byId.get(connection.from.itemId);
        const toItem = byId.get(connection.to.itemId);
        if (!fromItem || !toItem) return null;
        const from = anchorPoint(fromItem, connection.from.anchor);
        const to = anchorPoint(toItem, connection.to.anchor);
        const related = !highlightedId || connection.from.itemId === highlightedId || connection.to.itemId === highlightedId;
        return <line key={connection.id} x1={from.x} y1={from.y} x2={to.x} y2={to.y} className={related ? styles.relatedString : styles.dimmedString} />;
      })}
    </svg>
  );
}
