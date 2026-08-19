import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { CalendarDays, MapPin, Clock, ArrowDown, Ticket } from "lucide-react";
import { Shape, PlayButton, PlaytopiaMark } from "./primitives";
import { EVENT, IMAGES, TICKET_URL } from "@/data/content";

const Line = ({ children, className = "" }) => (
  <span className={`block ${className}`}>{children}</span>
);

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 50, damping: 18, mass: 0.4 });
  const smy = useSpring(my, { stiffness: 50, damping: 18, mass: 0.4 });

  const g1x = useTransform(smx, [-0.5, 0.5], [-40, 40]);
  const g1y = useTransform(smy, [-0.5, 0.5], [-30, 30]);
  const g2x = useTransform(smx, [-0.5, 0.5], [30, -30]);
  const g2y = useTransform(smy, [-0.5, 0.5], [20, -20]);
  const g3x = useTransform(smx, [-0.5, 0.5], [-20, 20]);
  const g3y = useTransform(smy, [-0.5, 0.5], [30, -30]);
  const s1x = useTransform(smx, [-0.5, 0.5], [-55, 55]);
  const s1y = useTransform(smy, [-0.5, 0.5], [-40, 40]);
  const s2x = useTransform(smx, [-0.5, 0.5], [45, -45]);
  const s2y = useTransform(smy, [-0.5, 0.5], [35, -35]);
  const s3x = useTransform(smx, [-0.5, 0.5], [-35, 35]);
  const s3y = useTransform(smy, [-0.5, 0.5], [30, -30]);
  const s4x = useTransform(smx, [-0.5, 0.5], [40, -40]);
  const s4y = useTransform(smy, [-0.5, 0.5], [-30, 30]);
  const imgX = useTransform(smx, [-0.5, 0.5], [18, -18]);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section id="top" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="relative min-h-[100svh] overflow-hidden pt-28 sm:pt-32 pb-20" data-testid="hero-section">
      <motion.div style={{ x: g1x, y: g1y }} className="pointer-events-none absolute -left-24 top-24 h-[26rem] w-[26rem] rounded-full bg-teal/30 blur-[90px]" />
      <motion.div style={{ x: g2x, y: g2y }} className="pointer-events-none absolute right-0 top-8 h-[24rem] w-[24rem] rounded-full bg-pink/25 blur-[90px]" />
      <motion.div style={{ x: g3x, y: g3y }} className="pointer-events-none absolute left-1/3 bottom-0 h-[22rem] w-[22rem] rounded-full bg-amber/30 blur-[90px]" />

      <div className="pointer-events-none absolute top-0 left-0 h-0 w-0 border-t-[130px] border-r-[130px] border-t-pink border-r-transparent" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-teal" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-tr-full bg-amber" />

      <motion.div style={{ y: yFast }} className="pointer-events-none absolute left-[6%] top-[26%]"><motion.div style={{ x: s1x, y: s1y }} className="animate-floaty"><Shape type="star" color="pink" size={54} /></motion.div></motion.div>
      <motion.div style={{ y: ySlow }} className="pointer-events-none absolute right-[9%] top-[28%]"><motion.div style={{ x: s2x, y: s2y }} className="animate-spinslow"><Shape type="ring" color="purple" size={72} /></motion.div></motion.div>
      <motion.div style={{ y: yFast }} className="pointer-events-none absolute right-[24%] bottom-[20%]"><motion.div style={{ x: s3x, y: s3y }} className="animate-floaty"><Shape type="triangle" color="lime" size={46} /></motion.div></motion.div>
      <motion.div style={{ y: ySlow }} className="pointer-events-none absolute left-[13%] bottom-[15%]"><motion.div style={{ x: s4x, y: s4y }}><Shape type="wave" color="coral" size={92} /></motion.div></motion.div>

      <motion.div style={{ opacity: heroOpacity }} className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-lime px-4 py-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em]">
            India's First Board Game Festival
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="w-full">
            <PlaytopiaMark className="w-[90vw] max-w-[560px] lg:max-w-[720px] drop-shadow-[0_10px_30px_rgba(20,20,20,0.12)]" />
          </motion.div>

          <div className="mt-10 max-w-xl text-2xl sm:text-4xl font-bold tracking-tight leading-snug">
            <Line>India's First Board Game Festival</Line>
            <Line className="text-pink">Rolls Into Pune.</Line>
          </div>

          <motion.div initial={false} className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm sm:text-base font-bold uppercase tracking-wide">
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-5 w-5 text-teal" /> {EVENT.date}</span>
            <span className="h-4 w-[2px] bg-ink hidden sm:block" />
            <span className="inline-flex items-center gap-2"><Clock className="h-5 w-5 text-amber" /> {EVENT.time}</span>
            <span className="h-4 w-[2px] bg-ink hidden sm:block" />
            <span className="inline-flex items-center gap-2"><MapPin className="h-5 w-5 text-coral" /> Dhruv Global School, Nande</span>
          </motion.div>

          <motion.div initial={false} className="mt-8 flex flex-wrap items-center gap-4">
            <PlayButton href={TICKET_URL} color="pink" testid="hero-register-btn"><Ticket className="h-5 w-5" /> Register Now</PlayButton>
            <a href="#about" data-testid="hero-scroll-link" className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide">
              <span className="grid place-items-center h-11 w-11 rounded-full border-[3px] border-ink bg-cream animate-bounce"><ArrowDown className="h-5 w-5" /></span>
              Scroll to explore
            </a>
          </motion.div>
        </div>

        <motion.div style={{ y: yImg, x: imgX }} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative rounded-[2rem] rounded-tr-[7rem] border-[4px] border-ink bg-white shadow-[10px_10px_0px_0px_#141414] overflow-hidden">
            <img src={IMAGES.heroFlatlay} alt="Board game festival flat lay" className="h-[340px] sm:h-[440px] w-full object-cover" loading="eager" />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl border-[3px] border-ink bg-teal px-5 py-3 shadow-[6px_6px_0px_0px_#141414] rotate-[-4deg]">
            <div className="text-2xl font-black leading-none">1000+</div>
            <div className="text-[11px] font-bold uppercase tracking-wide">Games in play</div>
          </div>
          <div className="absolute -top-5 -right-3 animate-floaty"><Shape type="plus" color="amber" size={48} /></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
