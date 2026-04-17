"use client";

import { motion } from "framer-motion";
import { MaskReveal } from "./Reveal";

const NAV = ["Why Me", "Process", "About", "Case Studies", "Testimonials", "Contact"];

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-6 pb-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="display text-[18vw] leading-[0.88] sm:text-[14vw] lg:text-[11rem]">
            <div>
              <MaskReveal>AI, SIMPLIFIED.</MaskReveal>
            </div>
            <div>
              <MaskReveal delay={0.15}>NO BULLSHIT.</MaskReveal>
            </div>
          </h1>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-10 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm"
          >
            Free Consultation
            <span aria-hidden>&rarr;</span>
          </motion.a>
        </div>

        <div className="lg:col-span-5">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-start lg:justify-end">
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.6 } },
              }}
              className="order-2 space-y-1 text-sm lg:order-1 lg:pt-4"
            >
              {NAV.map((item) => (
                <motion.li
                  key={item}
                  variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0 } }}
                >
                  <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:underline">
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <div className="relative order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-56 w-48 overflow-hidden rounded-sm bg-periwinkle sm:h-64 sm:w-56"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/fred.jpg"
                  alt="Fred Fortin"
                  className="h-full w-full object-cover mix-blend-multiply"
                />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, rotate: -6, y: 8 }}
                animate={{ opacity: 1, rotate: -4, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="script pointer-events-none absolute -bottom-6 -right-4 max-w-[9rem] text-lg leading-tight"
              >
                French-Canadian,<br />fluent in AI
              </motion.span>
            </div>
          </div>

          <div className="mt-16 lg:mt-28">
            <p className="text-xs uppercase tracking-widest">Fred Fortin</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed opacity-80">
              AI made simple, no bullshit. I help companies go from AI-curious to AI-operational &mdash;
              discovery, roadmap, MVP, launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
