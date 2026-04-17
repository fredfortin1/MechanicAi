# Fred Fortin — landing page

Next.js + Tailwind + Framer Motion. Design inspired by Taras Migulko's *Waverly Consulting landing page animation* ([Dribbble shot 26491628](https://dribbble.com/shots/26491628-Waverly-Consulting-landing-page-animation)), re-skinned for Fred Fortin / Bullseye AI.

## Add the portrait

Drop the photo at `public/fred.jpg` before running. The site references `/fred.jpg` in three places (hero, about card, footer).

## Run

```bash
cd site
npm install
npm run dev
```

Open http://localhost:3000.

## Stack

- Next.js 14 App Router, React 18, TypeScript
- Tailwind CSS (custom palette: `cream`, `ink`, `oxblood`, `chartreuse`, `periwinkle`, `marker`)
- Framer Motion for scroll-triggered reveals, mask-up headline animation, carousel nudges, FAQ accordion
- `lucide-react` for social icons

## Content status

- Hero, process, about, FAQ, contact, footer: **filled** with Fred's real copy
- Testimonials, success stories: **stubbed** with `[Client Name]` placeholders — swap when real content is ready
- Social links: **icons only**, `href="#"` — swap when URLs are ready
