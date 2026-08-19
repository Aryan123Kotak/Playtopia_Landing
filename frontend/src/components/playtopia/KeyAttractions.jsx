import React from "react";
import { motion } from "framer-motion";
import { Ticket } from "lucide-react";
import { Eyebrow, PlayButton, HEX, Shape } from "./primitives";
import { ATTRACTIONS, TICKET_URL } from "@/data/content";

export default function KeyAttractions() {
  return (
    <section id="attractions" className="relative py-24 sm:py-32 overflow-hidden" data-testid="attractions-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow color="coral">Key Attractions</Eyebrow>
            <h2 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Big Games. <span className="text-pink">Bigger</span> Bragging Rights.
            </h2>
          </div>
          <PlayButton href={TICKET_URL} color="coral" testid="attractions-register-btn"><Ticket className="h-5 w-5" /> Register Here</PlayButton>
        </div>

        <div className="mt-16 space-y-8">
          {ATTRACTIONS.map((a, i) => {
            const flip = i % 2 === 1;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid items-center gap-8 lg:grid-cols-2 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
                data-testid={`attraction-${i}`}
              >
                <div className="relative">
                  <div className={`relative overflow-hidden border-[4px] border-ink shadow-[10px_10px_0px_0px_#141414] ${flip ? "rounded-[2rem] rounded-bl-[6rem]" : "rounded-[2rem] rounded-tr-[6rem]"}`}>
                    <img src={a.img} alt={a.title} className="h-[300px] sm:h-[420px] w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 mix-blend-multiply opacity-15" style={{ backgroundColor: HEX[a.color] }} />
                  </div>
                  <div className="absolute -top-5 -left-4 animate-floaty"><Shape type={["star","triangle","plus"][i]} color={a.color} size={56} /></div>
                </div>

                <div className={`${flip ? "lg:pr-10" : "lg:pl-10"}`}>
                  <div className="inline-flex rounded-full border-2 border-ink px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em]" style={{ backgroundColor: HEX[a.color], color: a.color === "pink" || a.color === "coral" || a.color === "purple" ? "#fff" : "#141414" }}>
                    {a.tag}
                  </div>
                  <h3 className="mt-5 text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-[0.9]">{a.title}</h3>
                  <p className="mt-5 max-w-md text-lg sm:text-xl font-medium text-ink/75">{a.line}</p>
                  <div className="mt-6 text-8xl font-black tracking-tighter text-ink/10 select-none leading-none">0{i + 1}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
