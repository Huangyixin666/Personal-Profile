"use client";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { SceneRect } from "../../../../shared/types/archive";
import closedFolder from "../../../../assets/archive/personal-origin/folder/ref-origin-01-closed.png";
import openFolder from "../../../../assets/archive/personal-origin/folder/ref-origin-02-open.png";
import foreground from "../../../../assets/archive/personal-origin/folder/personal-origin-foreground.png";
import { FolderHoverPreview } from "./FolderHoverPreview";
import { PersonalOriginGallery } from "./PersonalOriginGallery";
import styles from "../styles/personalOrigin.module.css";
import "../styles/originFolderRedesign.css";
import "../styles/originFolderMotionFix.css";

type PersonalOriginState="idle"|"opening"|"preview"|"closing"|"gallery";
type PositionStyle=CSSProperties & Record<`--${string}`,string>;

export function PersonalOriginFolder({layout}:{layout:SceneRect}){
  const [state,setState]=useState<PersonalOriginState>("idle");
  const enterTimer=useRef<ReturnType<typeof setTimeout>|null>(null);
  const leaveTimer=useRef<ReturnType<typeof setTimeout>|null>(null);
  const finishTimer=useRef<ReturnType<typeof setTimeout>|null>(null);
  const folderRef=useRef<HTMLButtonElement>(null);
  const clearTimers=useCallback(()=>{[enterTimer,leaveTimer,finishTimer].forEach(ref=>{if(ref.current)clearTimeout(ref.current)});},[]);
  useEffect(()=>clearTimers,[clearTimers]);
  const beginOpen=()=>{if(state==="gallery")return;if(leaveTimer.current)clearTimeout(leaveTimer.current);if(state!=="idle"&&state!=="closing")return;enterTimer.current=setTimeout(()=>{setState("opening");finishTimer.current=setTimeout(()=>setState("preview"),800)},110)};
  const beginClose=(event:ReactPointerEvent)=>{if(state==="gallery"||event.currentTarget.contains(event.relatedTarget as Node))return;if(enterTimer.current)clearTimeout(enterTimer.current);leaveTimer.current=setTimeout(()=>{setState("closing");finishTimer.current=setTimeout(()=>setState("idle"),720)},200)};
  const openGallery=()=>{clearTimers();setState("gallery")};
  const closeGallery=()=>{setState("idle");requestAnimationFrame(()=>folderRef.current?.focus())};
  const expanded=state!=="idle";
  const previewVisible=state==="opening"||state==="preview";
  const style:PositionStyle={"--folder-x":`${layout.x}px`,"--folder-y":`${layout.y}px`,"--folder-width":`${layout.width}px`,"--folder-rotation":`${layout.rotation??0}deg`,"--folder-z":`${layout.zIndex??1}`};
  return <>
    <article data-archive-id="personal-origin" className={`${styles.originPosition} originFolderRoot ${expanded?`${styles.originExpanded} originFolderExpanded`:""}`} style={style} onPointerEnter={beginOpen} onPointerLeave={beginClose}>
      <span className={styles.numberTag}>01</span>
      <div className={`${styles.interactionRegion} originFolderStage`}>
        <img className="originFolderOpenBack" src={openFolder} alt="" aria-hidden="true"/>
        <FolderHoverPreview visible={previewVisible} closing={state==="closing"} onOpen={openGallery}/>
        <img className="originFolderFrontMask" src={foreground} alt="" aria-hidden="true"/>
        <img className={`originFolderClosed ${expanded?"originFolderClosedHidden":""}`} src={closedFolder} alt="个人起源档案袋"/>
        <button ref={folderRef} type="button" className="originFolderClickTarget" aria-expanded={state==="gallery"} aria-haspopup="dialog" aria-label="打开个人起源图册" onClick={openGallery}/>
      </div>
    </article>
    <PersonalOriginGallery open={state==="gallery"} onClose={closeGallery}/>
  </>;
}
