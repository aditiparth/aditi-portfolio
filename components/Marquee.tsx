"use client";

const skills = [
  "PYTHON",
  "SQL",
  "REACT.JS",
  "FASTAPI",
  "PANDAS",
  "SCIKIT-LEARN",
  "XGBOOST",
  "FIGMA",
  "NOTION",
  "JAVASCRIPT",
  "RANDOM FOREST",
  "STREAMLIT",
];

export default function Marquee() {
  const track = [...skills, ...skills];

  return (
    <div className="relative border-y border-line py-4 overflow-hidden bg-paper-deep">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            {track.map((s, i) => (
              <span
                key={`${copy}-${i}`}
                className="flex items-center font-mono text-xs uppercase tracking-widest text-ink-soft px-6 whitespace-nowrap"
              >
                {s}
                <span className="mx-6 text-accent">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
