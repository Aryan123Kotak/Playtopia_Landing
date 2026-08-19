// Swap this with the real ticket site URL when available.
export const TICKET_URL = "#register";

export const EVENT = {
  name: "PLAYTOPIA",
  tagline: "Rediscover Play. Rediscover People.",
  date: "31 October 2026",
  venue: "Dhruv Global School, SUS, Pune",
};

export const IMAGES = {
  heroFlatlay:
    "https://static.prod-images.emergentagent.com/jobs/91cfc487-fda6-4415-ad0b-303dfb7e3180/images/5003bc970931b225e3177a1688304219fdd29e8e4f459bc85b5ed62c611f2a3f.jpeg",
  giantJenga:
    "https://static.prod-images.emergentagent.com/jobs/91cfc487-fda6-4415-ad0b-303dfb7e3180/images/329c6f85dc2421b67d5596759d6d2d2a57474864a1c8152e8ce7badb9790a9b5.jpeg",
  giantTwister:
    "https://static.prod-images.emergentagent.com/jobs/91cfc487-fda6-4415-ad0b-303dfb7e3180/images/6446502289ac03f37a928a8d3ddd1c50de7e204ff05ec345ecd5f851bbe343ec.jpeg",
  chess:
    "https://static.prod-images.emergentagent.com/jobs/91cfc487-fda6-4415-ad0b-303dfb7e3180/images/3028c13b9fde9a6a4133c3bd7f065706afc3b5e473331f93ea52ba870abe2641.jpeg",
  boardGames:
    "https://static.prod-images.emergentagent.com/jobs/91cfc487-fda6-4415-ad0b-303dfb7e3180/images/db234da8eb113b81c4a74d91b9b997e7528b5a84becdd327fb5eedf2c6e03925.jpeg",
  crowdNight:
    "https://static.prod-images.emergentagent.com/jobs/91cfc487-fda6-4415-ad0b-303dfb7e3180/images/2f982fb8932de18c40d9d24c12856baad8fd0835247c0f3c9ba5a91a8628ef60.jpeg",
};

export const MOMENTUM = [
  { k: "12%+", label: "Global tabletop gaming market growth, year on year.", color: "teal" },
  { k: "PUNE", label: "Home to thriving, fast-growing board game communities.", color: "amber" },
  { k: "OFFLINE", label: "Families are choosing social, in-person experiences again.", color: "lime" },
  { k: "FIRST", label: "The brands that show up now own the conversation.", color: "purple" },
];

export const CHAPTERS = [
  { no: "01", title: "Discover", zone: "Board Games Zone", line: "1000+ games, from casual to serious. Casual tables to D&D campaigns.", color: "teal" },
  { no: "02", title: "Compete", zone: "Competition Zone", line: "Life-size play, real stakes and big-stage energy all day long.", color: "coral" },
  { no: "03", title: "Connect", zone: "Sponsors Zone", line: "Exclusive showcases and premium brand experiences worth lining up for.", color: "pink" },
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
    tag: "Basketball Court",
    color: "teal",
    img: IMAGES.giantTwister,
  },
  {
    title: "Chess Competition",
    line: "Compete for a ₹10,000 prize pool. Casual to serious \u2014 all skill levels welcome.",
    tag: "₹10,000 Prize Pool",
    color: "pink",
    img: IMAGES.chess,
  },
];

export const ZONES = [
  {
    name: "Sponsors Zone",
    where: "Badminton Court",
    line: "Premium visibility. Meaningful engagement. Every path ends at your product.",
    color: "pink",
    banners: ["Play. Build. Repeat.", "Play More. Grow More.", "FunZone \u2014 Let's Play!"],
    img: IMAGES.boardGames,
  },
  {
    name: "Board Games Zone",
    where: "Mess Area (Downstairs)",
    line: "From strategy to silliness. Every game. Every kind of player.",
    color: "teal",
    banners: ["Anti-Chess", "Codenames", "UNO", "Exploding Kittens"],
    img: IMAGES.boardGames,
  },
  {
    name: "Competition Zone",
    where: "Basketball Court / Auditorium",
    line: "Life-size play. Real competition. Big energy. Bigger moments.",
    color: "coral",
    banners: ["Live-Size Jenga", "Largest Twister", "Chess \u2022 ₹10,000", "Live Leaderboard"],
    img: IMAGES.crowdNight,
  },
];

export const AUDIENCE = [
  { name: "Kids (8\u201316)", value: 40, color: "#0CB6BF" },
  { name: "Parents", value: 35, color: "#FCAE20" },
  { name: "Enthusiasts", value: 20, color: "#F22075" },
  { name: "Spillover", value: 5, color: "#90BE2E" },
];

export const FOUNDATION = [
  { k: "20+", label: "Years of institutional legacy", color: "coral" },
  { k: "2,000+", label: "Families in the Dhruv Global School community", color: "teal" },
  { k: "5,000+", label: "Expected attendance at the 2026 edition", color: "purple" },
];
