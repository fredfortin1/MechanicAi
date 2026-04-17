"use client";

import { useEffect, useState } from "react";

function montrealTime() {
  const now = new Date();
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Montreal",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return fmt.format(now).toLowerCase();
}

export function TopBar() {
  const [time, setTime] = useState("");
  useEffect(() => {
    setTime(montrealTime());
    const id = setInterval(() => setTime(montrealTime()), 30_000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="mx-auto max-w-7xl px-6 pt-8 pb-6 text-xs tracking-wide uppercase">
      <div className="flex items-center justify-between border-b border-ink/20 pb-6">
        <span>Montreal, QC {time && `· ${time}`}</span>
        <a href="mailto:fredf@bullseyeai.com" className="hover:underline">
          fredf@bullseyeai.com
        </a>
      </div>
    </div>
  );
}
