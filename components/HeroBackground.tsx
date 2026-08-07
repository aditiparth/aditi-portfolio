"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeroBackground() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 40, damping: 14, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 40, damping: 14, mass: 0.6 });
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    function handleMove(e: MouseEvent) {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      x.set(relX * -22);
      y.set(relY * -16);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute inset-[-4%]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-bg.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover scale-[1.08]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-paper/10 via-paper/40 to-paper" />
      <div className="absolute inset-0 bg-gradient-to-r from-paper/60 via-transparent to-paper/60" />
    </div>
  );
}
