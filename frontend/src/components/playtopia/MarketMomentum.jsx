import React from "react";
import { motion } from "framer-motion";
import { Users, Gamepad2, Star, Heart } from "lucide-react";
import { Eyebrow, Shape } from "./primitives";
import { COMMUNITIES } from "@/data/content";

const ICONS = [Users, Gamepad2, Star, Heart];
const SPAN = ["sm:col-span-3", "sm:col-span-3", "sm:col-span-3", "sm:col-span-3"];

export default function Communities() {
  return (
    <section id="communities" className="relative py-24 sm:py-32" data-testid="communities-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Eyebrow color="pink">The Communities</Eyebrow>
          <h2 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            Good Games. <span className="text-coral">Great</span> <span className="text-teal">People.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl font-medium text-ink/75">
            Pune's board-game communities come together under one roof — bringing their favourite games, expertise and, inevitably, some very strong opinions about the rules.
          </p>
          <p className="mt-4 max-w-2xl text-base sm:text-lg font-medium text-ink/70">
            Whether you're a seasoned player, a casual gamer or someone who has never played beyond Monopoly, there's a table waiting for you.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-12 gap-5">
          {COMMUNITIES.map((m, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`${SPAN[i]} relative overflow-hidden rounded-3xl border-[3px] border-ink p-7 shadow-[6px_6px_0px_0px_#141414]`}
                style={{ backgroundColor: hex(m.color) }}
                data-testid={`community-card-${i}`}
              >
                <div className="relative z-10">
                  <span className="grid place-items-center h-12 w-12 rounded-full border-[3px] border-ink bg-cream mb-6"><Icon className="h-6 w-6" /></span>
                  <div className="text-4xl sm:text-5xl font-black tracking-tighter">{m.k}</div>
                  <p className="mt-3 text-sm sm:text-base font-semibold leading-snug max-w-[22ch]">{m.label}</p>
                </div>
                <div className="absolute -bottom-4 -right-4 opacity-90"><Shape type={["circle","triangle","plus","star"][i]} color="cream" size={64} /></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function hex(name) {
  const map = { teal: "#0CB6BF", amber: "#FCAE20", coral: "#FC5C54", pink: "#F22075", lime: "#90BE2E", purple: "#7B52B3", cream: "#F7F4EC" };
  return map[name] || name;
}
