"use client";

import { useEffect, useRef, useState } from "react";

export function useResponsiveScale(designWidth: number, designHeight: number) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const update = () => {
      const next = Math.max(viewport.clientWidth / designWidth, viewport.clientHeight / designHeight);
      setScale(Math.max(next, 0.1));
    };
    const observer = new ResizeObserver(update);
    observer.observe(viewport);
    update();
    return () => observer.disconnect();
  }, [designHeight, designWidth]);

  return { viewportRef, scale };
}
