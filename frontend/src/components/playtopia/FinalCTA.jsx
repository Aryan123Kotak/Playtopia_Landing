import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Ticket } from "lucide-react";
import { Logo, PlayButton, Shape } from "./primitives";
import { EVENT, TICKET_URL } from "@/data/content";

const CONFETTI = [
  { t: "triangle", c: "pink", top: "12%", left: "8%", s: 44 },
  { t: "star", c: "amber", top: "22%", left: "82%", s: 50 },
  { t: "circle", c: "teal", top: "68%", left: "6%", s: 40 },
  { t: "plus", c: "lime", top: "72%", left: "88%", s: 46 },
  { t: "ring", c: "purple", top: "8%", left: "50%", s: 52 },
  { t: "wave", c: "coral", top: "82%", left: "44%", s: 90 },
];

export default function FinalCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="register" ref={ref} className="relative overflow-hidden py-28 sm:py-40 scroll-mt-20" data-testid="final-cta-section">
      {CONFETTI.map((s, i) => (
        <motion.div key={i} style={{ y, top: s.top, left: s.left }} className="pointer-events-none absolute animate-floaty" data-el="confetti">
          <Shape type={s.t} color={s.c} size={s.s} />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.88]">
          Great Festivals Aren't <span className="text-coral">Built Overnight.</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl font-medium text-ink/75">
          They're built by the people who choose to show up before everyone else. We'll remember our founding players. So will your friends.
        </motion.p>

        <div className="mt-10 flex flex-col items-center gap-6">
          <Logo className="h-14 sm:h-20" />
          <PlayButton href={TICKET_URL} color="pink" testid="final-register-btn" className="!text-base sm:!text-lg !px-9 !py-4"><Ticket className="h-5 w-5" /> Register Here</PlayButton>
          <div className="text-sm font-bold uppercase tracking-wide text-ink/70">{EVENT.date} • {EVENT.venue}</div>
        </div>
      </div>

      <footer className="relative z-10 mt-24 border-t-[3px] border-ink" data-testid="footer">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 px-5 sm:px-8 pt-8">
          <Logo className="h-8" />
          <p className="text-sm font-semibold text-ink/70">{EVENT.tagline}</p>
          <p className="text-xs font-bold uppercase tracking-wide text-ink/60">© 2026 Playtopia • Pune</p>
        </div>
      </footer>
    </section>
  );
}
