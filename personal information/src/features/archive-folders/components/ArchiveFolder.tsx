import type { CSSProperties } from "react";
import type { ArchiveFolderData, SceneRect } from "../../../shared/types/archive";
import { ArchiveFolderContent } from "./ArchiveFolderContent";
import { ArchiveFolderCover } from "./ArchiveFolderCover";
import styles from "../styles/archiveFolders.module.css";

type FolderStyle = CSSProperties & {
  "--folder-x": string;
  "--folder-y": string;
  "--folder-width": string;
  "--folder-rotation": string;
  "--folder-z": string;
};

type ArchiveFolderProps = {
  folder: ArchiveFolderData;
  layout: SceneRect;
  isOpen: boolean;
  onToggle: () => void;
};

export function ArchiveFolder({ folder, layout, isOpen, onToggle }: ArchiveFolderProps) {
  const style: FolderStyle = {
    "--folder-x": `${layout.x}px`,
    "--folder-y": `${layout.y}px`,
    "--folder-width": `${layout.width}px`,
    "--folder-rotation": `${layout.rotation ?? 0}deg`,
    "--folder-z": `${layout.zIndex ?? 1}`,
  };

  return (
    <article className={`${styles.folderPosition} ${isOpen ? styles.open : ""}`} style={style}>
      <span className={styles.numberTag}>{folder.number}</span>
      <button
        className={styles.folderButton}
        type="button"
        tabIndex={0}
        aria-label={`${isOpen ? "关闭" : "打开"}${folder.coverTitle}`}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className={styles.backFlap} />
        <ArchiveFolderContent folder={folder} />
        <span className={styles.folderBody}><ArchiveFolderCover folder={folder} /></span>
        <span className={styles.frontFlap} />
        <span className={styles.stringButtonTop} />
        <span className={styles.stringButtonBottom} />
        <span className={styles.string} />
      </button>
    </article>
  );
}
