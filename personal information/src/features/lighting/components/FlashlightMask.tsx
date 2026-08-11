"use client";

import { useEffect, useRef } from "react";
import styles from "../styles/lighting.module.css";

export function FlashlightMask({ hidden }: { hidden: boolean }) {
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mask = maskRef.current;
    if (!mask) return;
    const move = (event: PointerEvent) => {
      mask.style.setProperty("--flashlight-x", `${event.clientX}px`);
      mask.style.setProperty("--flashlight-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return <div ref={maskRef} className={`${styles.flashlightMask} ${hidden ? styles.maskHidden : ""}`} aria-hidden="true" />;
}
