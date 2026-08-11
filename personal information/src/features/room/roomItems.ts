export type RoomSection = 'AI PRODUCT' | 'DESIGN' | 'RESEARCH' | 'PHOTOGRAPHY' | 'DRAWING'
export const ROOM_SIZE = { width: 10.8, depth: 7.2, height: 6.6 }
export const CAMERA = { position: [-9.1, 8.75, -10.9] as [number, number, number], target: [0, 5.75, 0] as [number, number, number], fov: 34 }
export const ITEM_POSITIONS = { desk:[.55,1.45,-2.35], chair:[.65,1.05,.05], laptop:[.45,1.68,-2.3], lamp:[3.15,1.67,-2.45], books:[-2.05,1.67,-2.25], camera:[-3.65,1.67,-2.3], recordPlayer:[4.15,1.8,-2.75], designPoster:[-2.7,4.7,-3.56], researchPoster:[.15,4.75,-3.56], racket:[3.1,4.7,-3.5], sketchbook:[-1.15,1.67,-2.18] } as const
