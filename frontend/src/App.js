import "@/App.css";
import { ReactLenis } from "lenis/react";
import Nav from "@/components/playtopia/Nav";
import Hero from "@/components/playtopia/Hero";
import WhatIsPlaytopia from "@/components/playtopia/WhatIsPlaytopia";
import Ribbon from "@/components/playtopia/Ribbon";
import Zones from "@/components/playtopia/Zones";
import KeyAttractions from "@/components/playtopia/KeyAttractions";
import Extras from "@/components/playtopia/Extras";
import Communities from "@/components/playtopia/MarketMomentum";
import WhoIsItFor from "@/components/playtopia/Audience";
import EventInfo from "@/components/playtopia/Credibility";
import FinalCTA from "@/components/playtopia/FinalCTA";

function App() {
  const smooth = typeof window !== "undefined" && !window.location.search.includes("nosmooth");
  const content = (
    <div className="App bg-cream text-ink" data-testid="playtopia-landing">
      <Nav />
      <main>
        <Hero />
        <WhatIsPlaytopia />
        <Ribbon color="coral" direction="left" />
        <Zones />
        <KeyAttractions />
        <Extras />
        <Ribbon color="teal" direction="right" />
        <Communities />
        <WhoIsItFor />
        <EventInfo />
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
