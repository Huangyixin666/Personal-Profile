import { DeskBooks } from "./DeskBooks";
import { DeskMap } from "./DeskMap";
import { DeskNotebook } from "./DeskNotebook";
import { MagnifyingGlass } from "./MagnifyingGlass";
import styles from "../styles/archiveDesk.module.css";
export function ArchiveDesk() { return <section className={styles.desk} aria-label="档案桌面"><DeskBooks /><DeskMap /><MagnifyingGlass /><DeskNotebook /><p>移动鼠标，开始调查</p></section>; }
