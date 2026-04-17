"use client";

import { Reveal } from "./Reveal";

export function CtaCircles() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <div className="flex items-center justify-center gap-6">
          <a
            href="#contact"
            className="script grid h-36 w-36 place-items-center rounded-full bg-ink text-center text-xl leading-tight text-chartreuse transition hover:scale-105"
          >
            Fancy a<br />consult?
          </a>
          <a
            href="#contact"
            className="grid h-36 w-36 place-items-center rounded-full border border-ink text-center text-sm transition hover:bg-ink hover:text-cream"
          >
            Consultation &rarr;
          </a>
        </div>
      </Reveal>
    </section>
  );
}
