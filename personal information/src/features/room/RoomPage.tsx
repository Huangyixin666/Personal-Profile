"use client";

import { Canvas } from '@react-three/fiber'
import { useProgress } from '@react-three/drei'
import { Suspense, useState } from 'react'
import { CameraController } from './CameraController'
import { RoomScene } from './RoomScene'
import { CAMERA } from './roomItems'
import './room.css'

const papers = [
  { label: 'Blue-green space paper', href: 'https://doi.org/10.1016/j.cities.2026.106824', className: 'paper-link paper-link--left' },
  { label: 'New Energy Papers', href: 'https://doi.org/10.1016/j.eiar.2025.108137', className: 'paper-link paper-link--middle' },
  { label: "Farmers’ disaster-related papers", href: 'https://doi.org/10.1016/j.ijdrr.2025.105256', className: 'paper-link paper-link--right' },
]

function RoomLoading() {
  const { progress, active, loaded, total } = useProgress()
  if (!active && progress >= 100) return null
  return <div className="room-loading" aria-live="polite">
    <div className="room-loading__content">
      <small>LOADING RESEARCH ROOM</small>
      <strong>{Math.round(progress)}%</strong>
      <div className="room-loading__track"><span style={{ width: `${progress}%` }} /></div>
      <p>{total ? `${loaded} / ${total} assets` : 'Preparing scene…'}</p>
    </div>
  </div>
}

export function RoomPage() {
  const [computerOpen, setComputerOpen] = useState(false)
  const [lightsOn, setLightsOn] = useState(false)
  return <main className="room-page room-page--model">
    <Canvas className="room-canvas" shadows dpr={[0.85, 1.25]} camera={{ position: CAMERA.position, fov: CAMERA.fov, near: .1, far: 100 }} gl={{ antialias: true, powerPreference: 'high-performance' }}>
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 28, 44]} />
      <Suspense fallback={null}><RoomScene lightsOn={lightsOn} onComputerClick={() => setComputerOpen(true)} /><CameraController /></Suspense>
    </Canvas>
    <RoomLoading />
    <a className="room-back" href="/Personal-Profile/" aria-label="返回档案馆" onClick={(event) => { if (document.referrer.includes('/Personal-Profile/')) { event.preventDefault(); history.back() } }}>← 返回档案馆</a>
    <div className={`room-guidance ${lightsOn ? 'room-guidance--lit' : ''}`}>{lightsOn ? '点击电脑屏幕，打开我的论文档案。' : '房间还没亮，试着找到灯的开关。'}</div>
    {!lightsOn && <button className="room-switch" type="button" aria-label="打开房间灯光" onClick={() => setLightsOn(true)}><span className="room-switch__plate"><i /></span><small>SWITCH</small></button>}
    {computerOpen && <div className="computer-modal" role="dialog" aria-modal="true" aria-label="Research computer" onClick={() => setComputerOpen(false)}>
      <div className="computer-window" onClick={(event) => event.stopPropagation()}>
        <img src="/Personal-Profile/assets/room-optimized/old-computer.webp" alt="Old computer showing three research folders" />
        {papers.map((paper) => <a key={paper.href} className={paper.className} href={paper.href} target="_blank" rel="noreferrer" aria-label={`Open ${paper.label}`}><span>{paper.label}</span></a>)}
        <button className="computer-close" type="button" aria-label="Close computer" onClick={() => setComputerOpen(false)}>×</button>
      </div>
    </div>}
  </main>
}
