import type { CSSProperties } from "react";
import type { PersonalOriginGalleryItem } from "../data/personalOriginGallery";
import styles from "../styles/personalOrigin.module.css";

type CardStyle=CSSProperties & Record<`--${string}`,string>;

export function GalleryPhotoCard({item,active,onActivate}:{item:PersonalOriginGalleryItem;active:boolean;onActivate:()=>void}){
  const g=item.gallery;
  const style:CardStyle={"--gallery-x":`${g.x}px`,"--gallery-y":`${g.y}px`,"--gallery-width":`${g.width}px`,"--gallery-rotation":`${g.rotation}deg`,"--gallery-z":`${g.zIndex}`};
  return <button type="button" className={`${styles.galleryCard} galleryClusterPhoto ${active?`${styles.galleryCardActive} galleryClusterPhotoActive`:""}`} style={style} onPointerEnter={onActivate} onFocus={onActivate} onClick={onActivate} aria-pressed={active} aria-label={item.title}><img src={item.src} alt={item.alt}/><span>{item.title}</span></button>;
}
