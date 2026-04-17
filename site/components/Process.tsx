"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

const PHASES = [
  {
    n: "01",
    title: "AI Discovery",
    body:
      "We audit your workflows, data, and team to spot where AI actually moves the needle &mdash; and where it would just be noise.",
  },
  {
    n: "02",
    title: "Strategy & Roadmap",
    body:
      "A prioritized, budgeted plan covering models, integrations, and change management. You leave with a path, not a slide deck.",
  },
  {
    n: "03",
    title: "MVP Build",
    body:
      "We ship a working MVP fast, plugged into your real systems, so stakeholders can feel the value before you scale investment.",
  },
  {
    n: "04",
    title: "Launch & Scale",
    body:
      "Hardening, rollout, training, and the ops playbook to keep your AI platform running and improving after go-live.",
  },
];

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Reveal>
            <SectionLabel>Process</SectionLabel>
          </Reveal>
        </div>
        <div className="lg:col-span-9">
          <Reveal>
            <h2 className="display text-5xl sm:text-6xl lg:text-7xl">
              How we solve
              <br />
              problems with AI
            </h2>
          </Reveal>

          <div className="mt-12 border-t border-ink/20">
            {PHASES.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-12 items-start gap-4 border-b border-ink/20 py-6"
              >
                <div className="col-span-2 text-sm opacity-60 sm:col-span-1">{p.n}</div>
                <div className="col-span-10 font-semibold uppercase tracking-wide sm:col-span-4">
                  {p.title}
                </div>
                <p
                  className="col-span-12 text-sm leading-relaxed opacity-80 sm:col-span-7"
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
              </motion.div>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="script mt-16 flex items-center gap-4 text-xl">
              <span className="h-3 w-3 rounded-full bg-ink" aria-hidden />
              Turning &ldquo;we should probably do AI&rdquo; into shipped product
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
