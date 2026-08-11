import type { ArchiveFolderData } from "../../../shared/types/archive";
import { ArchiveDocument } from "./ArchiveDocument";
import { StudentCard } from "./StudentCard";
import styles from "../styles/archiveFolders.module.css";

export function ArchiveFolderContent({ folder }: { folder: ArchiveFolderData }) {
  return (
    <div className={styles.folderContent}>
      <header><span>档案编号 {folder.number}</span><strong>{folder.institution}</strong></header>
      <dl>{folder.documents.map((document) => <ArchiveDocument key={document.title} document={document} />)}</dl>
      {folder.studentCard?.enabled ? <StudentCard card={folder.studentCard} /> : null}
    </div>
  );
}
