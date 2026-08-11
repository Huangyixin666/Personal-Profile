import type { CSSProperties } from "react";
import { personalOriginGallery } from "../data/personalOriginGallery";
import styles from "../styles/personalOrigin.module.css";

type PreviewStyle=CSSProperties & Record<`--${string}`,string>;

export function FolderHoverPreview({visible,closing,onOpen}:{visible:boolean;closing:boolean;onOpen:()=>void}){
  const items=personalOriginGallery.filter(item=>item.showInPreview&&item.preview);
  return <div className={`${styles.previewStack} originFolderPreview`} aria-hidden={!visible}>
    {items.map((item,index)=>{const p=item.preview!;const style:PreviewStyle={"--preview-x":`${p.x}px`,"--preview-y":`${p.y}px`,"--preview-width":`${p.width}px`,"--preview-rotation":`${p.rotation}deg`,"--preview-z":`${p.zIndex}`,"--preview-delay":`${p.delay}ms`,"--preview-close-delay":`${(items.length-1-index)*60}ms`};return <button key={item.id} type="button" tabIndex={-1} className={`${styles.previewPhoto} originPreviewPhoto originPreview-${item.id} ${visible?styles.previewVisible:""} ${closing?styles.previewClosing:""}`} style={style} onClick={onOpen} aria-label={`打开个人起源图册：${item.title}`}><img src={item.previewSrc??item.src} alt={item.alt}/></button>})}
  </div>;
}
