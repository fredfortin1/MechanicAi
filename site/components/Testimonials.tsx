"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const QUOTES = [
  {
    score: "5/5",
    body:
      "Fred cut through the AI hype and gave us a roadmap we could actually ship. Three months later, our sales ops runs itself.",
    name: "[Client Name]",
    title: "CRO, [Company]",
  },
  {
    score: "5/5",
    body:
      "He translates between execs, engineers, and customers better than anyone we&rsquo;ve worked with. Our MVP launched on time and on budget.",
    name: "[Client Name]",
    title: "CEO, [Company]",
  },
  {
    score: "5/5",
    body:
      "No bullshit, no jargon, no six-month slide-deck phase. Just a working product and a clear path to scale.",
    name: "[Client Name]",
    title: "Head of Product, [Company]",
  },
];

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Reveal>
            <SectionLabel>Testimonials</SectionLabel>
          </Reveal>
        </div>
        <div className="lg:col-span-9">
          <div className="flex items-start justify-between gap-6">
            <Reveal>
              <h2 className="display text-5xl sm:text-6xl lg:text-7xl">
                What clients
                <br />say
              </h2>
            </Reveal>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => scroll(-1)}
                aria-label="Previous"
                className="grid h-10 w-10 place-items-center rounded-full border border-ink/40 hover:bg-ink hover:text-cream"
              >
                &larr;
              </button>
              <button
                onClick={() => scroll(1)}
                aria-label="Next"
                className="grid h-10 w-10 place-items-center rounded-full bg-ink text-cream"
              >
                &rarr;
              </button>
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="mt-12 flex snap-x snap-mandatory gap-10 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {QUOTES.map((q, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="min-w-[18rem] max-w-sm shrink-0 snap-start border-l border-ink/20 pl-6"
              >
                <div className="text-xs opacity-60">{q.score}</div>
                <blockquote
                  className="mt-6 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: q.body }}
                />
                <figcaption className="mt-6 text-sm">
                  <div className="font-semibold">{q.name}</div>
                  <div className="opacity-70">{q.title}</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
