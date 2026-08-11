import type { CSSProperties, ReactNode } from "react";
import type { ClueItem } from "../../../shared/types/archive";
import styles from "../styles/clueWall.module.css";

type PaperStyle = CSSProperties & {
  "--paper-x": string; "--paper-y": string; "--paper-w": string; "--paper-h": string;
  "--paper-r": string; "--paper-z": string;
};

type InteractivePaperProps = {
  item: ClueItem;
  active: boolean;
  onHover: (id: string | null) => void;
  onOpen: (item: ClueItem) => void;
  children: ReactNode;
  className?: string;
};

export function InteractivePaper({ item, active, onHover, onOpen, children, className = "" }: InteractivePaperProps) {
  const style: PaperStyle = {
    "--paper-x": `${item.position.x}px`, "--paper-y": `${item.position.y}px`,
    "--paper-w": `${item.size.width}px`, "--paper-h": `${item.size.height}px`,
    "--paper-r": `${item.rotation}deg`, "--paper-z": `${item.zIndex}`,
  };
  return (
    <button
      className={`${styles.interactivePaper} ${className} ${active ? styles.activePaper : ""}`}
      style={style}
      type="button"
      tabIndex={0}
      aria-label={`查看档案：${item.title}`}
      aria-expanded={active}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(item.id)}
      onBlur={() => onHover(null)}
      onClick={() => onOpen(item)}
    >
      <span className={styles.pin} />
      {children}
      <span className={styles.openFile}>OPEN FILE ↗</span>
    </button>
  );
}
