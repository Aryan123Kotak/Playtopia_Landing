import React from "react";
import { motion } from "framer-motion";
import { MapPin, CalendarDays, Clock, Car, ExternalLink, Ticket } from "lucide-react";
import { Eyebrow, HEX, Shape, PlayButton } from "./primitives";
import { FOUNDATION, EVENT, TICKET_URL } from "@/data/content";

export default function EventInfo() {
  return (
    <section id="event-details" className="relative py-24 sm:py-32 border-t-[3px] border-ink bg-ink text-cream overflow-hidden" data-testid="event-info-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* While You're Here */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow color="lime">While You're Here</Eyebrow>
            <h2 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Come for Playtopia. <span className="text-amber">Make an Evening of It.</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg font-medium text-cream/70">
              Playtopia is happening alongside the annual <span className="font-black text-cream">Dhruv Diwali Mela 2026</span> at Dhruv Global School.
            </p>
            <p className="mt-4 max-w-lg text-base font-medium text-cream/70">
              So there's even more to explore — from food and fair games to activities for kids and families.
            </p>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[2rem] rounded-tr-[6rem] border-[4px] border-cream shadow-[10px_10px_0px_0px_rgba(12,182,191,1)]"
            >
              <div className="bg-gradient-to-br from-amber/20 via-coral/10 to-pink/20 p-10 sm:p-14">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-cream/60 mb-4">Save the Date</div>
                <div className="text-5xl sm:text-6xl font-black tracking-tighter leading-[0.9]">31</div>
                <div className="text-2xl sm:text-3xl font-black uppercase tracking-tight">October 2026</div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-base font-semibold">
                    <Clock className="h-5 w-5 text-amber" /> {EVENT.time}
                  </div>
                  <div className="flex items-center gap-3 text-base font-semibold">
                    <MapPin className="h-5 w-5 text-coral" /> {EVENT.venue}
                  </div>
                  <div className="flex items-center gap-3 text-base font-semibold">
                    <Car className="h-5 w-5 text-lime" /> Parking available on site
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <PlayButton href={TICKET_URL} color="pink" testid="event-register-btn">
                    <Ticket className="h-5 w-5" /> Register Now
                  </PlayButton>
                </div>
              </div>
            </motion.div>
            <div className="absolute -bottom-5 -left-4 animate-floaty"><Shape type="star" color="amber" size={56} /></div>
          </div>
        </div>

        {/* Foundation Stats */}
        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {FOUNDATION.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-3xl border-[3px] border-cream/25 p-8" data-testid={`foundation-stat-${i}`}>
              <div className="text-5xl sm:text-6xl font-black tracking-tighter" style={{ color: HEX[f.color] }}>{f.k}</div>
              <p className="mt-3 text-base font-semibold text-cream/70 leading-snug">{f.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
