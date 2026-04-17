const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);

  // Scroll to bottom in increments so IntersectionObserver fires for every
  // whileInView section. Then pause so framer-motion entrance animations settle.
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  const step = 600;
  for (let y = 0; y <= totalHeight; y += step) {
    await page.evaluate((pos) => window.scrollTo({ top: pos, behavior: "instant" }), y);
    await page.waitForTimeout(300);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);

  await page.screenshot({
    path: "/home/user/MechanicAi/site/preview/hero.png",
    fullPage: false,
  });
  await page.screenshot({
    path: "/home/user/MechanicAi/site/preview/full.png",
    fullPage: true,
  });

  // per-section framed shots
  const sections = [
    { id: "process", name: "process" },
    { id: "about", name: "about" },
    { id: "testimonials", name: "testimonials" },
    { id: "case-studies", name: "case-studies" },
    { id: "faq", name: "faq" },
    { id: "contact", name: "contact" },
  ];
  for (const s of sections) {
    const el = await page.$(`#${s.id}`);
    if (el) {
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await el.screenshot({ path: `/home/user/MechanicAi/site/preview/${s.name}.png` });
    }
  }

  await browser.close();
  console.log("wrote screenshots");
})();
