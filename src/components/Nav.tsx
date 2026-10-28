"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { experience } from "@/lib/data";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#work" },
  { label: "Skills", href: "#skills" },
  ...(experience.length > 0 ? [{ label: "Experience", href: "#experience" }] : []),
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.header
      initial={prefersReducedMotion ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-paper/95 backdrop-blur-sm"
    >
      <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-3.5 sm:px-10 lg:px-12">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          aria-label="Nathapoom — Home"
          className="inline-flex shrink-0 items-center"
        >
          <Image src="/brand/nathapoom-mark.png" alt="Nathapoom N logo" width={36} height={36} priority className="brand-mark" />
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-moss transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger toggle — mobile only */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center border border-line text-ink transition-colors hover:border-ink md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col overflow-hidden border-t border-line/70 bg-paper md:hidden"
          >
            {links.map((link) => (
              <li key={link.href} className="border-b border-line/70 last:border-b-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
