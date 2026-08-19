import React from "react";
import { motion } from "framer-motion";
import { Eyebrow, HEX } from "./primitives";
import { PERSONAS } from "@/data/content";

export default function WhoIsItFor() {
  return (
    <section id="who" className="relative py-24 sm:py-32 overflow-hidden" data-testid="who-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Eyebrow color="teal">Who is it for?</Eyebrow>
          <h2 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            Find Your <span className="text-pink">Player Type.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {PERSONAS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border-[3px] border-ink p-7 shadow-[6px_6px_0px_0px_#141414] bg-cream hover:shadow-[2px_2px_0px_0px_#141414] hover:translate-x-[4px] hover:translate-y-[4px] transition-[transform,box-shadow] duration-200"
              data-testid={`persona-card-${i}`}
            >
              <div className="text-5xl mb-4">{p.emoji}</div>
              <h3 className="text-xl font-black uppercase tracking-tight" style={{ color: HEX[p.color] }}>{p.name}</h3>
              <p className="mt-3 text-sm sm:text-base font-medium text-ink/75 leading-snug">{p.line}</p>
              <div className="absolute -bottom-2 -right-2 text-8xl font-black tracking-tighter select-none leading-none opacity-[0.06]">0{i + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
