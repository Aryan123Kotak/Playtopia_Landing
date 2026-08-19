import React from "react";
import logoUrl from "@/assets/playtopia-logo.png";

export const HEX = {
  teal: "#0CB6BF",
  amber: "#FCAE20",
  coral: "#FC5C54",
  pink: "#F22075",
  lime: "#90BE2E",
  purple: "#7B52B3",
  ink: "#141414",
  cream: "#F7F4EC",
};

/* Decorative geometric shapes (Memphis / brand visual language) */
export const Shape = ({ type = "triangle", color = "pink", size = 80, className = "", style = {}, stroke = false }) => {
  const c = HEX[color] || color;
  const common = { width: size, height: size, viewBox: "0 0 100 100", className, style, "aria-hidden": true };
  switch (type) {
    case "triangle":
      return (<svg {...common}><polygon points="50,4 96,96 4,96" fill={stroke ? "none" : c} stroke={c} strokeWidth={stroke ? 10 : 0} strokeLinejoin="round" /></svg>);
    case "circle":
      return (<svg {...common}><circle cx="50" cy="50" r="46" fill={stroke ? "none" : c} stroke={c} strokeWidth={stroke ? 10 : 0} /></svg>);
    case "ring":
      return (<svg {...common}><circle cx="50" cy="50" r="40" fill="none" stroke={c} strokeWidth="14" /></svg>);
    case "arch":
      return (<svg {...common} viewBox="0 0 100 55"><path d="M2 53 A48 48 0 0 1 98 53 Z" fill={c} /></svg>);
    case "wave":
      return (<svg {...common} viewBox="0 0 120 24"><path d="M2 12 Q 17 -3 32 12 T 62 12 T 92 12 T 122 12" fill="none" stroke={c} strokeWidth="7" strokeLinecap="round" /></svg>);
    case "star":
      return (<svg {...common}><path d="M50 2 C56 40 60 44 98 50 C60 56 56 60 50 98 C44 60 40 56 2 50 C40 44 44 40 50 2 Z" fill={c} /></svg>);
    case "plus":
      return (<svg {...common}><path d="M38 6 H62 V38 H94 V62 H62 V94 H38 V62 H6 V38 H38 Z" fill={c} /></svg>);
    case "quarter":
      return (<svg {...common}><path d="M100 100 A100 100 0 0 0 0 100 Z" fill={c} /></svg>);
    default:
      return null;
  }
};

/* Neo-brutalist pill button */
export const PlayButton = ({ children, href, color = "pink", light = false, className = "", testid, onClick }) => {
  const bg = HEX[color];
  const isLightText = color === "teal" || color === "amber" || color === "lime";
  const textColor = isLightText ? HEX.ink : "#fff";
  return (
    <a
      href={href}
      onClick={onClick}
      data-testid={testid}
      className={`group inline-flex items-center gap-3 rounded-full border-[3px] border-ink px-7 py-3.5 text-sm sm:text-base font-extrabold uppercase tracking-wide shadow-[6px_6px_0px_0px_#141414] hover:shadow-[2px_2px_0px_0px_#141414] hover:translate-x-[4px] hover:translate-y-[4px] transition-[transform,box-shadow] duration-150 will-change-transform ${className}`}
      style={{ backgroundColor: bg, color: textColor }}
    >
      {children}
    </a>
  );
};

/* Eyebrow label */
export const Eyebrow = ({ children, color = "pink", className = "" }) => (
  <div className={`inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] ${className}`} style={{ color: HEX[color] }}>
    <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: HEX[color] }} />
    {children}
  </div>
);

/* Official PLAYTOPIA logo (exact brand asset). Size via className (height or width). */
export const Logo = ({ className = "h-8" }) => (
  <img
    src={logoUrl}
    alt="PLAYTOPIA"
    draggable="false"
    data-testid="playtopia-logo"
    className={`object-contain select-none ${className}`}
  />
);

export const PlaytopiaMark = Logo;
