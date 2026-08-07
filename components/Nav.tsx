"use client";

import { motion } from "framer-motion";
import MagneticLink from "./MagneticLink";

const links = [
  { label: "Data", href: "#analytics" },
  { label: "AI/ML", href: "#aiml" },
  { label: "Product", href: "#product" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed top-0 inset-x-0 z-30 flex items-center justify-between px-6 md:px-12 py-6"
    >
      <a
        href="#top"
        data-cursor-hover
        className="font-mono text-xs tracking-widest uppercase text-ink"
      >
        A.P.
      </a>
      <nav className="hidden sm:flex items-center gap-7">
        {links.map((link) => (
          <MagneticLink
            key={link.href}
            href={link.href}
            className="font-mono text-xs tracking-widest uppercase text-ink-soft hover:text-ink transition-colors duration-300"
          >
            {link.label}
          </MagneticLink>
        ))}
      </nav>
    </motion.header>
  );
}
