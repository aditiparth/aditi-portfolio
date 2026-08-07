"use client";

import { useEffect, useRef } from "react";

const SPACING = 34;
const BASE_RADIUS = 1.1;
const MAX_RADIUS = 3.4;
const INFLUENCE = 160;

export default function CursorField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999, active: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const inkFaint = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-ink-faint")
      .trim();
    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-accent")
      .trim();

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let points: { x: number; y: number }[] = [];

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      points = [];
      for (let y = SPACING / 2; y < height; y += SPACING) {
        for (let x = SPACING / 2; x < width; x += SPACING) {
          points.push({ x, y });
        }
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      for (const p of points) {
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const t = Math.max(0, 1 - dist / INFLUENCE) * mouse.current.active;
        const radius = BASE_RADIUS + (MAX_RADIUS - BASE_RADIUS) * t;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx!.fillStyle = t > 0.08 ? accent : inkFaint;
        ctx!.globalAlpha = t > 0.08 ? 0.25 + t * 0.55 : 0.28;
        ctx!.fill();
      }
    }

    let raf = 0;
    function loop() {
      // ease the "active" influence toward its target for a gentle response
      draw();
      raf = requestAnimationFrame(loop);
    }

    function handleMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      mouse.current.active = 1;
    }

    function handleLeave() {
      mouse.current.active = 0;
    }

    resize();
    draw();

    if (!reduceMotion) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseleave", handleLeave);
      raf = requestAnimationFrame(loop);
    }
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 w-full h-full"
    />
  );
}
