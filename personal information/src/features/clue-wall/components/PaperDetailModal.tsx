import type { ClueItem } from "../../../shared/types/archive";
import { Modal } from "../../../shared/components/Modal";
import { Postcard } from "./Postcard";
import styles from "../styles/clueWall.module.css";

export function PaperDetailModal({ item, onClose }: { item: ClueItem | null; onClose: () => void }) {
  return (
    <Modal open={Boolean(item)} title={item?.title ?? "档案详情"} onClose={onClose}>
      {item ? (
        <article className={`${styles.detailPaper} ${item.type === "newspaper" ? styles.detailNewspaper : ""}`}>
          {item.type === "postcard" ? <Postcard item={item} detail /> : (
            <>
              <header><small>{item.label}</small><h2>{item.title}</h2><p>{item.summary}</p></header>
              <div className={styles.detailPhoto}><span /></div>
              <div className={styles.detailColumns}>
                {item.detailSections.map((section) => (
                  <section key={section.heading}><h3>{section.heading}</h3><p>{section.body}</p></section>
                ))}
              </div>
            </>
          )}
        </article>
      ) : null}
    </Modal>
  );
}
