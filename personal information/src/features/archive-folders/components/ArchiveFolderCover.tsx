import type { ArchiveFolderData } from "../../../shared/types/archive";
import styles from "../styles/archiveFolders.module.css";
export function ArchiveFolderCover({ folder }: { folder: ArchiveFolderData }) {
  return <div className={styles.cover}><span className={styles.coverLabel}>{folder.label}</span><h3>{folder.coverTitle}</h3><strong>{folder.institution}</strong><span className={styles.rule} /><p>{folder.summary}</p><small>OPEN FILE ›</small></div>;
}
