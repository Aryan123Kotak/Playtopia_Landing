import React from "react";
import { motion } from "framer-motion";
import { Eyebrow, HEX, Shape } from "./primitives";
import { EXTRAS } from "@/data/content";

export default function Extras() {
  return (
    <section className="relative py-24 sm:py-32 border-y-[3px] border-ink bg-ink text-cream overflow-hidden" data-testid="extras-section">
      <div className="pointer-events-none absolute top-10 right-16 animate-floaty"><Shape type="star" color="amber" size={60} /></div>
      <div className="pointer-events-none absolute bottom-12 left-8"><Shape type="plus" color="pink" size={48} /></div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Eyebrow color="lime">More at Playtopia</Eyebrow>
          <h2 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            Beyond the <span className="text-lime">Board.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EXTRAS.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-3xl border-[3px] border-cream/20 bg-[#1c1c1c] p-7 hover:border-cream/40 transition-colors duration-300"
            >
              <div className="text-5xl">{e.emoji}</div>
              <h3 className="mt-4 text-xl sm:text-2xl font-black uppercase tracking-tight">{e.title}</h3>
              <p className="mt-3 text-base font-medium text-cream/70 leading-snug">{e.line}</p>
              <div className="mt-4 h-1 w-12 rounded-full" style={{ backgroundColor: HEX[e.color] }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
