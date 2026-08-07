"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Entry = {
  category: string;
  date: string;
  title: string;
  subtitle?: string;
  stack: string;
  bullets: string[];
};

const entries: Entry[] = [
  {
    category: "Internship",
    date: "Jun 2024",
    title: "NIT Trichy — Software Development Intern",
    stack: "Python · Django · HTML · CSS",
    bullets: [
      "Engineered a Django-based budget management system for the Computer Support Group, replacing manual spreadsheet tracking with a centralized, auditable workflow for departmental budgets.",
      "Built a responsive HTML/CSS front-end used by 10+ department staff to log and review budget entries, replacing spreadsheet-based entry with a validated, structured form workflow.",
    ],
  },
  {
    category: "ML System",
    date: "Featured",
    title: "Fraud Detection Using Machine Learning",
    stack: "Python · Pandas · Streamlit · EDA",
    bullets: [
      "Performed exploratory data analysis on transaction-level records to identify fraud-indicative features, addressing significant class imbalance in the dataset.",
      "Built and validated a classification model achieving 94% accuracy, then deployed predictions through an interactive Streamlit dashboard for real-time decision support.",
      "Iterated on feature engineering and evaluation thresholds to improve reliability beyond raw accuracy — a workflow mirroring risk-analytics processes used in fintech products.",
    ],
  },
  {
    category: "ML System",
    date: "Team project",
    title: "Remote Post-Surgery Patient Monitoring System",
    stack: "Python · Random Forest · XGBoost · ESP32 · MQTT",
    bullets: [
      "Developed an AI-IoT healthcare monitoring system using ESP32 and cloud-based MQTT for real-time post-surgery patient vital monitoring.",
      "Trained Random Forest and XGBoost models for intelligent risk assessment and automated emergency alert generation.",
      "Built caregiver dashboards with live trends and waveform visualizations to support proactive medical intervention.",
    ],
  },
];

function Row({ entry, index }: { entry: Entry; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] as const }}
      className="border-b border-line"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left py-7 md:py-9 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 group"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-ink-faint w-32 shrink-0">
          {entry.category}
        </span>

        <span className="flex-1">
          <span className="font-display text-2xl md:text-4xl text-ink group-hover:text-accent transition-colors duration-300 block">
            {entry.title}
          </span>
          {entry.subtitle && (
            <span className="font-body text-sm md:text-base text-ink-soft italic">
              {entry.subtitle}
            </span>
          )}
        </span>

        <span className="font-mono text-xs uppercase tracking-widest text-ink-faint shrink-0">
          {entry.date}
        </span>

        <span
          className={`font-mono text-lg text-ink-soft shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
            className="overflow-hidden"
          >
            <div className="pb-8 md:pl-40 max-w-2xl flex flex-col gap-4">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                {entry.stack}
              </p>
              <ul className="flex flex-col gap-3">
                {entry.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="font-body text-ink-soft leading-relaxed text-[15px] md:text-base"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Work() {
  return (
    <section id="aiml" className="px-6 md:px-12 py-24 md:py-32">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-10 md:mb-16"
      >
        AI / ML — 02
      </motion.p>

      <div>
        {entries.map((entry, i) => (
          <Row key={entry.title} entry={entry} index={i} />
        ))}
      </div>
    </section>
  );
}
