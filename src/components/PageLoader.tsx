"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export type PageLoaderProps = {
  durationMs?: number;
  transitionMs?: number;
  /** Omit for a timed intro; provide a real 0–100 value to track asset preparation. */
  progress?: number;
  maxWaitMs?: number;
  revealOffset?: number;
};

type ProgressController = { update: (value: number) => void };

export default function PageLoader({
  durationMs = 4000,
  transitionMs = 450,
  progress,
  maxWaitMs = 12000,
  revealOffset = 14,
}: PageLoaderProps) {
  const loader = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const controller = useRef<ProgressController | null>(null);
  const actualMode = progress !== undefined;

  useEffect(() => {
    const root = document.documentElement;
    const overlay = loader.current;
    const content = document.getElementById("site-content");
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root.hasAttribute("data-site-loader") || !overlay || !content || media.matches) {
      root.removeAttribute("data-site-loader");
      return;
    }

    let disposed = false;
    let finished = false;
    let waitingForAssets = false;
    let targetProgress = 0;
    let gaugeTween: gsap.core.Tween | undefined;
    const originalOverflow = root.style.overflow;
    const originalInert = content.inert;
    const originalContentStyle = content.getAttribute("style");
    const meter = { value: 0 };
    const total = Math.max(3000, durationMs) / 1000;
    const fade = Math.min(Math.max(transitionMs / 1000, 0.15), total * 0.25);
    const revealAt = total - fade;

    root.style.overflow = "hidden";
    content.inert = true;
    overlay.dataset.ready = "true";

    function renderProgress() {
      const value = Math.min(100, Math.max(0, meter.value));
      if (bar.current) bar.current.style.transform = `scaleX(${value / 100})`;
    }

    function restorePage() {
      root.style.overflow = originalOverflow;
      content!.inert = originalInert;
      if (originalContentStyle === null) content!.removeAttribute("style");
      else content!.setAttribute("style", originalContentStyle);
    }

    function finish() {
      if (finished || disposed) return;
      finished = true;
      root.removeAttribute("data-site-loader");
      window.clearTimeout(deadline);
      restorePage();
    }

    const timeline = gsap.timeline({ paused: true, onComplete: finish });
    const context = gsap.context(() => {
      gsap.set(content, { opacity: 0, visibility: "hidden", y: revealOffset });
      timeline
        .addLabel("reveal", revealAt);

      if (actualMode) {
        timeline.addPause("reveal", () => {
          waitingForAssets = true;
          if (targetProgress >= 100) {
            waitingForAssets = false;
            timeline.play();
          }
        });
      } else {
        timeline.to(meter, { value: 100, duration: revealAt, ease: "none", onUpdate: renderProgress }, 0);
      }

      timeline
        .to(overlay, { opacity: 0, duration: fade, ease: "power2.inOut" }, total - fade)
        .to(content, { opacity: 1, visibility: "visible", y: 0, duration: fade, ease: "power2.out" }, total - fade);
    }, overlay);

    controller.current = {
      update(value) {
        if (disposed || finished || !actualMode) return;
        targetProgress = Math.min(100, Math.max(targetProgress, Number.isFinite(value) ? value : 0));
        gaugeTween?.kill();
        gaugeTween = gsap.to(meter, { value: targetProgress, duration: 0.18, ease: "power1.out", onUpdate: renderProgress });
        if (waitingForAssets && targetProgress >= 100) {
          waitingForAssets = false;
          timeline.play();
        }
      },
    };

    // In real-progress mode, a stalled task must never trap the visitor.
    // A timeout releases the page without falsely changing the percentage to 100.
    const deadline = window.setTimeout(finish, actualMode ? Math.max(maxWaitMs, durationMs + 1500) : durationMs + 1500);
    const onPreferenceChange = () => {
      if (media.matches) {
        timeline.kill();
        finish();
      }
    };
    media.addEventListener("change", onPreferenceChange);

    timeline.play(0);

    return () => {
      disposed = true;
      controller.current = null;
      window.clearTimeout(deadline);
      media.removeEventListener("change", onPreferenceChange);
      gaugeTween?.kill();
      timeline.kill();
      context.revert();
      delete overlay.dataset.ready;
      restorePage();
    };
  }, [actualMode, durationMs, maxWaitMs, revealOffset, transitionMs]);

  useEffect(() => {
    if (progress !== undefined) controller.current?.update(progress);
  }, [progress, actualMode]);

  return (
    <div ref={loader} className="page-loader" role="status" aria-label={actualMode ? "Preparing website assets" : "Opening portfolio, simulated sequence"}>
      <div className="page-loader__center">
        <p className="page-loader__title">Nathapoom Wangsatang</p>
        <p className="page-loader__subtitle">Computer Engineering · Portfolio</p>
        <div className="page-loader__track" aria-hidden="true">
          <div ref={bar} className="page-loader__progress" />
        </div>
        <p className="page-loader__label">{actualMode ? "Preparing portfolio" : "Opening sequence · simulated"}</p>
      </div>
    </div>
  );
}
