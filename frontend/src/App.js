import "@/App.css";
import { ReactLenis } from "lenis/react";
import Nav from "@/components/playtopia/Nav";
import Hero from "@/components/playtopia/Hero";
import MarketMomentum from "@/components/playtopia/MarketMomentum";
import WhatIsPlaytopia from "@/components/playtopia/WhatIsPlaytopia";
import Ribbon from "@/components/playtopia/Ribbon";
import KeyAttractions from "@/components/playtopia/KeyAttractions";
import Zones from "@/components/playtopia/Zones";
import Audience from "@/components/playtopia/Audience";
import Credibility from "@/components/playtopia/Credibility";
import FinalCTA from "@/components/playtopia/FinalCTA";

function App() {
  const smooth = typeof window !== "undefined" && !window.location.search.includes("nosmooth");
  const content = (
    <div className="App bg-cream text-ink" data-testid="playtopia-landing">
      <Nav />
      <main>
        <Hero />
        <MarketMomentum />
        <WhatIsPlaytopia />
        <Ribbon color="coral" direction="left" />
        <KeyAttractions />
        <Ribbon color="teal" direction="right" />
        <Zones />
        <Audience />
        <Credibility />
        <FinalCTA />
      </main>
    </div>
  );
  if (!smooth) return content;
  return (
    <ReactLenis root options={{ lerp: 0.09, smoothWheel: true, wheelMultiplier: 1 }}>
      {content}
    </ReactLenis>
  );
}

export default App;
