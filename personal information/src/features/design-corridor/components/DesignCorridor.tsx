"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import corridorBright from "../../../assets/archive/design/corridor - bright.png";
import longFront from "../../../assets/archive/design/Introduction Card/long 1.png";
import longBack from "../../../assets/archive/design/Introduction Card/long2.png";
import oldFriendsFront from "../../../assets/archive/design/Introduction Card/old friends 1.png";
import oldFriendsBack from "../../../assets/archive/design/Introduction Card/old friends 2.png";
import fanFront from "../../../assets/archive/design/Introduction Card/fan 1.png";
import fanBack from "../../../assets/archive/design/Introduction Card/fan 2.png";
import rongFront from "../../../assets/archive/design/Introduction Card/rong 1.png";
import rongBack from "../../../assets/archive/design/Introduction Card/rong 2.png";
import lvwangFront from "../../../assets/archive/design/Introduction Card/lvwang 1.png";
import lvwangBack from "../../../assets/archive/design/Introduction Card/lvwang 2.png";
import jiandingFront from "../../../assets/archive/design/Introduction Card/jianding 1.png";
import jiandingBack from "../../../assets/archive/design/Introduction Card/jianding 2.png";
import longDetail from "../../../assets/archive/design/link/long.png";
import xiangcunDetail from "../../../assets/archive/design/link/xiangcun.png";
import zhonlianDetail from "../../../assets/archive/design/link/zhonlian.png";
import styles from "../styles/designCorridor.module.css";

type CorridorCard = { id:string; label:string; front:string; back:string; x:number };
type Artwork = { id:string; label:string; x:number; width:number; image?:string; url?:string };

const cards:CorridorCard[] = [
  {id:"long",label:"龙泉作品介绍",front:longFront,back:longBack,x:84.16},
  {id:"old-friends",label:"老友记作品介绍",front:oldFriendsFront,back:oldFriendsBack,x:80.14},
  {id:"fan",label:"乡村作品介绍",front:fanFront,back:fanBack,x:51.30},
  {id:"rong",label:"创客中心作品介绍",front:rongFront,back:rongBack,x:48.42},
  {id:"lvwang",label:"绿网情深作品介绍",front:lvwangFront,back:lvwangBack,x:20.18},
  {id:"jianding",label:"鉴微知筑作品介绍",front:jiandingFront,back:jiandingBack,x:17.18},
];

// The artwork order is deliberately right-to-left, matching the framed corridor image.
const artworks:Artwork[] = [
  {id:"first-stop",label:"查看第一站作品",x:86.75,width:7.35,image:longDetail},
  {id:"old-friends-work",label:"打开老友记作品链接",x:71.35,width:7.55,url:"https://mp.weixin.qq.com/s/2vksaZhEVEYhyXH2zPP8_g"},
  {id:"village-work",label:"查看乡村作品",x:54.65,width:7.70,image:xiangcunDetail},
  {id:"maker-work",label:"查看创客中心作品",x:38.75,width:7.80,image:zhonlianDetail},
  {id:"green-network-work",label:"打开绿网情深作品链接",x:23.75,width:7.70,url:"http://www.wupen.org/competitions/127?type=work&entry=20455"},
  {id:"micro-building-work",label:"打开鉴微知筑作品链接",x:9.60,width:8.05,url:"https://m.mp.oeeee.com/a/BAAFRD0000202607221630284.html?layer=3&share=timeline&isndappinstalled=0"},
];

export function DesignCorridor({open,onClose}:{open:boolean;onClose:()=>void}){
  const scrollerRef=useRef<HTMLDivElement>(null);
  const [mounted,setMounted]=useState(false);
  const [detail,setDetail]=useState<{src:string;alt:string;kind:"card"|"work"}|null>(null);

  useEffect(()=>setMounted(true),[]);

  useEffect(()=>{
    if(!open)return;
    const previous=document.body.style.overflow;
    document.body.style.overflow="hidden";
    setDetail(null);
    requestAnimationFrame(()=>{const node=scrollerRef.current;if(node)node.scrollLeft=node.scrollWidth-node.clientWidth;});
    const onKey=(event:KeyboardEvent)=>{
      if(event.key!=="Escape")return;
      setDetail(current=>{if(current)return null;onClose();return null;});
    };
    window.addEventListener("keydown",onKey);
    return()=>{document.body.style.overflow=previous;window.removeEventListener("keydown",onKey)};
  },[open,onClose]);

  if(!open||!mounted)return null;
  return createPortal(<section className={styles.corridor} role="dialog" aria-modal="true" aria-label="设计作品走廊">
    <div ref={scrollerRef} className={styles.scroller} onWheel={event=>{
      if(Math.abs(event.deltaY)<=Math.abs(event.deltaX))return;
      event.currentTarget.scrollLeft+=event.deltaY;
    }}>
      <div className={styles.canvas}>
        <img className={styles.background} src={corridorBright} alt="陈列六幅设计作品的画廊走廊"/>
        {cards.map(card=><button key={card.id} type="button" className={styles.introCard} style={{left:`${card.x}%`}} onClick={()=>setDetail({src:card.back,alt:card.label,kind:"card"})} aria-label={`打开${card.label}`}>
          <img src={card.front} alt=""/><span className={styles.srOnly}>{card.label}</span>
        </button>)}
        {artworks.map(work=><button key={work.id} type="button" className={styles.artworkHotspot} style={{left:`${work.x}%`,width:`${work.width}%`}} aria-label={work.label} onClick={()=>{
          if(work.url){window.open(work.url,"_blank","noopener,noreferrer");return;}
          if(work.image)setDetail({src:work.image,alt:work.label,kind:"work"});
        }}/>) }
      </div>
    </div>
    <p className={styles.hint}>横向拖动或滚轮浏览走廊 · 点击介绍卡或画框</p>
    <button type="button" className={styles.closeCorridor} onClick={onClose} aria-label="退出设计走廊">×</button>
    {detail?<div className={styles.detailOverlay} onPointerDown={event=>{if(event.target===event.currentTarget)setDetail(null)}}>
      <img className={detail.kind==="card"?styles.cardDetail:styles.workDetail} src={detail.src} alt={detail.alt}/>
      <button type="button" className={styles.closeDetail} onClick={()=>setDetail(null)} aria-label="关闭作品详情">×</button>
    </div>:null}
  </section>,document.body);
}
