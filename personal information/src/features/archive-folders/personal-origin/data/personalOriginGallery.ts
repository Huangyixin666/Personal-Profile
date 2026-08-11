import photo01 from "../../../../assets/archive/personal-origin/gallery/origin-gallery-photo-01.jpg";
import photo02 from "../../../../assets/archive/personal-origin/gallery/origin-gallery-photo-02.jpg";
import photo03 from "../../../../assets/archive/personal-origin/gallery/origin-gallery-photo-03.jpg";
import photo04 from "../../../../assets/archive/personal-origin/gallery/origin-gallery-photo-04.jpg";
import photo05 from "../../../../assets/archive/personal-origin/gallery/origin-gallery-photo-05.jpg";
import photo06 from "../../../../assets/archive/personal-origin/gallery/origin-gallery-photo-06.jpg";
import photo07 from "../../../../assets/archive/personal-origin/gallery/origin-gallery-photo-07.jpg";
import postcard from "../../../../assets/archive/personal-origin/gallery/origin-gallery-postcard.png";
import sliding01 from "../../../../assets/archive/personal-origin/Sliding Images/01.png";
import sliding02 from "../../../../assets/archive/personal-origin/Sliding Images/02.png";
import sliding03 from "../../../../assets/archive/personal-origin/Sliding Images/03.png";

export type PersonalOriginGalleryItem = {
  id: string; src: string; previewSrc?: string; alt: string; title: string;
  showInPreview: boolean; showInGallery: boolean;
  preview?: { x:number; y:number; width:number; rotation:number; zIndex:number; delay:number };
  gallery: { x:number; y:number; width:number; rotation:number; zIndex:number };
  defaultActive?: boolean;
};

export const personalOriginGallery: PersonalOriginGalleryItem[] = [
  {id:"coast",src:photo01,previewSrc:sliding01,alt:"个人起源海边生活照片",title:"沿海起点",showInPreview:true,showInGallery:true,preview:{x:20,y:-88,width:72,rotation:0,zIndex:2,delay:280},gallery:{x:-520,y:-185,width:370,rotation:-9,zIndex:1}},
  {id:"city",src:photo02,previewSrc:sliding02,alt:"个人起源城市生活照片",title:"城市观察",showInPreview:true,showInGallery:true,preview:{x:55,y:-70,width:72,rotation:0,zIndex:3,delay:280},gallery:{x:-330,y:-235,width:380,rotation:5,zIndex:2}},
  {id:"campus",src:photo03,alt:"个人起源照片三",title:"学习现场",showInPreview:false,showInGallery:true,gallery:{x:-110,y:-250,width:390,rotation:-4,zIndex:3}},
  {id:"notes",src:photo04,alt:"个人起源照片四",title:"生活记录",showInPreview:false,showInGallery:true,gallery:{x:120,y:-220,width:380,rotation:5,zIndex:2}},
  {id:"journey",src:photo05,alt:"个人起源照片五",title:"行走与发现",showInPreview:false,showInGallery:true,gallery:{x:300,y:-155,width:370,rotation:9,zIndex:1}},
  {id:"memory",src:photo06,alt:"个人起源照片六",title:"成长片段",showInPreview:false,showInGallery:false,gallery:{x:0,y:0,width:410,rotation:0,zIndex:1}},
  {id:"night",src:photo07,alt:"个人起源照片七",title:"夜色档案",showInPreview:false,showInGallery:false,gallery:{x:0,y:0,width:410,rotation:0,zIndex:1}},
  {id:"postcard",src:postcard,previewSrc:sliding03,alt:"黄一昕个人像素明信片",title:"个人明信片",showInPreview:true,showInGallery:true,preview:{x:-20,y:-72,width:72,rotation:0,zIndex:4,delay:280},gallery:{x:-150,y:-55,width:540,rotation:0,zIndex:10},defaultActive:true},
];
