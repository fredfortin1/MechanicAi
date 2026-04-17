"use client";

import { Linkedin, Facebook, Twitter } from "lucide-react";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 pb-16 pt-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <p className="text-xs uppercase tracking-widest">Fred Fortin</p>
          <p className="mt-4 max-w-xs text-sm opacity-80">
            AI made simple, no bullshit. Let&rsquo;s turn your AI curiosity into shipped product.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative h-56 w-48 overflow-hidden rounded-sm bg-periwinkle">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fred.jpg"
              alt="Fred Fortin"
              className="h-full w-full object-cover mix-blend-multiply"
            />
            <span className="script pointer-events-none absolute -bottom-3 left-2 max-w-[10rem] rotate-[-4deg] text-lg leading-tight">
              Coffee&rsquo;s on me,
              <br />let&rsquo;s chat
            </span>
          </div>
        </div>

        <div className="lg:col-span-4">
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" aria-label="LinkedIn" className="inline-flex items-center gap-3 hover:underline">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="#" aria-label="X" className="inline-flex items-center gap-3 hover:underline">
                <Twitter className="h-4 w-4" /> X (Twitter)
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook" className="inline-flex items-center gap-3 hover:underline">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Reveal>
        <a
          href="mailto:fredf@bullseyeai.com"
          className="display mt-20 block break-all text-center text-[14vw] leading-[0.9] hover:text-oxblood sm:text-[10vw]"
        >
          fredf@bullseyeai.com
        </a>
      </Reveal>

      <p className="mt-16 text-center text-xs uppercase tracking-widest opacity-60">
        &copy; {new Date().getFullYear()} Fred Fortin &middot; Montreal, QC
      </p>
    </footer>
  );
}
