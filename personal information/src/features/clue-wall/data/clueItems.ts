import type { ClueItem } from "../../../shared/types/archive";
export const clueItems: ClueItem[] = [
  { id:"design",type:"newspaper",title:"设计成果",label:"DESIGN",summary:"竞赛、品牌与空间表达",position:{x:270,y:42},size:{width:245,height:295},rotation:-2,zIndex:8,detailSections:[{heading:"设计方法",body:"从空间与视觉设计出发，把复杂问题转化为清晰、可感知的体验。"},{heading:"关注领域",body:"品牌表达、信息设计、空间叙事与数字产品界面。"}] },
  { id:"research",type:"newspaper",title:"论文研究",label:"RESEARCH",summary:"SCI、城市研究与数据分析",position:{x:555,y:205},size:{width:315,height:330},rotation:3,zIndex:7,detailSections:[{heading:"研究议题",body:"围绕城市空间、行为数据和数字方法展开跨学科研究。"},{heading:"工作方式",body:"以真实问题为起点，将定性观察与量化分析结合。"}] },
  { id:"internship",type:"newspaper",title:"实习经历",label:"INTERNSHIP",summary:"AI 产品、规划实践与项目协作",position:{x:235,y:430},size:{width:305,height:270},rotation:-2,zIndex:9,detailSections:[{heading:"角色",body:"参与用户研究、产品定义、交互原型和跨团队项目推进。"},{heading:"转变",body:"将设计方法带入 AI 产品实践，关注工具如何服务真实的人。"}] },
  { id:"postcard",type:"postcard",title:"杭州来信",label:"HANGZHOU",summary:"一次关于城市与工作的短暂停留",position:{x:680,y:70},size:{width:155,height:88},rotation:4,zIndex:13,meta:"2023.05 · 杭州",detailSections:[{heading:"背面留言",body:"继续观察，继续记录。新的线索往往出现在转弯之后。"}] },
  { id:"coast-photo",type:"photo",title:"沿海观察",label:"PHOTO",summary:"城市边缘与潮汐留下的形状",position:{x:105,y:155},size:{width:145,height:108},rotation:4,zIndex:12,detailSections:[{heading:"拍摄记录",body:"浙江沿海，关于故乡、尺度与时间的视觉笔记。"}] },
  { id:"question",type:"sticky",title:"AI?",label:"QUESTION",summary:"下一条线索",position:{x:820,y:455},size:{width:100,height:102},rotation:4,zIndex:15,detailSections:[{heading:"现在的问题",body:"设计如何帮助人们理解、使用并信任 AI？"}] },
  { id:"checklist",type:"checklist",title:"调查清单",label:"CHECK",summary:"整合资料 · 验证信息 · 寻找关联",position:{x:600,y:565},size:{width:205,height:126},rotation:3,zIndex:12,detailSections:[{heading:"当前进度",body:"整理经历，寻找设计与 AI 之间持续存在的共同问题。"}] },
  { id:"ticket",type:"ticket",title:"杭州车票",label:"TICKET",summary:"一次转场记录",position:{x:755,y:94},size:{width:128,height:68},rotation:4,zIndex:14,detailSections:[{heading:"行程",body:"从熟悉的设计现场，前往新的产品与技术语境。"}] },
  { id:"map",type:"map",title:"城市地图",label:"MAP",summary:"被折叠的行动路径",position:{x:790,y:590},size:{width:150,height:140},rotation:4,zIndex:10,detailSections:[{heading:"路径",body:"台州、成都、广州、杭州。地点也是个人方法形成的线索。"}] },
];
