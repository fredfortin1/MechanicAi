"use client";

import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-oxblood px-8 py-16 text-cream sm:px-14">
          <DecorCircles />
          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-2">
              <span className="inline-block rounded-full border border-cream/50 px-4 py-1 text-xs uppercase tracking-wider">
                About Me
              </span>
            </div>

            <div className="lg:col-span-4">
              <div className="h-72 w-full overflow-hidden rounded-sm bg-chartreuse">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/fred.jpg"
                  alt="Fred Fortin"
                  className="h-full w-full object-cover mix-blend-multiply"
                />
              </div>
              <div className="mt-6 space-y-1 text-sm">
                <p>Email: fredf@bullseyeai.com</p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <h2 className="display text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
                Who am I,
                <br />and how can I help?
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed opacity-90">
                20+ years in the industry. HEC Montr&eacute;al grad. 15 years running my
                own business. Joined one of the world&rsquo;s top HubSpot partner agencies in
                2020, and recently came on board as VP of Sales at Bullseye AI.
              </p>

              <div className="mt-10">
                <p className="text-xs uppercase tracking-widest opacity-80">Key Skills</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
                  <li>AI strategy &amp; roadmapping</li>
                  <li>HubSpot &amp; revenue ops automation</li>
                  <li>MVP design &amp; delivery</li>
                  <li>Sales enablement with AI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function DecorCircles() {
  const circles = Array.from({ length: 10 });
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.12]"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {circles.map((_, i) => (
        <circle
          key={i}
          cx="80"
          cy="200"
          r={20 + i * 28}
          fill="none"
          stroke="#F2EFE8"
          strokeWidth="1"
        />
      ))}
      {circles.map((_, i) => (
        <circle
          key={`r-${i}`}
          cx="340"
          cy="120"
          r={15 + i * 22}
          fill="none"
          stroke="#F2EFE8"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
