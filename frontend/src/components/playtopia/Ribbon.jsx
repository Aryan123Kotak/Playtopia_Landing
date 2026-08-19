import React from "react";
import Marquee from "react-fast-marquee";
import { HEX } from "./primitives";

const ITEMS = ["Rediscover Play", "Rediscover People", "Pune 2026", "1000+ Games", "Three Zones", "One Day"];

export default function Ribbon({ color = "coral", direction = "left" }) {
  return (
    <div className="relative -rotate-2 my-6 border-y-[3px] border-ink" style={{ backgroundColor: HEX[color] }} data-testid="marquee-ribbon">
      <Marquee speed={40} autoFill direction={direction} gradient={false}>
        {ITEMS.map((t, i) => (
          <span key={i} className="mx-6 inline-flex items-center gap-6 py-3 text-3xl sm:text-5xl font-black uppercase tracking-tight text-cream">
            {t}
            <svg width="26" height="26" viewBox="0 0 100 100" aria-hidden><path d="M50 2 C56 40 60 44 98 50 C60 56 56 60 50 98 C44 60 40 56 2 50 C40 44 44 40 50 2 Z" fill={HEX.cream} /></svg>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
