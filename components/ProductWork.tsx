"use client";

import { motion } from "framer-motion";

type ProductEntry = {
  status: "ongoing" | "complete";
  statusLabel: string;
  team: string;
  hackathon: string;
  title: string;
  mission: string;
  sources: string[];
  bullets: string[];
  outcome?: string;
  links?: { label: string; href: string }[];
};

const entries: ProductEntry[] = [
  {
    status: "ongoing",
    statusLabel: "Ongoing, multi-stage",
    team: "2-person build",
    hackathon: "ET AI Hackathon 2.0",
    title: "Industrial Knowledge Copilot",
    mission:
      "Turning fragmented manufacturing knowledge into a copilot that shows its work.",
    sources: ["McKinsey", "NASSCOM–EY", "BIS manufacturing reports"],
    bullets: [
      "Scoped the problem using primary research instead of assumptions, translating findings into user personas and a functional requirements doc for a 2-person build.",
      "Designed a hybrid retrieval pipeline combining semantic search, keyword search, and knowledge-graph reasoning to handle both precise lookups and open-ended manufacturing queries.",
      "Built an explainable-AI layer — citation-backed responses, source traceability, and knowledge-graph visualization — so users can verify each answer against its source rather than trust a black box.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/aditiparth/ETAI-Industrial-RAG-copilot" },
      { label: "Report", href: "https://drive.google.com/file/d/1Z8JecUUkxHzhQBCFU2-xVM0ELT-aw6yz/view?usp=sharing" },
    ],
  },
  {
    status: "complete",
    statusLabel: "Complete",
    team: "6-person team",
    hackathon: "Smart India Hackathon 2025",
    title: "OceanEyes",
    mission:
      "A crowdsourced ocean-hazard reporting platform, scoped against how disaster response actually works.",
    sources: ["INCOIS workflows", "2018 Kerala floods"],
    bullets: [
      "Delivered a validated, phased implementation roadmap by researching INCOIS operational workflows and the 2018 Kerala floods, aligning technical scope across a 6-person team with real disaster-response requirements.",
      "Coordinated with teammates to define stakeholder requirements and privacy/misinformation safeguards across geo-tagged reporting and social-media analytics features, documenting trade-offs for the judging panel.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/aditiparth/Integrated-Platform-for-Crowdsourced-Ocean-Hazard-Reporting-and-Social-Media-Analytics" },
      { label: "Report", href: "https://docs.google.com/presentation/d/19uLkqsbk3gWjVh0B8ojnD7IyWrOcm4h8/edit?usp=sharing&ouid=106509051649336642893&rtpof=true&sd=true" },
    ],
  },
  {
    status: "complete",
    statusLabel: "Complete",
    team: "Solo builder",
    hackathon: "Mahakumbh Hackathon",
    title: "KumbhSathi",
    mission:
      "Shipping a multilingual pilgrim assistant end-to-end, alone, against a fixed clock.",
    sources: [],
    bullets: [
      "Shipped a functional multi-feature prototype — itinerary planning, crowd-density insights, emergency contacts, multilingual assistant — within a fixed hackathon timeline by independently prioritizing scope against real-world event constraints.",
    ],
    outcome: "1st · Technical Analyst, Round 1 — 13th overall of 100+ finalists",
    links: [
      { label: "GitHub", href: "https://github.com/aditiparth/kumbhsathi" },
    ],
  },
];

function StatusDot({ status }: { status: "ongoing" | "complete" }) {
  if (status === "ongoing") {
    return (
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
      </span>
    );
  }
  return <span className="inline-flex rounded-full h-2 w-2 bg-ink-faint" />;
}

function Dossier({ entry, index }: { entry: ProductEntry; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="border border-line px-6 md:px-10 py-8 md:py-10 flex flex-col gap-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <StatusDot status={entry.status} />
          <span className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">
            {entry.statusLabel}
          </span>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
          {entry.team}
        </span>
      </div>

      <div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint mb-2">
          {entry.hackathon}
        </p>
        <h3 className="font-display text-3xl md:text-4xl text-ink mb-2">
          {entry.title}
        </h3>
        <p className="font-body italic text-ink-soft text-base md:text-lg max-w-xl">
          {entry.mission}
        </p>
      </div>

      {entry.sources.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {entry.sources.map((s) => (
            <span
              key={s}
              className="font-mono text-[10px] uppercase tracking-widest text-accent border border-accent/30 px-2 py-1"
            >
              {s}
            </span>
          ))}
        </div>
      )}

      <ul className="flex flex-col gap-3 max-w-2xl">
        {entry.bullets.map((b, i) => (
          <li
            key={i}
            className="font-body text-ink-soft text-[15px] leading-relaxed"
          >
            {b}
          </li>
        ))}
      </ul>

      {entry.outcome && (
        <p className="font-mono text-xs uppercase tracking-widest text-accent border-t border-line pt-4">
          {entry.outcome}
        </p>
      )}

      {entry.links && entry.links.length > 0 && (
        <div className={`flex gap-6 ${entry.outcome ? "" : "border-t border-line pt-4"}`}>
          {entry.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="group font-mono text-xs uppercase tracking-widest text-ink-soft hover:text-accent transition-colors duration-300 flex items-center gap-1.5"
            >
              {l.label}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
}

export default function ProductWork() {
  return (
    <section
      id="product"
      className="px-6 md:px-12 py-24 md:py-32 border-t border-line"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-4">
            Product &amp; research — 03
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-ink leading-[1.05]">
            Before the build,{" "}
            <span className="italic text-accent">the argument.</span>
          </h2>
        </div>
        <p className="font-body text-ink-soft text-sm max-w-xs">
          Three hackathons, three research trails — turning reports and
          stakeholder constraints into scoped, defensible product decisions.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {entries.map((entry, i) => (
          <Dossier key={entry.title} entry={entry} index={i} />
        ))}
      </div>
    </section>
  );
}
