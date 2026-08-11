import styles from "../styles/lighting.module.css";

export function HangingBulb({ isOn }: { isOn: boolean }) {
  return (
    <div className={`${styles.bulbAssembly} ${isOn ? styles.bulbOn : ""}`} aria-hidden="true">
      <span className={styles.litBulbImage} />
      <span className={styles.unlitBulbImage} />
      <span className={styles.bulbGlow} />
    </div>
  );
}
