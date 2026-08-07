"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const education = [
  {
    place: "Vellore Institute of Technology, Bhopal",
    detail: "B.Tech in Computer Science and Engineering · CGPA 9.25/10",
    date: "2023 – 2027",
  },
  {
    place: "CBSE, Class XII",
    detail: "Senior Secondary Education · 91.2%",
    date: "2023",
  },
  {
    place: "CBSE, Class X",
    detail: "Secondary Education · 95.4%",
    date: "2021",
  },
];

const certifications = [
  "AWS Technical Essentials — AWS Training and Certification",
  "Foundation Course in Data Science and Programming — IIT Madras",
  "Introduction to Machine Learning — NPTEL",
  "Marketing Analytics — NPTEL",
];

type Pillar = {
  key: string;
  label: string;
  headline: string;
  description: string;
  grounding: string[];
};

const pillars: Pillar[] = [
  {
    key: "analytics",
    label: "Data Analytics",
    headline: "Reading the data before trusting it.",
    description:
      "Exploratory analysis on transaction-level records, handling severe class imbalance, and iterating on feature engineering and evaluation thresholds beyond raw accuracy — the groundwork every model or dashboard sits on.",
    grounding: [
      "Airbnb Data Analysis — EDA & correlation analysis",
      "House Price Prediction — Random Forest & Streamlit",
      "Titanic Survival Prediction — Random Forest classifier",
      "Marketing Analytics — NPTEL",
      "Data Science & Programming Diploma — IIT Madras",
      "Pandas · NumPy · scikit-learn",
    ],
  },
  {
    key: "aiml",
    label: "AI / ML",
    headline: "Models that show their work.",
    description:
      "From Random Forest and XGBoost risk models to a hybrid semantic + knowledge-graph retrieval pipeline with an explainable-AI layer — building systems that a person can actually verify, not just trust.",
    grounding: [
      "GraphRAG — hybrid retrieval & explainability",
      "KumbhSathi — multilingual LLM assistant",
      "Random Forest · XGBoost risk models",
      "OpenRouter · FastAPI",
    ],
  },
  {
    key: "product",
    label: "Product",
    headline: "Scoping before building.",
    description:
      "Turning primary research and stakeholder constraints into personas, requirements docs, and phased roadmaps — then keeping cross-functional teams aligned to ship on schedule.",
    grounding: [
      "GraphRAG — primary research & personas",
      "OceanEyes — stakeholder alignment & roadmap",
      "Design Lead, Cisco Community VIT",
      "Figma · Notion · Canva",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function Capabilities() {
  const [active, setActive] = useState(0);
  const pillar = pillars[active];

  return (
    <div className="border border-line">
      <div className="grid grid-cols-3 border-b border-line">
        {pillars.map((p, i) => (
          <button
            key={p.key}
            onClick={() => setActive(i)}
            className={`relative font-mono text-[11px] md:text-xs uppercase tracking-widest py-4 px-2 md:px-4 transition-colors duration-300 ${
              active === i ? "text-ink" : "text-ink-faint hover:text-ink-soft"
            } ${i !== 0 ? "border-l border-line" : ""}`}
          >
            {p.label}
            {active === i && (
              <motion.span
                layoutId="capability-underline"
                className="absolute left-0 right-0 -bottom-px h-[2px] bg-accent"
              />
            )}
          </button>
        ))}
      </div>

      <div className="p-6 md:p-10 min-h-[260px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={pillar.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <h3 className="font-display text-2xl md:text-3xl text-ink mb-4">
              {pillar.headline}
            </h3>
            <p className="font-body text-ink-soft leading-relaxed max-w-lg mb-6">
              {pillar.description}
            </p>
            <ul className="flex flex-wrap gap-2">
              {pillar.grounding.map((g) => (
                <li
                  key={g}
                  className="font-mono text-[10px] uppercase tracking-widest text-accent border border-accent/30 px-2 py-1"
                >
                  {g}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function AboutPhoto() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  return (
    <div ref={wrapRef} className="shrink-0">
      <motion.div
        style={{ y }}
        className="group relative w-40 h-52 md:w-48 md:h-64 border border-line overflow-hidden bg-paper-deep"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display italic text-4xl md:text-5xl text-ink-faint">
            AP
          </span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photo.jpg"
          alt="Aditi Parthasarathi"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.98] transition-[filter,transform] duration-500 ease-out group-hover:grayscale-0 group-hover:scale-[1.04]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute bottom-0 inset-x-0 bg-paper/95 border-t border-line py-1 text-center translate-y-0 group-hover:-translate-y-full transition-transform duration-400 ease-out">
          <span className="font-mono text-[9px] uppercase tracking-widest text-ink-faint">
            A.P. — VIT Bhopal
          </span>
        </div>
        <div className="absolute bottom-0 inset-x-0 bg-accent py-1 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
          <span className="font-mono text-[9px] uppercase tracking-widest text-paper">
            Data · AI/ML · Product
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-24 md:py-32 border-t border-line">
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-10 md:mb-16"
      >
        About — 04
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-start gap-8 md:gap-14"
      >
        <AboutPhoto />
        <div>
          <p className="font-display text-2xl md:text-[2rem] leading-[1.35] text-ink max-w-2xl">
            Hi, I&rsquo;m Aditi — a Computer Science student who works across
            data analytics, AI/ML, and product, wherever a real-world problem
            needs untangling.
          </p>
          <p className="font-body text-ink-soft leading-relaxed max-w-xl mt-6">
            My interests sit at the intersection of AI, machine learning and  data
            analytics — I&rsquo;m drawn to how
            technology can improve decision-making and everyday experiences.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-16 md:mb-24"
      >
        <Capabilities />
      </motion.div>

      <div className="grid md:grid-cols-[1.2fr_1fr] gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
            Designer, Cisco Community VIT · 2024 – Present
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col gap-10"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
              Education
            </p>
            <ul className="flex flex-col gap-4">
              {education.map((e) => (
                <li key={e.place} className="border-b border-line pb-4">
                  <div className="flex justify-between items-baseline gap-4">
                    <span className="font-body text-ink text-[15px]">
                      {e.place}
                    </span>
                    <span className="font-mono text-xs text-ink-faint shrink-0">
                      {e.date}
                    </span>
                  </div>
                  <p className="font-body text-ink-soft text-sm mt-1">
                    {e.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
              Certifications
            </p>
            <ul className="flex flex-col gap-2">
              {certifications.map((c) => (
                <li
                  key={c}
                  className="font-body text-ink-soft text-sm leading-relaxed"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
