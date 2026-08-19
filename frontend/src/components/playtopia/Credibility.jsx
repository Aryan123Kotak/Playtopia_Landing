import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Phone, User } from "lucide-react";
import { Eyebrow, HEX, Shape } from "./primitives";
import { FOUNDATION, IMAGES } from "@/data/content";

const CHECKS = ["Game design leadership", "Established community partnerships", "Expert event management"];

export default function Credibility() {
  return (
    <section id="credibility" className="relative py-24 sm:py-32 border-t-[3px] border-ink bg-ink text-cream overflow-hidden" data-testid="credibility-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow color="lime">Credibility</Eyebrow>
            <h2 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">The Foundation</h2>
            <p className="mt-5 max-w-lg text-lg font-medium text-cream/70">
              Strong institutions. Proven experiences. Expert execution. Community at the core — backed by <span className="font-black text-cream">Dhruv Global School</span>.
            </p>
            <ul className="mt-7 space-y-3">
              {CHECKS.map((c) => (
                <li key={c} className="flex items-center gap-3 text-base font-semibold"><CheckCircle2 className="h-5 w-5 text-lime" /> {c}</li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] rounded-tr-[6rem] border-[4px] border-cream shadow-[10px_10px_0px_0px_rgba(12,182,191,1)]">
              <img src={IMAGES.crowdNight} alt="Festival crowd at night" className="h-[300px] sm:h-[400px] w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-5 -left-4 animate-floaty"><Shape type="star" color="amber" size={56} /></div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {FOUNDATION.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-3xl border-[3px] border-cream/25 p-8" data-testid={`foundation-stat-${i}`}>
              <div className="text-5xl sm:text-6xl font-black tracking-tighter" style={{ color: HEX[f.color] }}>{f.k}</div>
              <p className="mt-3 text-base font-semibold text-cream/70 leading-snug">{f.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Sponsor Us */}
        <div id="sponsor" className="mt-16 scroll-mt-24" data-testid="sponsor-section">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-[2rem] border-[3px] border-ink bg-pink p-8 sm:p-12 text-ink shadow-[10px_10px_0px_0px_rgba(247,244,236,1)]">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <Eyebrow color="ink">Sponsor Us</Eyebrow>
                <h3 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-[0.95] text-cream">Want to bring your brand to Playtopia?</h3>
                <p className="mt-4 max-w-lg text-base sm:text-lg font-semibold text-cream/90">Get in touch to explore sponsorship and partnership opportunities. Founding partners get remembered — by us, and by your customers.</p>
              </div>
              <div className="space-y-3">
                {[{ Icon: User, t: "Contact Person", v: "To be announced" }, { Icon: Phone, t: "Phone / WhatsApp", v: "+91 \u2014 XXXXX XXXXX" }, { Icon: Mail, t: "Email", v: "partners@playtopia.in" }].map((c) => (
                  <div key={c.t} className="flex items-center gap-4 rounded-2xl border-2 border-ink bg-cream px-4 py-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-pink text-cream"><c.Icon className="h-5 w-5" /></span>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-ink/60">{c.t}</div>
                      <div className="text-base font-extrabold">{c.v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute -top-8 -right-8 opacity-90"><Shape type="ring" color="amber" size={100} /></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
