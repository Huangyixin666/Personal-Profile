import type { ArchiveDocumentData } from "../../../shared/types/archive";
import styles from "../styles/archiveFolders.module.css";

export function ArchiveDocument({ document }: { document: ArchiveDocumentData }) {
  return (
    <div className={styles.documentRow}>
      <dt>{document.title}</dt>
      <dd>{document.value}</dd>
    </div>
  );
}
