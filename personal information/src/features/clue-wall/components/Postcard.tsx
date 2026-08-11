"use client";

import { useState } from "react";
import type { ClueItem } from "../../../shared/types/archive";
import styles from "../styles/clueWall.module.css";

export function Postcard({ item, detail = false }: { item: ClueItem; detail?: boolean }) {
  const [flipped, setFlipped] = useState(false);
  if (!detail) return <span className={styles.postcardFace}><small>{item.label}</small><strong>{item.title}</strong><em>{item.meta}</em></span>;
  return (
    <button className={`${styles.postcardDetail} ${flipped ? styles.postcardFlipped : ""}`} type="button" onClick={() => setFlipped((value) => !value)} aria-label="翻转明信片" aria-pressed={flipped}>
      <span className={styles.postcardInner}>
        <span className={styles.postcardFront}><small>{item.label}</small><strong>{item.title}</strong><i /></span>
        <span className={styles.postcardBack}><time>{item.meta}</time><p>{item.detailSections[0]?.body}</p><small>点击翻回正面</small></span>
      </span>
    </button>
  );
}
