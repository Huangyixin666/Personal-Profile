"use client";

import type { CSSProperties } from "react";
import { archiveLayout } from "../../config/archiveLayout";
import { archiveTheme } from "../../config/archiveTheme";
import { ArchiveDesk } from "../../features/archive-desk";
import { ArchiveFolders } from "../../features/archive-folders";
import { ArchiveFooterNav, ArchiveHeader } from "../../features/archive-navigation";
import { ClueWall } from "../../features/clue-wall";
import { ArchiveSwitch, FlashlightMask, HangingBulb, useLightingMode } from "../../features/lighting";
import { useResponsiveScale } from "../../shared/hooks/useResponsiveScale";
import styles from "./ArchiveHomePage.module.css";

type SceneVariables = CSSProperties & Record<`--${string}`, string>;

export function ArchiveHomePage() {
  const { isOn, toggle } = useLightingMode();
  const { viewportRef, scale } = useResponsiveScale(archiveLayout.designWidth, archiveLayout.designHeight);
  const sceneStyle: SceneVariables = {
    width: archiveLayout.designWidth, height: archiveLayout.designHeight, transform: `scale(${scale})`,
    "--wall": archiveTheme.colors.wall, "--wall-grid": archiveTheme.colors.wallGrid,
    "--paper": archiveTheme.colors.paper, "--kraft": archiveTheme.colors.kraft,
    "--red": archiveTheme.colors.red, "--light": archiveTheme.colors.light,
    "--title-x": `${archiveLayout.title.x}px`, "--title-y": `${archiveLayout.title.y}px`, "--title-w": `${archiveLayout.title.width}px`,
    "--bulb-x": `${archiveLayout.bulb.x - archiveLayout.bulb.width / 2}px`, "--bulb-y": `${archiveLayout.bulb.y}px`,
    "--switch-x": `${archiveLayout.lightSwitch.x}px`, "--switch-y": `${archiveLayout.lightSwitch.y}px`,
    "--clue-x": `${archiveLayout.clueWall.x}px`, "--clue-y": `${archiveLayout.clueWall.y}px`,
    "--clue-w": `${archiveLayout.clueWall.width}px`, "--clue-h": `${archiveLayout.clueWall.height}px`,
    "--desk-y": `${archiveLayout.desk.y}px`, "--desk-h": `${archiveLayout.desk.height}px`,
  };

  return (
    <main ref={viewportRef} className={`${styles.viewport} ${isOn ? styles.lit : styles.dark}`}>
      <div className={styles.scene} style={sceneStyle}>
        <ArchiveHeader />
        <section className={styles.title}><small>PERSONAL ARCHIVE</small><h1>黄一昕档案袋</h1><span /></section>
        <div className={styles.bulb}><HangingBulb isOn={isOn} /></div>
        <div className={styles.switch}><ArchiveSwitch isOn={isOn} onToggle={toggle} /></div>
        <ArchiveFolders />
        <div className={styles.clueWall}><ClueWall /></div>
        <div className={styles.desk}><ArchiveDesk /></div>
        <ArchiveFooterNav />
        <div className={styles.ambientLight} aria-hidden="true" />
      </div>
      <FlashlightMask hidden={isOn} />
      <p className={styles.rotateNotice}>请横屏查看完整档案室</p>
    </main>
  );
}
