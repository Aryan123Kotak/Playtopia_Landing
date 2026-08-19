export const TICKET_URL = "#register";

export const EVENT = {
  name: "PLAYTOPIA",
  tagline: "Rediscover Play. Rediscover People.",
  date: "31 October 2026",
  time: "4 PM — 10 PM",
  venue: "Dhruv Global School, Nande, Pune",
};

export const IMAGES = {
  heroFlatlay:
    "https://static.prod-images.emergentagent.com/jobs/91cfc487-fda6-4415-ad0b-303dfb7e3180/images/5003bc970931b225e3177a1688304219fdd29e8e4f459bc85b5ed62c611f2a3f.jpeg",
  giantJenga: "/Jenga.png",
  giantTwister: "/Twistter.png",
  chess: "/Chess.png",
  experienceZone: "/Experience Zone.png",
  boardGames:
    "https://static.prod-images.emergentagent.com/jobs/91cfc487-fda6-4415-ad0b-303dfb7e3180/images/db234da8eb113b81c4a74d91b9b997e7528b5a84becdd327fb5eedf2c6e03925.jpeg",
  crowdNight:
    "https://static.prod-images.emergentagent.com/jobs/91cfc487-fda6-4415-ad0b-303dfb7e3180/images/2f982fb8932de18c40d9d24c12856baad6fd0835247c0f3c9ba5a91a8628ef60.jpeg",
};

export const CHAPTERS = [
  { no: "01", title: "Discover", zone: "Board Games Zone", line: "From strategy to silliness. Find a game, pull up a chair and play.", color: "teal" },
  { no: "02", title: "Compete", zone: "Competition Zone", line: "Big games. Real challenges. Bragging rights up for grabs.", color: "coral" },
  { no: "03", title: "Experience", zone: "Experience Zone", line: "Interactive experiences. Brand activations. New ways to play.", color: "pink" },
];

export const ATTRACTIONS = [
  {
    title: "Live-Size Jenga",
    line: "Giant Jenga, stacked to the ceiling. One wrong move and it's all coming down.",
    tag: "Competition Zone",
    color: "amber",
    img: IMAGES.giantJenga,
  },
  {
    title: "India's Largest Twister",
    line: "Go big or go home. Play India's largest Twister mat, live at Playtopia.",
    tag: "Competition Zone",
    color: "teal",
    img: IMAGES.giantTwister,
  },
  {
    title: "Chess Competition",
    line: "Compete for a ₹10,000 prize pool. Casual to serious — all skill levels welcome.",
    tag: "₹10,000 Prize Pool",
    color: "pink",
    img: IMAGES.chess,
  },
];

export const ZONES = [
  {
    name: "Board Games Zone",
    where: "Mess Area (Downstairs)",
    line: "Find a game, pull up a chair and play. Explore everything from familiar favourites to games you've never played before.",
    color: "teal",
    banners: ["Strategy", "Party Games", "Casual Tables", "D&D Campaigns"],
    img: IMAGES.boardGames,
  },
  {
    name: "Competition Zone",
    where: "Basketball Court / Auditorium",
    line: "Take on challenges, go head-to-head and put your skills — and your friendships — to the test.",
    color: "coral",
    banners: ["Live-Size Jenga", "Largest Twister", "Chess • ₹10,000", "Live Leaderboard"],
    img: IMAGES.crowdNight,
  },
  {
    name: "Experience Zone",
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
  { k: "1000+", label: "Games — from familiar favourites to ones you've never tried.", color: "amber" },
  { k: "ALL", label: "Skill levels welcome — seasoned players and first-timers alike.", color: "lime" },
  { k: "ONE", label: "Roof. One evening. Countless ways to connect and play.", color: "purple" },
];

export const FOUNDATION = [
  { k: "20+", label: "Years of institutional legacy", color: "coral" },
  { k: "2,000+", label: "Families in the Dhruv Global School community", color: "teal" },
  { k: "5,000+", label: "Expected attendance at the 2026 edition", color: "purple" },
];
