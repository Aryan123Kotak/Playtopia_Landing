import React from "react";
import { motion } from "framer-motion";
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
            1000+ Games. One Day.<br /><span className="text-teal">Three Zones.</span> Countless Ways to Play.
          </h2>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl font-medium text-cream/80">
            Playtopia is a celebration of board games, competition, communities and the people who make playing them so much fun.
          </p>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl font-semibold text-cream/90">
            Discover new games. Meet new people. Challenge your friends. Find your next obsession.
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
              className="group relative bg-ink p-8 sm:p-10 transition-colors duration-300 hover:bg-[#1c1c1c] flex flex-col justify-center"
              data-testid={`chapter-${c.no}`}
            >
              <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">{c.title}</h3>
              <p className="mt-5 text-lg sm:text-xl font-medium text-cream/80 leading-relaxed">{c.line}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
