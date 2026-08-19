import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Eyebrow, HEX, Shape } from "./primitives";
import { ZONES } from "@/data/content";

export default function Zones() {
  return (
    <section id="zones" className="relative py-24 sm:py-32 border-y-[3px] border-ink" style={{ backgroundColor: "#EFE9DA" }} data-testid="zones-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Eyebrow color="purple">The Three Zones</Eyebrow>
          <h2 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            Three worlds. <span className="text-purple">One festival.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {ZONES.map((z, i) => (
            <motion.div
              key={z.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border-[3px] border-ink bg-cream shadow-[6px_6px_0px_0px_#141414] hover:shadow-[2px_2px_0px_0px_#141414] hover:translate-x-[4px] hover:translate-y-[4px] transition-[transform,box-shadow] duration-200"
              data-testid={`zone-card-${i}`}
            >
              <div className="relative h-52 overflow-hidden border-b-[3px] border-ink">
                <img src={z.img} alt={z.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 mix-blend-multiply opacity-25" style={{ backgroundColor: HEX[z.color] }} />
                <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full border-[3px] border-ink text-lg font-black" style={{ backgroundColor: HEX[z.color], color: "#fff" }}>{i + 1}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">{z.name}</h3>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em]" style={{ color: HEX[z.color] }}>
                  <MapPin className="h-4 w-4" /> {z.where}
                </div>
                <p className="mt-4 text-base font-medium text-ink/75 leading-snug">{z.line}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {z.banners.map((b) => (
                    <span key={b} className="rounded-full border-2 border-ink bg-cream px-3 py-1 text-xs font-bold">{b}</span>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 opacity-90"><Shape type={["triangle","star","plus"][i]} color={z.color} size={54} /></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
