export const TICKET_URL = "https://www.game-plan.co/userapp/tournaments/playtopia-rediscover-play-rediscover-people";

export const EVENT = {
  name: "PLAYTOPIA",
  tagline: "Rediscover Play. Rediscover People.",
  date: "31 October 2026",
  time: "4 PM — 10 PM",
  venue: "Dhruv Global School, Nande, Pune",
};

export const IMAGES = {
  heroFlatlay: "/Hero Banner.png",
  giantJenga: "/Jenga.png",
  giantTwister: "/Twistter.png",
  chess: "/Chess.png",
  experienceZone: "/SPONSER'S ZONE.png",
  competitionZone: "/ACTIVITY ZONE.png",
  boardGames: "/BOARD GAME ZONE.png",
};

export const CHAPTERS = [
  { no: "01", title: "Discover", zone: "Board Games Zone", line: "From strategy to silliness. Find a game, pull up a chair and play.", color: "teal" },
  { no: "02", title: "Compete", zone: "Activity Zone", line: "Big games. Real challenges. Bragging rights up for grabs.", color: "coral" },
  { no: "03", title: "Experience", zone: "Sponsors Zone", line: "Interactive experiences. Brand activations. New ways to play.", color: "pink" },
];

export const ATTRACTIONS = [
  {
    title: "Life-Size Jenga",
    line: "Giant Jenga, stacked to the ceiling. One wrong move and it's all coming down.",
    tag: "Activity Zone",
    color: "amber",
    img: IMAGES.giantJenga,
  },
  {
    title: "India's Largest Twister",
    line: "Go big or go home. Play India's largest Twister mat, live at Playtopia.",
    tag: "Activity Zone",
    color: "teal",
    img: IMAGES.giantTwister,
  },
  {
    title: "Chess Competition",
    line: "Compete for a ₹18,000 prize pool. Casual to serious — all skill levels welcome.",
    tag: "₹18,000 Prize Pool",
    color: "pink",
    img: IMAGES.chess,
  },
];

export const EXTRAS = [
  { title: "F1 Simulator", line: "Feel the speed. Experience a full-throttle F1 simulator, live at the festival.", color: "coral", emoji: "🏎️" },
  { title: "Exclusive Board Games", line: "Play iconic titles like Catan, Game of Thrones and more — games you won't find at your regular game night.", color: "teal", emoji: "🎯" },
  { title: "Amusement Passes", line: "Amusement passes. Play doesn't stop when the festival does.", color: "amber", emoji: "🎡" },
  { title: "Free Merchandise for Every Kid", line: "No one goes home empty-handed! Every kid gets free merch to take home.", color: "pink", emoji: "🎁" },
];

export const ZONES = [
  {
    name: "Activity Zone",
    where: "Basketball Court / Auditorium",
    line: "Take on challenges, go head-to-head and put your skills — and your friendships — to the test.",
    color: "coral",
    banners: ["Life-Size Jenga", "Largest Twister", "Chess • ₹18,000", "Live Leaderboard"],
    img: IMAGES.competitionZone,
  },
  {
    name: "Board Games Zone",
    where: "Mess Area (Downstairs)",
    line: "Find a game, pull up a chair and play. Explore everything from familiar favourites to games you've never played before.",
    color: "teal",
    banners: ["Strategy", "Party Games", "Casual Tables", "D&D Campaigns"],
    img: IMAGES.boardGames,
  },
  {
    name: "Sponsors Zone",
    where: "Badminton Court",
    line: "Explore, compete, discover and get involved beyond the game table.",
    color: "pink",
    banners: ["Brand Activations", "Interactive Stations", "New Discoveries", "Surprises"],
    img: IMAGES.experienceZone,
  },
];

export const PERSONAS = [
  { name: "The Strategist", line: "Already thinking three moves ahead.", color: "teal", emoji: "♟" },
  { name: "The Competitor", line: "Doesn't care what the prize is. They just need to win.", color: "coral", emoji: "🏆" },
  { name: "The Casual", line: "“I don't really play board games.” One game later: “Okay, one more.”", color: "amber", emoji: "🎲" },
  { name: "The Family", line: "A little board gaming. A little Diwali. A very full evening.", color: "pink", emoji: "👨‍👩‍👧‍👦" },
  { name: "The Curious", line: "Came to see what all the fuss was about. Left with a new favourite game.", color: "lime", emoji: "🔍" },
];

export const COMMUNITIES = [
  { k: "PUNE", label: "Board-game communities come together under one roof.", color: "teal" },
  { k: "1000s", label: "Games — from familiar favourites to ones you've never tried.", color: "amber" },
  { k: "ALL", label: "Skill levels welcome — seasoned players and first-timers alike.", color: "lime" },
  { k: "ONE", label: "Roof. One evening. Countless ways to connect and play.", color: "purple" },
];

export const FOUNDATION = [
  { k: "20+", label: "Years of institutional legacy", color: "coral" },
  { k: "2,000+", label: "Families in the Dhruv Global School community", color: "teal" },
  { k: "5,000+", label: "Expected attendance at the 2026 edition", color: "purple" },
];
