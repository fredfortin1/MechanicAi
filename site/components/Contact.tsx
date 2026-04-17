"use client";

import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <div className="rounded-3xl bg-oxblood px-8 py-16 text-cream sm:px-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-2">
              <span className="inline-block rounded-full border border-cream/50 px-4 py-1 text-xs uppercase tracking-wider">
                Contact Me
              </span>
            </div>
            <div className="lg:col-span-4">
              <h2 className="display text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
                Schedule a<br />consultation
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="max-w-md text-sm leading-relaxed opacity-90">
                Tell me what you&rsquo;re trying to do with AI. I&rsquo;ll reply with an honest
                read on whether it&rsquo;s the right move and what it would take to ship it.
              </p>
              <form
                className="mt-10 space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  const body = `Name: ${data.get("name")}\nCompany: ${data.get("company")}\n\n${data.get("message")}`;
                  window.location.href = `mailto:fredf@bullseyeai.com?subject=Consultation%20Request&body=${encodeURIComponent(body)}`;
                }}
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <Field name="name" label="Name" />
                  <Field name="company" label="Company" />
                  <Field name="email" label="Email" type="email" />
                </div>
                <Field name="message" label="Message" textarea />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 border-b border-cream pb-1 text-sm uppercase tracking-wider"
                  >
                    Schedule a free consultation &rarr;
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea = false,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest opacity-70">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          rows={3}
          required
          className="mt-2 w-full resize-none border-b border-cream/40 bg-transparent py-2 text-sm focus:border-cream focus:outline-none"
        />
      ) : (
        <input
          name={name}
          type={type}
          required
          className="mt-2 w-full border-b border-cream/40 bg-transparent py-2 text-sm focus:border-cream focus:outline-none"
        />
      )}
    </label>
  );
}
