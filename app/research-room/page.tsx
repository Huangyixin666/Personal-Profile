"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./research-room.module.css";

const papers = [
  { label: "Blue-green\nspace paper", href: "https://doi.org/10.1016/j.cities.2026.106824" },
  { label: "New Energy\nPapers", href: "https://doi.org/10.1016/j.eiar.2025.108137" },
  { label: "Farmers’ disaster-\nrelated papers", href: "https://doi.org/10.1016/j.ijdrr.2025.105256" },
];

function Desktop({ interactive = false }: { interactive?: boolean }) {
  return (
    <div className={styles.desktop} aria-label="Windows 经典桌面">
      <img src="/research-room/computer.png" alt="Windows 经典桌面" />
      {interactive && (
        <div className={styles.folderLinks}>
          {papers.map((paper, index) => (
            <a
              key={paper.href}
              className={styles.folderLink}
              style={{ left: `${18.7 + index * 23.3}%` }}
              href={paper.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`打开论文：${paper.label.replace("\n", " ")}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CrtComputer({ onOpen, enlarged = false }: { onOpen?: () => void; enlarged?: boolean }) {
  const body = (
    <div className={`${styles.crt} ${enlarged ? styles.crtLarge : ""}`}>
      <div className={styles.crtTop} />
      <div className={styles.crtBezel}>
        <Desktop interactive={enlarged} />
      </div>
      <div className={styles.crtControls}><i /><i /><span /></div>
      <div className={styles.crtNeck} />
      <div className={styles.crtBase} />
    </div>
  );

  return onOpen ? (
    <button className={styles.computerButton} onClick={onOpen} aria-label="放大电脑屏幕">
      {body}
    </button>
  ) : body;
}

export default function ResearchRoomPage() {
  const [open, setOpen] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const tilt = (event: React.PointerEvent<HTMLElement>) => {
    if (!sceneRef.current || open) return;
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    sceneRef.current.style.setProperty("--ry", `${x * 6}deg`);
    sceneRef.current.style.setProperty("--rx", `${-y * 4}deg`);
  };

  const resetTilt = () => {
    sceneRef.current?.style.setProperty("--ry", "0deg");
    sceneRef.current?.style.setProperty("--rx", "0deg");
  };

  return (
    <main className={styles.room} onPointerMove={tilt} onPointerLeave={resetTilt}>
      <a className={styles.back} href="/">← 返回档案馆</a>
      <div className={styles.haze} />
      <section ref={sceneRef} className={styles.scene} aria-label="上世纪书房工作台">
        <div className={styles.lampGlow} />
        <div className={styles.floorShadow} />
        <div className={styles.chair}><div className={styles.chairBack} /><div className={styles.chairSeat} /><i /><i /></div>
        <div className={styles.desk}>
          <div className={styles.deskTop} />
          <div className={`${styles.drawer} ${styles.left}`}><b /><b /><b /></div>
          <div className={`${styles.drawer} ${styles.right}`}><b /><b /><b /></div>
          <div className={styles.kneePanel} />
        </div>
        <div className={styles.lamp}>
          <div className={styles.shade} /><div className={styles.bulb} /><div className={styles.arm} /><div className={styles.lampBase} />
        </div>
        <div className={styles.stationery}>
          <div className={styles.paperStack}><i /><i /><i /></div>
          <div className={styles.pencilCup}><i /><i /><i /></div>
          <div className={styles.notebook} /><div className={styles.pen} />
        </div>
        <div className={styles.computerWrap}><CrtComputer onOpen={() => setOpen(true)} /></div>
        <div className={styles.fan}>
          <div className={styles.fanCage}><div className={styles.blades}><i /><i /><i /><i /></div><b /></div>
          <div className={styles.fanStem} /><div className={styles.fanBase} />
        </div>
        <p className={styles.hint}>点击电脑 · 查看研究档案</p>
      </section>

      {open && (
        <div className={styles.modal} role="dialog" aria-modal="true" aria-label="研究论文电脑桌面" onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}>
          <button className={styles.close} onClick={() => setOpen(false)} aria-label="关闭">×</button>
          <div className={styles.modalComputer}><CrtComputer enlarged /></div>
          <p className={styles.modalHint}>点击桌面中的三个文件夹打开论文</p>
        </div>
      )}
    </main>
  );
}
