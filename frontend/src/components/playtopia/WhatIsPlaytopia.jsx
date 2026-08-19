import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow, HEX, Shape } from "./primitives";
import { CHAPTERS } from "@/data/content";

export default function WhatIsPlaytopia() {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-y-[3px] border-ink bg-ink text-cream overflow-hidden" data-testid="about-section">
      <div className="pointer-events-none absolute -top-16 right-10 animate-spinslow opacity-80"><Shape type="ring" color="amber" size={120} /></div>
      <div className="pointer-events-none absolute bottom-8 left-6"><Shape type="wave" color="teal" size={120} /></div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-4xl">
          <Eyebrow color="amber">What is Playtopia</Eyebrow>
          <h2 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            1000+ Games. One Day.<br /><span className="text-teal">Three Zones.</span> Full Conversion.
          </h2>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl font-medium text-cream/80">
            A one-day board game festival that blends competition, community and celebration across three immersive zones. Every path ends at play.
          </p>
        </div>

        <div className="mt-16 grid gap-px border-[3px] border-cream/20 rounded-3xl overflow-hidden sm:grid-cols-3 bg-cream/10">
          {CHAPTERS.map((c, i) => (
            <motion.div
              key={c.no}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group relative bg-ink p-8 sm:p-10 transition-colors duration-300 hover:bg-[#1c1c1c]"
              data-testid={`chapter-${c.no}`}
            >
              <div className="flex items-start justify-between">
                <span className="text-7xl font-black tracking-tighter leading-none" style={{ color: HEX[c.color] }}>{c.no}</span>
                <ArrowUpRight className="h-7 w-7 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </div>
              <h3 className="mt-6 text-3xl font-black uppercase tracking-tight">{c.title}</h3>
              <div className="mt-1 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: HEX[c.color] }}>{c.zone}</div>
              <p className="mt-4 text-base font-medium text-cream/70 leading-snug">{c.line}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-xl sm:text-2xl font-bold italic text-cream/90">
          "Every zone drives to your space. Every path ends at your product."
        </p>
      </div>
    </section>
  );
}
