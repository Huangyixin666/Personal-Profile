"use client";

import { useEffect } from "react";

export default function ResearchRoomRedirect() {
  useEffect(() => {
    window.location.replace("/Personal-Profile/room/");
  }, []);

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#050505", color: "#ddd" }}>
      <p>正在进入科研房间……</p>
    </main>
  );
}
