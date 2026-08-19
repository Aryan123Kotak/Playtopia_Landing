import React from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Eyebrow, HEX } from "./primitives";
import { AUDIENCE } from "@/data/content";

export default function Audience() {
  return (
    <section id="audience" className="relative py-24 sm:py-32 overflow-hidden" data-testid="audience-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Eyebrow color="teal">The Audience</Eyebrow>
          <h2 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            3,000+ Buyers.<br /><span className="text-pink">Perfectly Segmented.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg sm:text-xl font-medium text-ink/75">
            Premium Pune neighborhoods. Upper-middle class. High intent. <span className="font-black text-ink">67% plan to purchase during Diwali.</span>
          </p>

          <div className="mt-8 space-y-3">
            {AUDIENCE.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4"
                data-testid={`audience-legend-${i}`}
              >
                <span className="h-5 w-5 rounded-md border-2 border-ink" style={{ backgroundColor: a.color }} />
                <span className="w-40 text-base font-bold uppercase tracking-wide">{a.name}</span>
                <div className="relative h-4 flex-1 rounded-full border-2 border-ink bg-cream overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${a.value}%` }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 + i * 0.08, ease: "easeOut" }} className="h-full" style={{ backgroundColor: a.color }} />
                </div>
                <span className="w-12 text-right text-lg font-black">{a.value}%</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative mx-auto w-full max-w-md" data-testid="audience-donut">
          <div className="relative rounded-[2.5rem] border-[4px] border-ink bg-cream p-6 shadow-[10px_10px_0px_0px_#141414]">
            <div className="relative h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={AUDIENCE} dataKey="value" nameKey="name" innerRadius="58%" outerRadius="92%" startAngle={90} endAngle={-270} stroke="#141414" strokeWidth={3} paddingAngle={2}>
                    {AUDIENCE.map((a) => <Cell key={a.name} fill={a.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="pointer-events-none absolute inset-0 grid place-items-center text-center">
                <div>
                  <div className="text-5xl font-black tracking-tighter">3K+</div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-ink/70">Attendees</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
