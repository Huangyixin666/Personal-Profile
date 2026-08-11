"use client";

import { useState } from "react";
import type { StudentCardData } from "../../../shared/types/archive";
import styles from "../styles/archiveFolders.module.css";

export function StudentCard({ card }: { card: StudentCardData }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      className={`${styles.studentCard} ${flipped ? styles.cardFlipped : ""}`}
      type="button"
      aria-label={flipped ? "查看学生证正面" : "查看学生证背面"}
      aria-pressed={flipped}
      onClick={(event) => {
        event.stopPropagation();
        setFlipped((current) => !current);
      }}
    >
      <span className={styles.studentCardInner}>
        <span className={styles.studentCardFront}>
          <i>STUDENT ID</i><b>{card.institution}</b><em>{card.name}</em><small>{card.major}</small>
        </span>
        <span className={styles.studentCardBack}>
          <i>ARCHIVE RECORD</i><b>{card.number}</b><small>点击翻回正面</small>
        </span>
      </span>
    </button>
  );
}
