"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";

function useISTClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setTime(formatted);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const line = {
  hidden: { opacity: 0, y: "100%" },
  show: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const pillars = ["DATA ANALYTICS", "AI / ML", "PRODUCT"];

function PillarMarquee() {
  const track = [...pillars, ...pillars, ...pillars];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      className="relative z-10 w-[110%] -ml-[5%] -rotate-2 border-y border-line bg-paper/80 backdrop-blur-sm py-3 md:py-4 overflow-hidden"
    >
      <div className="flex w-max animate-marquee-slow">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            {track.map((p, i) => (
              <span
                key={`${copy}-${i}`}
                className="flex items-center font-display italic text-2xl md:text-4xl text-ink px-6 whitespace-nowrap"
              >
                {p}
                <span className="mx-6 text-accent not-italic">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const time = useISTClock();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-between px-6 md:px-12 pt-32 pb-10 overflow-hidden bg-paper"
    >
      <HeroBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex-1 flex flex-col justify-center"
      >
        <div className="overflow-hidden">
          <motion.h1
            variants={line}
            className="font-display font-normal leading-[0.88] tracking-[-0.02em] text-ink text-[17vw] md:text-[10.5vw] drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)]"
          >
            Aditi
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            variants={line}
            className="font-display italic font-light leading-[0.88] tracking-[-0.02em] text-accent text-[17vw] md:text-[10.5vw] -mt-1 md:-mt-2 drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)]"
          >
            Parthasarathi
          </motion.h1>
        </div>

        <motion.div variants={line} className="mt-6 md:mt-8 max-w-xl">
          <p className="font-body text-lg md:text-xl text-ink-soft leading-relaxed">
            Computer Science engineer turning noisy, real-world data into
            decisions other people can act on.
          </p>
        </motion.div>
      </motion.div>

      <div className="relative z-10 my-8 md:my-10">
        <PillarMarquee />
      </div>

      <motion.div
        variants={line}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-wrap items-end justify-between gap-4 font-mono text-xs uppercase tracking-widest text-ink-faint border-t border-line pt-4"
      >
        <span>VIT Bhopal · B.Tech CSE, 2023–2027</span>
        <span className="text-ink-soft">{time || "--:--:--"} IST</span>
        <span>Based in India</span>
      </motion.div>
    </section>
  );
}
