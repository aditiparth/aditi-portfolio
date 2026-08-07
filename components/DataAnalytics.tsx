"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Entry = {
  title: string;
  stack: string;
  bullets: string[];
  href: string;
};

const entries: Entry[] = [
  {
    title: "Airbnb Data Analysis",
    stack: "Python · Pandas · NumPy · Matplotlib · Correlation Analysis",
    bullets: [
      "Analyzed Airbnb listing data to understand the factors that influence rental pricing, starting from broad exploratory analysis before narrowing to specific relationships.",
      "Ran correlation analysis across listing attributes to surface pricing trends and flag data-quality issues worth addressing before any modeling.",
    ],
    href: "https://www.datascienceportfol.io/aditiparthasarathi14/projects/2",
  },
  {
    title: "House Price Prediction",
    stack: "Python · Pandas · NumPy · Random Forest · GridSearchCV · Streamlit",
    bullets: [
      "Trained a Random Forest Regressor with GridSearchCV hyperparameter tuning on a 14,600+ row Kaggle dataset of Indian property listings.",
      "Deployed the model as an interactive Streamlit app that predicts house prices from bedrooms, bathrooms, living area, condition, and nearby schools.",
    ],
    href: "https://www.datascienceportfol.io/aditiparthasarathi14/projects/4",
  },
  {
    title: "Titanic Survival Prediction",
    stack: "Python · Pandas · NumPy · EDA · Random Forest · GridSearchCV",
    bullets: [
      "Analyzed passenger demographics, socioeconomic factors, and travel information to identify the key drivers of survival aboard the Titanic.",
      "Built and tuned a Random Forest classifier with GridSearchCV, evaluating results with a confusion matrix and supporting visualizations.",
    ],
    href: "https://www.datascienceportfol.io/aditiparthasarathi14/projects/3",
  },
];

function Row({ entry, index }: { entry: Entry; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="border-b border-line"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        data-cursor-hover
        className="w-full text-left py-7 md:py-9 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 group"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-ink-faint w-32 shrink-0">
          Notebook
        </span>

        <span className="flex-1">
          <span className="font-display text-2xl md:text-4xl text-ink group-hover:text-accent transition-colors duration-300 block">
            {entry.title}
          </span>
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
              <a
                href={entry.href}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="group/link w-fit font-mono text-xs uppercase tracking-widest text-ink-soft hover:text-accent transition-colors duration-300 flex items-center gap-1.5"
              >
                View notebook
                <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function DataAnalytics() {
  return (
    <section id="analytics" className="px-6 md:px-12 py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
          Data analytics — 01
        </p>
        <p className="font-body text-ink-soft text-sm max-w-xs">
          Three notebooks, three datasets — reading the data before trusting
          any model built on top of it.
        </p>
      </div>

      <div>
        {entries.map((entry, i) => (
          <Row key={entry.title} entry={entry} index={i} />
        ))}
      </div>
    </section>
  );
}
