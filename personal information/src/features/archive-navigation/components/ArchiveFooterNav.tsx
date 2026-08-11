import styles from "../styles/archiveNavigation.module.css";
const items = [["01","ABOUT"],["02","EDUCATION"],["03","RESEARCH"],["04","WORK"]];
export function ArchiveFooterNav() { return <nav className={styles.footer} aria-label="个人档案章节">{items.map(([number,label]) => <span key={number}><b>{number}</b><i />{label}</span>)}</nav>; }
