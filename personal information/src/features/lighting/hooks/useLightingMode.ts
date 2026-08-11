"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "personal-archive-lighting";

export function useLightingMode() {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    setIsOn(window.localStorage.getItem(STORAGE_KEY) === "on");
  }, []);

  const toggle = useCallback(() => {
    setIsOn((current) => {
      const next = !current;
      window.localStorage.setItem(STORAGE_KEY, next ? "on" : "off");
      return next;
    });
  }, []);

  return { isOn, toggle };
}
