"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const ROWS = [
  { industry: "SaaS", client: "[Client Name]", expanded: false },
  { industry: "E-commerce", client: "[Client Name]", expanded: false },
  {
    industry: "Professional services",
    client: "[Client Name]",
    expanded: true,
    meta: "(12 Projects Completed)",
    challenge: "Team buried in repetitive ops work. No clear AI entry point.",
    solution: "Ran a 2-week discovery, shipped an MVP automating intake + scoring.",
    result: "Cut ops time 40% in the first quarter. Paying back the engagement in month two.",
  },
  { industry: "Manufacturing", client: "[Client Name]", expanded: false },
  { industry: "Real estate", client: "[Client Name]", expanded: false },
];

export function SuccessStories() {
  return (
    <section id="case-studies" className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <SectionLabel>Case Studies</SectionLabel>
      </Reveal>
      <Reveal>
        <h2 className="display mt-6 text-5xl sm:text-6xl lg:text-7xl">Success stories</h2>
      </Reveal>

      <div className="mt-10 border-t border-ink/20">
        {ROWS.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="grid grid-cols-12 items-start gap-4 border-b border-ink/20 py-6"
          >
            <div className="col-span-12 text-sm opacity-70 sm:col-span-3">
              {r.industry}
              {r.meta && <div className="mt-1 text-xs opacity-60">{r.meta}</div>}
            </div>
            <div className="col-span-12 sm:col-span-8">
              <div className="flex items-start justify-between gap-4">
                <div className="text-lg font-semibold uppercase tracking-wide">{r.client}</div>
                <span aria-hidden className="text-ink/40">&bull;</span>
              </div>
              {r.expanded && (
                <div className="mt-6 grid grid-cols-1 gap-6 text-sm leading-relaxed sm:grid-cols-3">
                  <div>
                    <div className="text-xs uppercase tracking-wider opacity-70">Challenge</div>
                    <p className="mt-2">{r.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider opacity-70">Solution</div>
                    <p className="mt-2">{r.solution}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider opacity-70">Result</div>
                    <p className="mt-2">{r.result}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
