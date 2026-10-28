"use client";

import { useEffect } from "react";

export default function MotionReady() {
  useEffect(() => {
    document.documentElement.dataset.motionReady = "true";
  }, []);

  return null;
}
