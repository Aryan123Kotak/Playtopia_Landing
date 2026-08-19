import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Ticket } from "lucide-react";
import { Logo, PlayButton } from "./primitives";
import { TICKET_URL } from "@/data/content";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "The Zones", href: "#zones" },
  { label: "Attractions", href: "#attractions" },
  { label: "Communities", href: "#communities" },
  { label: "Event Details", href: "#event-details" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 border-b-[3px] border-ink transition-colors duration-300 ${scrolled ? "bg-cream/95 backdrop-blur" : "bg-cream"}`}
      data-testid="main-nav"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 py-3.5">
        <a href="#top" data-testid="nav-logo-link"><Logo className="h-7 sm:h-9" /></a>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} data-testid={`nav-link-${l.label.toLowerCase()}`} className="text-sm font-bold uppercase tracking-wide text-ink/80 hover:text-pink transition-colors duration-150">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <PlayButton href={TICKET_URL} color="pink" testid="nav-register-btn" className="!px-5 !py-2.5 hidden sm:inline-flex">
            <Ticket className="h-4 w-4" /> Register Now
          </PlayButton>
          <button onClick={() => setOpen((o) => !o)} data-testid="mobile-menu-toggle" className="lg:hidden grid place-items-center h-10 w-10 rounded-full border-[3px] border-ink bg-amber" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden overflow-hidden border-t-2 border-ink bg-cream" data-testid="mobile-menu">
            <div className="flex flex-col px-5 py-4 gap-1">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-base font-bold uppercase tracking-wide">{l.label}</a>
              ))}
              <PlayButton href={TICKET_URL} color="pink" testid="mobile-register-btn" className="mt-3 justify-center">
                <Ticket className="h-4 w-4" /> Register Now
              </PlayButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
