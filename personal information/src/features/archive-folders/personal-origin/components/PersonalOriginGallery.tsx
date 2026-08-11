"use client";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import galleryBackground from "../../../../assets/archive/personal-origin/background/ref-origin-04-gallery-background.png";
import { personalOriginGallery } from "../data/personalOriginGallery";
import { GalleryPhotoCard } from "./GalleryPhotoCard";
import styles from "../styles/personalOrigin.module.css";
import "../styles/personalOriginGalleryLayout.css";

export function PersonalOriginGallery({open,onClose}:{open:boolean;onClose:()=>void}){
  const galleryItems=useMemo(()=>personalOriginGallery.filter(item=>item.showInGallery),[]);
  const defaultId=galleryItems.find(item=>item.defaultActive)?.id??galleryItems[0].id;
  const [activeId,setActiveId]=useState(defaultId);
  const [mounted,setMounted]=useState(false);
  useEffect(()=>setMounted(true),[]);
  useEffect(()=>{if(!open)return;const old=document.body.style.overflow;document.body.style.overflow="hidden";setActiveId(defaultId);const onKey=(event:KeyboardEvent)=>{if(event.key==="Escape")onClose();if(event.key==="ArrowRight"||event.key==="ArrowLeft"){event.preventDefault();setActiveId(current=>{const index=galleryItems.findIndex(item=>item.id===current);const step=event.key==="ArrowRight"?1:-1;return galleryItems[(index+step+galleryItems.length)%galleryItems.length].id;});}};window.addEventListener("keydown",onKey);return()=>{document.body.style.overflow=old;window.removeEventListener("keydown",onKey)}},[open,onClose,defaultId,galleryItems]);
  if(!mounted||!open)return null;
  return createPortal(<div className={styles.galleryOverlay} role="dialog" aria-modal="true" aria-label="个人起源完整图库" onPointerDown={event=>{if(event.target===event.currentTarget)onClose()}}>
    <img className={styles.galleryBackground} src={galleryBackground} alt="" aria-hidden="true"/>
    <div className={styles.galleryHeader}><small>PERSONAL ORIGIN / ARCHIVE 01</small><strong>个人起源图册</strong><span>悬停照片以查看 · ← → 切换</span></div>
    <div className={`${styles.galleryStage} galleryCluster`}>
      {galleryItems.map(item=><GalleryPhotoCard key={item.id} item={item} active={activeId===item.id} onActivate={()=>setActiveId(item.id)}/>) }
    </div>
    <button type="button" className={styles.galleryClose} onClick={onClose} aria-label="关闭个人起源图库">×<span>关闭档案</span></button>
  </div>,document.body);
}
