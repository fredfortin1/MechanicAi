"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const ITEMS = [
  {
    q: "How long is a typical engagement?",
    a: "Most engagements span 4–8 weeks, starting with a discovery sprint, moving into roadmap and MVP build, then launch and training.",
  },
  {
    q: "What do you need from us to start?",
    a: "Access to the workflows and data you want AI touching, a point of contact who can make decisions, and an honest read on what&rsquo;s working and what isn&rsquo;t.",
  },
  {
    q: "How do you handle data confidentiality?",
    a: "NDA up front, scoped access only to systems relevant to the engagement, and a clear data-handling policy written into the statement of work.",
  },
  {
    q: "What industries do you focus on?",
    a: "Strongest fit is B2B SaaS, professional services, and revenue teams running HubSpot. Happy to discuss outside that if the problem is right.",
  },
  {
    q: "How are fees structured?",
    a: "Fixed-fee per phase (discovery, roadmap, MVP) with a clear deliverable at each gate, so you can stop, pivot, or scale at any point.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel>FAQ</SectionLabel>
          </Reveal>
          <Reveal>
            <h2 className="display mt-6 text-5xl sm:text-6xl lg:text-7xl">
              Everything you
              <br />need to know
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-10 text-sm">
              Need personalized answers?
              <br />
              <a href="#contact" className="underline">Let&rsquo;s talk &rarr;</a>
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <ul className="border-t border-ink/20">
            {ITEMS.map((it, i) => {
              const isOpen = open === i;
              return (
                <li key={i} className="border-b border-ink/20">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="flex items-center gap-6">
                      <span className="w-6 text-xs opacity-60">
                        {String(i + 1).padStart(2, "0")}.
                      </span>
                      <span className="font-semibold uppercase tracking-wide">{it.q}</span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      aria-hidden
                    >
                      &darr;
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p
                          className="pb-6 pl-12 pr-4 text-sm leading-relaxed opacity-80"
                          dangerouslySetInnerHTML={{ __html: it.a }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
