"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Email", value: "aditiparthasarathi1406@gmail.com", href: "mailto:aditiparthasarathi1406@gmail.com" },
  { label: "GitHub", value: "github.com/aditiparth", href: "https://github.com/aditiparth" },
  { label: "LinkedIn", value: "linkedin.com/in/aditi-parthasarathi", href: "https://linkedin.com/in/aditi-parthasarathi" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 pt-24 md:pt-32 pb-10 border-t border-line"
    >
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-8"
      >
        Contact — 05
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="font-display text-[10vw] md:text-[5.5vw] leading-[0.95] text-ink max-w-4xl"
      >
        Let&rsquo;s build something{" "}
        <span className="italic text-accent">cool together!</span>
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
      >
        <ul className="flex flex-col gap-2">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-baseline gap-3 w-fit"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-ink-faint w-16 shrink-0">
                  {l.label}
                </span>
                <span className="font-body text-ink group-hover:text-accent transition-colors duration-300 border-b border-transparent group-hover:border-accent">
                  {l.value}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
          Vellore Institute of Technology · 2023–2027
        </p>
      </motion.div>

      <div className="mt-20 pt-6 border-t border-line flex justify-between font-mono text-[11px] uppercase tracking-widest text-ink-faint">
        <span>Aditi Parthasarathi</span>
        <span>Built with Next.js &amp; Framer Motion</span>
      </div>
    </section>
  );
}
