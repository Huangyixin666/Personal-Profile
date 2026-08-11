import styles from "../styles/lighting.module.css";
type ArchiveSwitchProps = { isOn: boolean; onToggle: () => void };
export function ArchiveSwitch({ isOn, onToggle }: ArchiveSwitchProps) {
  return <button className={`${styles.archiveSwitch} ${isOn ? styles.switchOn : ""}`} type="button" aria-label={isOn ? "关闭档案室灯光" : "打开档案室灯光"} aria-pressed={isOn} onClick={onToggle}><span className={styles.switchScrewTop} /><span className={styles.switchWell} /><span className={styles.switchLever} /><span className={styles.switchScrewBottom} /><strong>{isOn ? "ON" : "OFF"}</strong><small>/ 档案</small></button>;
}
