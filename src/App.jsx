
import "./App.css";
import NeonSnake from "./NeonSnake";
import JungleRunner from "./JungleRunner";
import { useMemo, useState, useEffect } from "react";
const games = [
   {
  id: 1,
  title: "Snake Slither.io Italian Brainrot",
  genre: "Snake",
  category: "Arcade",
  icon: "🐍",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "Meme",
  image: "https://static.playgama.com/p-img/pg/backfill/game-116706/icon/cf1fc230fcfad36163797b69beece4008208ac530d4d7dccd6f9600b24e5a4e4?width=448",
  link: "https://playgama.com/export/game/snake-slitherio-italian-brainrot?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Grow your snake, collect orbs, and dodge other snakes in a chaotic Italian brainrot meme arena. Mouse controls."
  },
{
  id: 2,
  title: "Deadly Descent",
  genre: "Racing",
  category: "Racing",
  icon: "🚗",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "Driving",
  image: "https://static.playgama.com/p-img/pg/backfill/game-44/icon/46bc7f6a80a55b33244d81f0f6a660a619efa33ebdaec06e2299a0e2d40785e4?width=448",
  link: "https://playgama.com/export/game/deadly-descent?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Drive down dangerous mountain tracks, navigate challenging obstacles, and survive thrilling downhill racing challenges."
},



{
  id: 68,
  title: "Buggy Simulator Sandbox 3D",
  genre: "Driving",
  category: "Simulation",
  icon: "🏎️",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "Sandbox",
  image: "https://static.playgama.com/p-img/pg/buggy-simulator-sandbox-3d/big-preview/8c7f1f8909ac4e27a65d7a7529d14c01?width=448",
  gameUrl: "https://playgama.com/export/game/buggy-simulator-sandbox-3d?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/buggy-simulator-sandbox-3d",
  platform: ["Desktop", "Mobile"],
  orientation: "both",
  source: "Playgama",
  description: "Explore an open driving sandbox with realistic buggy physics. Drive across different maps, test suspension, perform jumps and stunts, explore bridges, and experiment with vehicle handling."
},

{
  id: 69,
  title: "Hot Rods Arena Stars",
  genre: "Combat Racing",
  category: "Action",
  icon: "💥",
  color: "turbo",
  rating: "Free",
  players: "Multiplayer",
  badge: "Battle Arena",
  image: "https://static.playgama.com/p-img/pg/hot-rods-arena-stars/big-preview/74ef1328234d46e090c02ff3b247e1ca?width=448",
  gameUrl: "https://playgama.com/export/game/hot-rods-arena-stars?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/hot-rods-arena-stars",
  platform: ["Desktop", "Mobile"],
  orientation: "landscape",
  source: "Playgama",
  description: "Enter explosive vehicle combat arenas with heavily armed hot rods. Collect stars, battle opponents, use weapons, upgrade armor, and compete to become the arena champion."
},

{
  id: 70,
  title: "Obby: Warriors of The Sword",
  genre: "RPG",
  category: "Action",
  icon: "⚔️",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "Adventure",
  image: "https://static.playgama.com/p-img/pg/obby-warriors-of-the-sword/big-preview/52c98f342b474a1387944450c02c9e7c?width=448",
  gameUrl: "https://playgama.com/export/game/obby-warriors-of-the-sword?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/obby-warriors-of-the-sword",
  platform: ["Desktop", "Mobile"],
  orientation: "landscape",
  source: "Playgama",
  description: "Become a powerful warrior in this action RPG. Collect and upgrade swords, defeat enemies, unlock abilities, complete missions, collect pets and skins, and grow stronger through rebirth."
},

{
  id: 71,
  title: "Interceptor: Police Pursuit",
  genre: "Driving",
  category: "Racing",
  icon: "🚔",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "3D",
  image: "https://static.playgama.com/p-img/pg/preview/2ff25a410126423185d6abf671c86c70?width=448",
  gameUrl: "https://playgama.com/export/game/interceptor-police-pursuit?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/interceptor-police-pursuit",
  platform: ["Desktop", "Mobile"],
  orientation: "landscape",
  source: "Playgama",
  description: "Drive powerful police cars in a 3D pursuit game. Chase suspects through traffic, avoid hazards, use boosts and pulse weapons, complete cases, and upgrade your vehicles."
},

{
  id: 72,
  title: "Trial Xtreme",
  genre: "Racing",
  category: "Driving",
  icon: "🏍️",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "Bike",
  image: "https://static.playgama.com/p-img/pg/trial-xtreme/big-preview/985bb31f53d947d381d1035f772daa38?width=448",
  gameUrl: "https://playgama.com/export/game/trial-xtreme?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/trial-xtreme",
  platform: ["Desktop", "Mobile"],
  orientation: "landscape",
  source: "Playgama",
  description: "Race a motorcycle across challenging obstacle courses filled with ramps, rocks, pipes, and barriers. Balance your bike, complete tracks, collect stars, and unlock new levels."
},

{
  id: 73,
  title: "Stick Fight Arena",
  genre: "Fighting",
  category: "Action",
  icon: "🥊",
  color: "turbo",
  rating: "Free",
  players: "1–2 Players",
  badge: "2 Player",
  image: "https://static.playgama.com/p-img/pg/preview/d4824f297ede4856a6859ad16875d9eb?width=448",
  gameUrl: "https://playgama.com/export/game/stick-fight-arena?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/stick-fight-arena",
  platform: ["Desktop", "Mobile"],
  orientation: "both",
  source: "Playgama",
  description: "Battle with 18 unique stickman fighters using combos, special moves, grabs, and ragdoll knockouts. Play story mode, fight AI opponents, climb towers, try random Mod Fight challenges, or battle a friend in local 2-player and 2v2 tag matches."
},


{
  id: 74,
  title: "Eat Blobs Simulator",
  genre: "IO",
  category: "Arcade",
  icon: "🟢",
  color: "turbo",
  rating: "Free",
  players: "1–2 Players",
  badge: "2 Player",
  image: "https://static.playgama.com/p-img/pg/eat-blobs-simulator/big_preview/67cf17bd4834498799d6eba8a5c660c3?width=448",
  link: "https://playgama.com/export/game/eat-blobs-simulator?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Grow your blob by collecting colorful slime pieces and eating smaller opponents. Avoid larger blobs, unlock skins, and compete solo or with a friend in local 2-player mode."
},


{
  id: 75,
  title: "Cliff Crash",
  genre: "Driving",
  category: "Action",
  icon: "💥",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "3D",
  image: "https://static.playgama.com/p-img/pg/cliff-crash/big_preview/32dc6bf076bf408989ad98a6242c81cb?width=448",
  gameUrl: "https://playgama.com/export/game/cliff-crash?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/cliff-crash",
  platform: ["Desktop", "Mobile"],
  orientation: "both",
  source: "Playgama",
  description: "Drive downhill, launch your car off cliffs, and create spectacular explosions and destruction. Control your vehicle in midair, use nitro boosts, and trigger explosive crashes to maximize destruction before reaching the finish line."
},
  {
    id: 3,
    title: "Hazmob FPS: Online Shooter",
    genre: "FPS",
    category: "Shooting",
    icon: "🎯",
    color: "cyber",
    rating: "Free",
    players: "PC / Mobile",
    badge: "MULTIPLAYER",
    image: "https://static.playgama.com/p-img/pg/hazmob-fps-online-shooter/icon/ee2ef33081624f1eab03827b6f212bb6?width=448",
    link: "https://playgama.com/export/game/hazmob-fps-online-shooter?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
    provider: "Playgama",
    description: "Compete in fast-paced multiplayer FPS battles."
  
  },
  {
    id: 4,
    title: "TRAFFIC Rush Online",
    genre: "Racing",
    category: "Driving",
    icon: "🚗",
    color: "turbo",
    rating: "Free",
    players: "PC / Mobile",
    badge: "MULTIPLAYER",
    image: "https://static.playgama.com/p-img/pg/traffic-rush-online/icon/f83b2c9d897d444e8f3b47b2a2a01fa7?width=448",
    link: "https://playgama.com/export/game/traffic-rush-online?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
    provider: "Playgama",
    description: "Drive through busy city traffic, upgrade cars and compete with other players."
  
  },
  {
    id: 5,
    title: "Driver Club: Highway Racing",
    genre: "Racing",
    category: "Driving",
    icon: "🏎️",
    color: "turbo",
    rating: "Free",
    players: "PC",
    badge: "RACING",
    image: "https://static.playgama.com/p-img/pg/icon/fe43abdfe00844b2a289de940b3732f2?width=448",
    link: "https://playgama.com/export/game/driver-club-highway-racing?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
    provider: "Playgama",
    description: "Overtake traffic, unlock powerful cars and dominate the highway."
  },
  
  {
    id: 6,
    title: "Sniper Attack2",
    genre: "Shooting",
    category: "Action",
    icon: "🎯",
    color: "turbo",
    rating: "Free",
    players: "All Devices",
    badge: "SNIPER",
    image: "https://static.playgama.com/p-img/pg/backfill/game-116923/icon/6c0e96ee9a1b34a11527fbb92890dc2d0b87367bbd83e04bb638975998f9753a?width=448",
    link: "https://playgama.com/export/game/sniper-attack2?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
    provider: "Playgama",
    description: "Take on precision sniper missions across city streets, ports and desert battlefields."
  },
  
  {
    id: 7,
    title: "AOD - Art Of Defense",
    genre: "Strategy",
    category: "Tower Defense",
    icon: "🛡️",
    color: "turbo",
    rating: "Free",
    players: "All Devices",
    badge: "STRATEGY",
    image: "https://static.playgama.com/p-img/pg/aod--art-of-defense/icon/01ed7544e47a43fc9daffd45b0d23c26?width=448",
    link: "https://playgama.com/export/game/aod--art-of-defense?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
    provider: "Playgama",
    description: "Build defensive towers, command heroes and protect humanity in a post-apocalyptic world."
  },
 {
  id: 8,
  title: "MR RACER - Car Racing",
  genre: "Racing",
  category: "Driving",
  icon: "🏎️",
  color: "turbo",
  rating: "Free",
  players: "All Devices",
  badge: "RACING",
  image: "https://static.playgama.com/p-img/pg/backfill/game-90490/icon/1e73c6b9b06c3586f6c0199519bfdbf7c8a5b8c2da8fbb4a225a9d4d287f6cc2?width=448",
  link: "https://playgama.com/export/game/mr-racer-car-racing?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Race supercars, dodge traffic, complete missions and customize your dream cars."
},
  
  {
    id: 9,
    title: "Milord, We Have a Zombie Problem",
    genre: "Strategy",
    category: "Tower Defense",
    icon: "🧟",
    color: "turbo",
    rating: "Free",
    players: "All Devices",
    badge: "ZOMBIE",
    image: "https://static.playgama.com/p-img/pg/icon/d4a9d5c216a44972adaa22e4de0b67ac?width=448",
    link: "https://playgama.com/export/game/milord-we-have-a-zombie-problem?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
    provider: "Playgama",
    description: "Build powerful medieval towers, command heroes and defend your castle against massive zombie hordes."
  },
  
  {
    id: 10,
    title: "StreetRacer: Realistic Destruction",
    genre: "Racing",
    category: "Car Destruction",
    icon: "🚗",
    color: "turbo",
    rating: "Free",
    players: "All Devices",
    badge: "DESTRUCTION",
    image: "https://static.playgama.com/p-img/pg/backfill/game-112220/icon/9e8eb39d965f6eff1ba10c6211830b3be957ce543818e3cd68d4741fcd2f4848?width=448",
    link: "https://playgama.com/export/game/streetracer-realistic-destruction?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
    provider: "Playgama",
    description: "Explore an open world, customize cars and cause spectacular destruction with realistic physics."
  },

 
  {
    id: 11,
    title: "Penalty Shooter",
    genre: "Sports",
    category: "Football",
    icon: "⚽",
    color: "turbo",
    rating: "Free",
    players: "All Devices",
    badge: "SPORTS",
    image: "https://static.playgama.com/p-img/pg/penalty-shooter/icon/c31cf51e64594ee9b10949a00874ba29?width=448",
    link: "https://penalty-shooter.hammerplay.com/export?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
    provider: "Playgama",
    description: "Take penalty kicks, outsmart the goalkeeper and make spectacular saves to win."
  },

  
  {
    id: 12,
    title: "City Bus Simulator Driving Games",
    genre: "Simulation",
    category: "Bus Driving",
    icon: "🚌",
    color: "turbo",
    rating: "Free",
    players: "All Devices",
    badge: "SIMULATOR",
    image: "https://static.playgama.com/p-img/pg/city-bus-simulator-driving-games/icon/ddfeac1f3d1149df816cf95f46f276b9?width=448",
    link: "https://playgama.com/export/game/city-bus-simulator-driving-games?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
    provider: "Playgama",
    description: "Drive city buses, pick up passengers and complete challenging routes in city and winter environments."
  },

  
  {
    id: 13,
    title: "Popping Candies",
    genre: "Puzzle",
    category: "Match 3",
    icon: "🍬",
    color: "turbo",
    rating: "Free",
    players: "All Devices",
    badge: "PUZZLE",
    image: "https://static.playgama.com/p-img/pg/backfill/game-20/icon/b4e02cf5b16be4ba8aa2f90ce3728fd1be867958bd81bffa2ffc98f5c7339f1e?width=448",

    link: "https://playgama.com/export/game/popping-candies?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
    provider: "Playgama",
    description: "Match colorful candies, create powerful combinations and complete challenging puzzle levels."
  },
  
  {
    id: 14,
    title: "Drive Quest",
    genre: "Racing",
    category: "Open World Driving",
    icon: "🏎️",
    color: "turbo",
    rating: "Free",
    players: "All Devices",
    badge: "OPEN WORLD",
    image: "https://static.playgama.com/p-img/pg/drive-quest/icon/addbb6be867c4030931d6c57505fa0f2?width=448",
    link: "https://drivequest.io/export?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
    provider: "Playgama",
    description: "Explore an open world, customize 35 vehicles and master drifting, stunts and speed challenges."
  },
  {
    id: 15,
    title: "Build a Rollercoaster: Simulator",
    genre: "Simulation",
    category: "Simulation",
    icon: "🎢",
    color: "turbo",
    rating: "Free",
    players: "All Devices",
    badge: "Popular",
    image: "https://static.playgama.com/p-img/pg/icon/9971d91837ff49f7b8eebbee84d0755d?width=448",
    link: "https://playgama.com/export/game/build-a-rollercoaster-simulator?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
    provider: "Playgama",
    description: "Build your own rollercoaster, unlock new tracks, ride your creations, and earn money to expand your amusement park."
  },

 {
  id: 8,
  title: "MR RACER - Car Racing",
  genre: "Racing",
  category: "Driving",
  icon: "🏎️",
  color: "turbo",
  rating: "Free",
  players: "All Devices",
  badge: "RACING",
  image: "https://static.playgama.com/p-img/pg/backfill/game-90490/icon/1e73c6b9b06c3586f6c0199519bfdbf7c8a5b8c2da8fbb4a225a9d4d287f6cc2?width=448",
  link: "https://playgama.com/export/game/mr-racer-car-racing?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Race supercars, dodge traffic, complete missions and customize your dream cars."
},
  {
    id: 17,
    title: "Sky Wars: Battle of the Islands",
    genre: "Action",
    category: "Battle Royale",
    icon: "⚔️",
    color: "turbo",
    rating: "Free",
    players: "All Devices",
    badge: "Battle",
    image: "https://static.playgama.com/p-img/pg/sky-wars-battle-of-the-islands/icon/4961b7ca3a4b4615ab9f84fdf5d62b70?width=448",
    link: "https://playgama.com/export/game/sky-wars-battle-of-the-islands?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
    provider: "Playgama",
    description: "Battle seven opponents across floating islands. Loot chests, collect weapons and armor, build bridges, and fight to be the last player standing."
  },
  {
    id: 18,
    title: "Detective Max Mystery: The Disappearance of Mr. Winters",
    genre: "Adventure",
    category: "Mystery",
    icon: "🔎",
    color: "turbo",
    rating: "Free",
    players: "All Devices",
    badge: "Mystery",
    image: "https://static.playgama.com/p-img/pg/backfill/game-106390/icon/4ac7e83a6aae17a94463d50b290db31c98b4395af4ddc0ffc8ba278240f58402?width=448",
    link: "https://playgama.com/export/game/detective-max-mystery-the-disappearance-of-mr-winters?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
    provider: "Playgama",
    description: "Investigate Mr. Winters' disappearance, search for clues, examine evidence, and solve challenging puzzles in this detective adventure."
  },

  {
    id: 19,
    title: "Nitro Cars: Highway Racer",
    genre: "Racing",
    category: "Driving",
    icon: "🏎️",
    color: "turbo",
    rating: "Free",
    players: "All Devices",
    badge: "New",
    image: "https://static.playgama.com/p-img/pg/nitro-cars-highway-racer/icon/a5bf3d89d4254b03a82754e1589234e5?width=448",
    link: "https://playgama.com/export/game/nitro-cars-highway-racer?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
    provider: "Playgama",
    description: "Race through busy highways, dodge traffic, unleash nitro boosts, escape the police, and customize and upgrade your cars."
  },


{
  id: 20,
  title: "Needle Quest: Haystack Secrets",
  genre: "Hidden Object",
  category: "Adventure",
  icon: "🔍",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "3D",
  image: "https://static.playgama.com/p-img/pg/needle-quest-haystack-secrets/icon/c18d60dee8d64761933f1407a1709f27?width=448",
  link: "https://playgama.com/export/game/needle-quest-haystack-secrets?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Search through huge 3D haystacks to find a hidden needle. Collect straw, discover treasures, and upgrade your tools and storage."
},

{
  id: 33,
  title: "Epic Sword Battle! Fight in the Ragdoll Arena!",
  genre: "Fighting",
  category: "Action",
  icon: "⚔️",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "3D",
  image: "https://static.playgama.com/p-img/pg/epic-sword-battle-fight-in-the-ragdoll-arena/icon/48222c3db2244f9d841dab314c649212?width=448",
  link: "https://playgama.com/export/game/epic-sword-battle-fight-in-the-ragdoll-arena?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Enter a 3D sword-fighting arena, battle knights and gladiators, dodge attacks, and win duels with funny ragdoll physics. Swipe or drag to attack."
},
{
  id: 21,
  title: "Sprunki World Online RP",
  genre: "Multiplayer",
  category: "3D Open World",
  icon: "🌍",
  color: "pixel",
  rating: "Free",
  players: "Android, iOS, Desktop",
  badge: "MULTIPLAYER",
  image: "https://static.playgama.com/p-img/pg/icon/b057a2a237814b979180e85c0b975492?width=448",
  link: "https://playgama.com/export/game/sprunki-world-online-rp--play-with-friends?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Explore a colorful 3D world, play obby challenges, build with blocks, discover hidden Sprunki and enjoy multiplayer adventures with friends."
},
{
  id: 22,
  title: "Moto X3M",
  genre: "Racing",
  category: "Bike Racing",
  icon: "🏍️",
  color: "turbo",
  rating: "Free",
  players: "Android, iOS, Desktop",
  badge: "POPULAR",
  image: "https://static.playgama.com/p-img/pg/moto-x3m/icon/c65bb58f726d4e538f3202f12675cc71?width=448",

  link: "https://playgama.com/export/game/moto-x3m?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Race through challenging off-road tracks, dodge obstacles, perform spectacular flips, and beat the clock in this exciting motorcycle stunt game."
},
{
  id: 23,
  title: "Basketball Stars",
  genre: "Sports",
  category: "Basketball",
  icon: "🏀",
  color: "pixel",
  rating: "Free",
  players: "Android, iOS, Desktop",
  badge: "2 PLAYER",
  image: "https://static.playgama.com/p-img/pg/basketball-stars/icon/d2df0e57e80e4bfea7a40a7d6589d81c?width=448",
  link: "https://playgama.com/export/game/basketball-stars?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Challenge opponents in exciting basketball tournaments. Perform dunks, shoot three-pointers, block shots, and unleash powerful super shots. Play solo or challenge a friend in 2-player mode."
},
{
  id: 24,
  title: "Geometry Arrow 2",
  genre: "Arcade",
  category: "Skill & Reflex",
  icon: "🔺",
  color: "pixel",
  rating: "Free",
  players: "Android, iOS, Desktop",
  badge: "POPULAR",
  image: "https://static.playgama.com/p-img/pg/backfill/game-99645/icon/879425bddbcc6adb604bb539268e9fc7e5deb8d452aa753aa10d4525876a9e1f?width=448",
  link: "https://playgama.com/export/game/geometry-arrow-2?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Navigate a dangerous cave, dodge challenging obstacles, and reach the portal. Master 13 levels featuring Arrow and Wheel sections, with customizable characters and effects."
},
{
  id: 25,
  title: "Piece of Cake: Merge & Bake",
  genre: "Puzzle",
  category: "Cooking & Merge",
  icon: "🧁",
  color: "pixel",
  rating: "Free",
  players: "Android, iOS, Desktop",
  badge: "COZY",
  image: "https://static.playgama.com/p-img/pg/piece-of-cake-merge--bake/icon/db5eeee7fee34af1984e6c7ff9199283?width=448",
  link: "https://playgama.com/export/game/piece-of-cake-merge--bake?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Help Emily restore her grandfather's abandoned café. Merge ingredients, discover new recipes, serve delicious treats, upgrade your kitchen, and uncover family secrets."
},
{
  id: 26,
  title: "TB World",
  genre: "Casual",
  category: "Dress Up & Decoration",
  icon: "🎨",
  color: "pixel",
  rating: "Free",
  players: "Android, iOS, Desktop",
  badge: "CREATIVITY",
  image: "https://static.playgama.com/p-img/pg/tb-world/icon/00a2f00a4b134cbdab3f2085b0628cc8?width=448",
  link: "https://playgama.com/export/game/tb-world?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Unleash your creativity! Customize characters with outfits and accessories, decorate cozy interiors, and create your own stories in this relaxing creative world."
},
{
  id: 27,
  title: "Good Sort Master: Triple Match",
  genre: "Puzzle",
  category: "Triple Match",
  icon: "🧺",
  color: "pixel",
  rating: "Free",
  players: "Android, iOS, Desktop",
  badge: "RELAXING",
  image: "https://static.playgama.com/p-img/pg/backfill/game-46/icon/c0a46a5e5ca0f818973da4fe340b68b9ab6d9cce73ea4babad9e167ef9393bd0?width=448",
  link: "https://playgama.com/export/game/good-sort-master?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Organize shelves by matching three identical items. Clear every shelf, complete satisfying sorting puzzles, and unlock new collections in this relaxing triple-match game."
},
{
  id: 28,
  title: "Age of Tanks Warriors",
  genre: "Strategy",
  category: "Tower Defense",
  icon: "⚔️",
  color: "turbo",
  rating: "Free",
  players: "Android, Desktop",
  badge: "STRATEGY",
  image: "https://static.playgama.com/p-img/pg/backfill/game-106324/icon/99eb1cddd7885f2031a9d560b5e366847b85408438ff4e3908ee9060d611f7d2?width=448",
  link: "https://playgama.com/export/game/age-of-tanks-warriors-td-war?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Command your army through different historical eras, deploy warriors and tanks, upgrade your weapons, and destroy enemy fortresses in intense tower-defense battles."
},

{
  id: 29,
  title: "Cube Snake 2048",
  genre: "Arcade",
  category: "Snake & IO",
  icon: "🐍",
  color: "pixel",
  rating: "Free",
  players: "Android, iOS, Desktop",
  badge: "ARCADE",
  image: "https://static.playgama.com/p-img/pg/backfill/game-109351/icon/37e7ffd0a428dec2cacd620135eee0ddff04ab7833e5ca692bc4ac72b03cfa86?width=448",
  link: "https://playgama.com/export/game/cube-snake-2048?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Grow your cube snake in a huge arena! Collect lower or equal numbered cubes, combine numbers, gather power-ups, and become the biggest snake."
},



{
  id: 30,
  title: "Hidden Object: Clues and Mysteries",
  genre: "Puzzle",
  category: "Hidden Objects",
  icon: "🔎",
  color: "pixel",
  rating: "Free",
  players: "Android, iOS, Desktop",
  badge: "MYSTERY",
  image: "https://static.playgama.com/p-img/pg/backfill/game-99671/icon/bdfd60d3d7f79219244f36d82f5cdbe343dc93ae36c5c6c14acc53741390637a?width=448",
  link: "https://playgama.com/export/game/hidden-object-clues-and-mysteries?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Become a detective and investigate charming locations. Search for hidden objects, uncover clues, solve mysteries, and enjoy a relaxing hidden-object adventure."
},

{
  id: 31,
  title: "Chess Online Multiplayer",
  genre: "Board",
  category: "Chess",
  icon: "♟️",
  color: "pixel",
  rating: "Free",
  players: "Multiplayer",
  badge: "ONLINE",
  image: "https://static.playgama.com/p-img/pg/chess-online-multiplayer/icon/2fafa5b0feea478499c09f64bc9f95d8?width=448",
  link: "https://playgama.com/export/game/chess-online-multiplayer?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Play chess online against players worldwide, challenge the computer across 21 difficulty levels, or play with a friend. Choose from Bullet, Blitz, Rapid and Classic time controls."
},
{
  id: 32,
  title: "Car Destruction King",
  genre: "Racing",
  category: "Car Destruction",
  icon: "💥",
  color: "turbo",
  rating: "Free",
  players: "Single Player",
  badge: "DESTRUCTION",
  image: "https://static.playgama.com/p-img/pg/car-destruction-king/icon/7c3dafed564a4a4b866d1eba937d92e0?width=448",
  link: "https://playgama.com/export/game/car-destruction-king?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Drive powerful cars through destructive obstacles, rotating hammers, presses and catapults. Race, set records, explore different maps and use slow motion to enjoy spectacular crashes."
},
{
  id: 33,
  title: "Rise of the Dead",
  genre: "Shooting",
  category: "Zombie Survival",
  icon: "🧟",
  color: "turbo",
  rating: "Free",
  players: "Single Player",
  badge: "HORROR",
  image: "https://static.playgama.com/p-img/pg/backfill/game-98057/icon/5c1b1f310bc56066b9bf0b163a1be5ca53ca0b9e349ad3ecbab106e48596c2a1?width=448",
  link: "https://playgama.com/export/game/rise-of-the-dead?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Survive a zombie apocalypse in this action-packed horror shooter. Fight waves of undead, complete missions, upgrade weapons and take on sniper, survival and exploration challenges."
},

{
  id: 34,
  title: "Stickman Kombat 2D",
  genre: "Fighting",
  category: "Action",
  icon: "🥊",
  color: "turbo",
  rating: "Free",
  players: "1–2 Players",
  badge: "FIGHTING",
  image: "https://static.playgama.com/p-img/pg/stickman-kombat-2d/icon/5524d8055e054f909166c935c620afb3?width=448",
  link: "https://stickmankombat.io/export?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Enter fast-paced stickman battles with precise combos, special attacks and defensive moves. Fight solo or challenge a friend on the same PC, unlock fighters and master your combat skills."
},

{
  id: 35,
  title: "Solar Smash",
  genre: "Simulation",
  category: "Simulation",
  icon: "🌍",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "SPACE",
  image: "https://static.playgama.com/p-img/pg/backfill/game-121242/icon/78f9de1f897c5e590d118af9d6ae85124738bfc499c3bbf15340909441794abb?width=448",
  link: "https://playgama.com/export/game/solar-smash?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Unleash cosmic destruction in this space simulator. Choose powerful weapons, destroy planets, create black holes and experiment with your own planetary systems."
},

{
  id: 36,
  title: "Mahjong Lines",
  genre: "Puzzle",
  category: "Puzzle",
  icon: "🀄",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "BRAIN",
  image: "https://static.playgama.com/p-img/pg/mahjong-lines/icon/c414c10941374924b807e56c0676f190?width=448",
  link: "https://playgama.com/export/game/mahjong-lines?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Connect matching Mahjong tiles using paths with up to two turns. Clear the board, unlock new levels and sharpen your logic skills."
},

{
  id: 37,
  title: "Fruit Merge: Juicy Drop Game",
  genre: "Puzzle",
  category: "Puzzle",
  icon: "🍉",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "JUICY",
  image: "https://static.playgama.com/p-img/pg/fruit-merge-playgama/icon/7221e2b5dcd647ce9660bdf79c8133bd?width=448",
  link: "https://playgama.com/export/game/fruit-merge-playgama?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Drop and merge matching fruits to create bigger ones. Plan your moves carefully, manage the container space and aim to create the biggest fruit!"
},

{
  id: 38,
  title: "Noob in Mine - Sandbox & Craft",
  genre: "Sandbox",
  category: "Adventure",
  icon: "🧱",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "SANDBOX",
  image: "https://static.playgama.com/p-img/pg/noob-in-mine-sandbox-craft/icon/0e50ea492604441dbed10abbe7f0b2f6?width=448",
  link: "https://playgama.com/export/game/noob-in-mine--sandbox-craft?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Explore a 3D block world, build houses and cities, gather resources, craft tools and survive against zombies and monsters. Choose creative or survival mode and build your own adventure."
},

{
  id: 39,
  title: "Hidden Object: My Hotel",
  genre: "Hidden Objects",
  category: "Puzzle",
  icon: "🏨",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "PUZZLE",
  image: "https://static.playgama.com/p-img/pg/backfill/game-109352/icon/a6b9915886a795de6a12ea045ae44350672228c3efe5081d717873e61255c837?width=448",
  link: "https://playgama.com/export/game/hidden-object-my-hotel?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Help restore a dream hotel by searching for hidden objects in messy rooms. Explore detailed scenes, clean up clutter, discover cleverly hidden items and use hints to solve challenging puzzles."
},
  {
  id: 40,
  title: "MR RACER: Stunt Mania",
  genre: "Racing",
  category: "Arcade",
  icon: "🏎️",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "3D",
  image: "https://static.playgama.com/p-img/pg/mr-racer-stunt-mania/big-preview/a797c7abd76041d5b3259c9ff5d95b67?width=448",
  link: "https://playgama.com/export/game/mr-racer-stunt-mania?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Experience high-speed 3D arcade racing, perform incredible stunts, compete against 5 AI opponents, unlock unique cars, and upgrade handling, acceleration, and top speed across exciting tracks and environments",
},
{
  id: 41,
  title: "Grow Empire",
  genre: "Strategy",
  category: "Tower Defense",
  icon: "🏰",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "Strategy",
  image: "https://static.playgama.com/p-img/pg/grow-empire/big-preview/87ac17d7036d48a3bcc663ccce1b34d0?width=448",
  link: "https://playgama.com/export/game/grow-empire?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Build and defend your empire with towers, warriors and heroes."
},
    

{
  id: 44,
  title: "Draw Bridge - Brain Game",
  genre: "Puzzle",
  category: "Puzzle",
  icon: "🌉",
  color: "neon",
  rating: "Free",
  players: "1 Player",
  badge: "Brain Game",
  image: "https://static.playgama.com/p-img/pg/draw-bridge--brain-game/big-preview/1e2c80ac6f08468a986810cf0aa49403?width=448",
  link: "https://playgama.com/export/game/draw-bridge--brain-game?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Draw bridges and guide vehicles safely through obstacles."
},
{
  id: 45,
  title: "Find the Vampire",
  genre: "Hidden Object",
  category: "Adventure",
  icon: "🧛",
  color: "purple",
  rating: "Free",
  players: "1 Player",
  badge: "Trending",
  image: "https://static.playgama.com/p-img/pg/find-the-vampire/big_preview/e648c547d27347b7bf8126027148cc25?width=448",
  link: "https://playgama.com/export/game/find-the-vampire?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Find disguised vampires and rescue citizens."
},

{
  id: 47,
  title: "Coin Run",
  genre: "Runner",
  category: "Arcade",
  icon: "🪙",
  color: "gold",
  rating: "Free",
  players: "1 Player",
  badge: "Trending",
  image: "https://static.playgama.com/p-img/pg/coin-run/big_preview/b7a75b0b831940dcaecc90c94cb43899?width=448",
  link: "https://playgama.com/export/game/coin-run?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Collect coins, avoid obstacles and build your business empire."
},
{
  id: 48,
  title: "Shape Transforming: Shifting Run",
  genre: "Runner",
  category: "Racing",
  icon: "🚗",
  color: "blue",
  rating: "Free",
  players: "1 Player",
  badge: "Trending",
  image: "https://static.playgama.com/p-img/pg/shape-transforming-shifting-run/big-preview/086d500d59e14cb9b717c43000d3ad36?width=448",
  link: "https://playgama.com/export/game/shape-transforming-shifting-run?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Transform into cars, planes and ships to overcome obstacles."
},
{
  id: 49,
  title: "Find Match 3D",
  genre: "Puzzle",
  category: "Puzzle",
  icon: "🔎",
  color: "pink",
  rating: "Free",
  players: "1 Player",
  badge: "Popular",
  image: "https://static.playgama.com/p-img/pg/find-match-3d/big-preview/b8951ea43f0c4e18af3401f015c1750c?width=448",
  link: "https://playgama.com/export/game/find-match-3d?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Find and match three identical objects before time runs out."
},

{
  id: 50,
  title: "Fashion Princess - Dress Up for Girls",
  genre: "Dress Up",
  category: "Casual",
  icon: "👑",
  color: "pink",
  rating: "Free",
  players: "1 Player",
  badge: "Trending",
  image: "https://static.playgama.com/p-img/pg/fashion-princess--dress-up-for-girls-e00c-1/big-preview/99f7b8102d88492ea7494050cdd6b7a9?width=448",
  link: "https://playgama.com/export/game/fashion-princess--dress-up-for-girls-e00c-1?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Create fashionable outfits, style princesses and compete in fashion battles."
},
{
  id: 51,
  title: "Ragdoll Gun Shooter",
  genre: "Shooting",
  category: "Action",
  icon: "🎯",
  color: "red",
  rating: "Free",
  players: "1 Player",
  badge: "Action",
  image: "https://static.playgama.com/p-img/pg/ragdoll-gun-shooter-cannon-spinner-playground/big-preview/8b8e25a039b347529004799dfaffb24f?width=448",
  link: "https://playgama.com/export/game/ragdoll-gun-shooter-cannon-spinner-playground?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Use powerful weapons and physics-based shots to defeat ragdoll enemies."
},
{
  id: 52,
  title: "Gym Boss",
  genre: "Simulation",
  category: "Sports",
  icon: "🏋️",
  color: "green",
  rating: "Free",
  players: "1 Player",
  badge: "Trending",
  image: "https://static.playgama.com/p-img/pg/gym-boss/big_preview/1dee3f88c32e47aaa2635e091a92696c?width=448",
  link: "https://playgama.com/export/game/gym-boss?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Train your character, build strength and become the ultimate gym champion."
},
{
  id: 53,
  title: "BMG: Ragdoll Car Race",
  genre: "Racing",
  category: "Racing",
  icon: "🚗",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "Trending",
  image: "https://static.playgama.com/p-img/pg/preview/8d255e3d13454033ab09dd8229847053?width=448",
  link: "https://playgama.com/export/game/bmg-ragdoll-car-race?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Race, crash vehicles and enjoy chaotic ragdoll driving physics."
},
{
  id: 54,
  title: "Crazy Flying Car",
  genre: "Racing",
  category: "Racing",
  icon: "🚙",
  color: "blue",
  rating: "Free",
  players: "1 Player",
  badge: "3D",
  image: "https://static.playgama.com/p-img/pg/crazy-flying-car/big_preview/f7ed5462da5e42a19e17ab99ff43369f?width=448",
  link: "https://playgama.com/export/game/crazy-flying-car?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Drive flying cars, race opponents and take shortcuts through the sky."
},
{
  id: 55,
  title: "Ragdoll Racing: Extreme Downhill",
  genre: "Racing",
  category: "Arcade",
  icon: "🏁",
  color: "orange",
  rating: "Free",
  players: "1 Player",
  badge: "Popular",
  image:"https://static.playgama.com/p-img/pg/crazy-flying-car/icon/47bc9b63a40d4c6280ed8cae393362c1?width=448",
  link: "https://playgama.com/export/game/ragdoll-racing-extreme-downhill?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Race downhill against opponents and survive hilarious ragdoll crashes."
},
{
  id: 56,
  title: "Single Line Drawing Puzzle",
  genre: "Puzzle",
  category: "Puzzle",
  icon: "✏️",
  color: "purple",
  rating: "Free",
  players: "1 Player",
  badge: "Brain Game",
  image: "https://static.playgama.com/p-img/pg/single-line-drawing-puzzle/big-preview/4becffa913504a729da6eef14f3a100d?width=448",
  link: "https://playgama.com/export/game/single-line-drawing-puzzle?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Complete challenging shapes by drawing one continuous line."
},
{
  id: 57,
  title: "Animal Care Tycoon",
  genre: "Simulation",
  category: "Casual",
  icon: "🐶",
  color: "green",
  rating: "Free",
  players: "1 Player",
  badge: "Tycoon",
  image: "https://static.playgama.com/p-img/pg/animal-care-tycoon/big-preview/49c7d3c6f2ce4349858d15141f0c463f?width=448",
  link: "https://playgama.com/export/game/animal-care-tycoon?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Build an animal hospital, care for pets and grow your veterinary business."
},
{
  id: 58,
  title: "Craft and Battle",
  genre: "Strategy",
  category: "Strategy",
  icon: "⚔️",
  color: "red",
  rating: "Free",
  players: "1 Player",
  badge: "Strategy",
  image: "https://static.playgama.com/p-img/pg/craft-and-battle/big_preview/b152e7d24d064364816e5464f0188784?width=448",
  link: "https://playgama.com/export/game/craft-and-battle?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Gather resources, build your army and defeat enemy bases."
},
{
  id: 59,
  title: "Deadly Catch!",
  genre: "Fishing",
  category: "Simulation",
  icon: "🎣",
  color: "blue",
  rating: "Free",
  players: "1 Player",
  badge: "Adventure",
  image: "https://static.playgama.com/p-img/pg/deadly-catch/big-preview/84725f50efc84ada9a3aa2550ca3e8db?width=448",
  link: "https://playgama.com/export/game/deadly-catch?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Catch rare fish, upgrade your equipment and explore new islands."
},
{
  id: 60,
  title: "Road Chase: Shooter Realistic Guns",
  genre: "Shooting",
  category: "Action",
  icon: "🚘",
  color: "red",
  rating: "Free",
  players: "1 Player",
  badge: "Action",
  image: "https://static.playgama.com/p-img/pg/road-chase-shooter-realistic-guns/big-preview/6e87b1320c124a7f8ddd5034b7ea1d38?width=448",
  link: "https://playgama.com/export/game/road-chase-shooter-realistic-guns?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Escape enemy vehicles using weapons, driving skills and quick reactions."
},
{
  id: 61,
  title: "Car Crash Sandbox",
  genre: "Driving",
  category: "Simulation",
  icon: "🚗",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "3D",
  image: "https://static.playgama.com/p-img/pg/car-crash-sandbox/big_preview/27cc6ed862204c288a8e0460ac7d5e09?width=448",
  link: "https://playgama.com/export/game/car-crash-sandbox?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Drive different vehicles and experience realistic crash physics."
},
{
  id: 62,
  title: "Crazy Cart",
  genre: "Racing",
  category: "Arcade",
  icon: "🛒",
  color: "orange",
  rating: "Free",
  players: "1 Player",
  badge: "Racing",
  image: "https://static.playgama.com/p-img/pg/crazy-cart/big_preview/64e88864823e440787b3e13e6c9d1531?width=448",
  link: "https://playgama.com/export/game/crazy-cart?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Drive a shopping cart through challenging obstacle courses."
},
{
  id: 63,
  title: "Ladder Master",
  genre: "Runner",
  category: "Arcade",
  icon: "🪜",
  color: "green",
  rating: "Free",
  players: "1 Player",
  badge: "Casual",
  image: "https://static.playgama.com/p-img/pg/ladder-master/big_preview/9c4e077a84204815ada2c1fcd861eba8?width=448",
  link: "https://playgama.com/export/game/ladder-master?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Collect ladder pieces, dodge obstacles and climb towards the moon."
},
{
  id: 64,
  title: "Dinosaur Shifting Run",
  genre: "Runner",
  category: "Adventure",
  icon: "🦖",
  color: "green",
  rating: "Free",
  players: "1 Player",
  badge: "Trending",
  image: "https://static.playgama.com/p-img/pg/dinosaur-shifting-run/big-preview/68b95e1ddd2a40dfb80517d24197d18b?width=448",
  link: "https://playgama.com/export/game/dinosaur-shifting-run?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Transform between human and dinosaur forms to overcome obstacles."
},
{
  id: 65,
  title: "Vector Parkour Run",
  genre: "Parkour",
  category: "Action",
  icon: "🏃",
  color: "purple",
  rating: "Free",
  players: "1 Player",
  badge: "Trending",
  image: "https://static.playgama.com/p-img/pg/preview/83a5642f72fb4fb0a4f7faba84e549ff?width=448",
  link: "https://playgama.com/export/game/vector-parkour-run?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Escape across rooftops using jumps, slides and parkour moves."
},
{
  id: 66,
  title: "Grow Slime",
  genre: "Simulation",
  category: "Casual",
  icon: "🟢",
  color: "green",
  rating: "Free",
  players: "1 Player",
  badge: "Popular",
  image: "https://static.playgama.com/p-img/pg/grow-slime/big-preview/e50446ce287e471f87e9867e296b8309?width=448",
  link: "https://playgama.com/export/game/grow-slime?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Raise colourful slimes, collect rewards and expand your slime farm."
},
{
  id: 67,
  title: "Merge Defense: Army Behind the Wall",
  genre: "Strategy",
  category: "Tower Defense",
  icon: "🛡️",
  color: "blue",
  rating: "Free",
  players: "1 Player",
  badge: "Trending",
  image: "https://static.playgama.com/p-img/pg/merge-defense-army-behind-the-wall/big_preview/ba078bbffeaf437a912f0ff3d718f520?width=448",
  link: "https://playgama.com/export/game/merge-defense-army-behind-the-wall?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  provider: "Playgama",
  description: "Merge warriors, defend your wall and survive waves of monsters."
},

{
  id: 50,
  title: "Beam Drive Car Crash Test Simulator",
  genre: "Driving",
  category: "Simulation",
  icon: "🚗",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "3D",
  image: "https://static.playgama.com/p-img/pg/beam-drive-car-crash-test-simulator/big_preview/0963372e40aa423fb5263261ccb4d95c?width=448",
  gameUrl: "https://playgama.com/export/game/beam-drive-car-crash-test-simulator?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/beam-drive-car-crash-test-simulator",
  platform: ["Desktop", "Mobile"],
  orientation: "landscape",
  source: "Playgama",
  description: "Experience realistic car crashes, destruction physics, vehicle customization and sandbox driving challenges."
},

{
  id: 51,
  title: "Rooftop Run",
  genre: "Parkour",
  category: "Arcade",
  icon: "🏃",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "Popular",
  image: "https://static.playgama.com/p-img/pg/rooftop-run/big_preview/b8acf2eca33a4526ac82101c511a6e19?width=448",
  gameUrl: "https://rooftoprun.net/export?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/rooftop-run",
  platform: ["Desktop", "Mobile"],
  orientation: "both",
  source: "Playgama",
  description: "Run, jump, slide and dodge obstacles across rooftops in this fast-paced parkour adventure."
},

{
  id: 52,
  title: "5 Nights at Tung Tung Hotel - Horror 3D",
  genre: "Horror",
  category: "Survival",
  icon: "👻",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "Horror",
  image: "https://static.playgama.com/p-img/pg/5-nights-at-tung-tung-hotel-horror-3d/big_preview/0807bf76e3bb4e87b558ca4687e27072?width=448",
  gameUrl: "https://playgama.com/export/game/5-nights-at-tung-tung-hotel-horror-3d?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/5-nights-at-tung-tung-hotel-horror-3d",
  platform: ["Desktop", "Mobile"],
  orientation: "landscape",
  source: "Playgama",
  description: "Survive five terrifying nights in a mysterious hotel. Monitor security cameras, manage power, collect clues and uncover hidden secrets."
},

{
  id: 53,
  title: "Geometry Vibes",
  genre: "Arcade",
  category: "Skill",
  icon: "🔺",
  color: "turbo",
  rating: "Free",
  players: "1-4 Players",
  badge: "Multiplayer",
  image: "https://static.playgama.com/p-img/pg/geometry-vibes/big-preview/cd0c9c56e9e54948b7eca6c49ef590b5?width=448",
  gameUrl: "https://playgama.com/export/game/geometry-vibes?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/geometry-vibes",
  platform: ["Desktop", "Mobile"],
  orientation: "landscape",
  source: "Playgama",
  description: "Test your reflexes in Geometry Vibes! Dodge spikes, traps and obstacles while flying through challenging geometric levels. Play solo or compete with up to four players."
},

{
  id: 54,
  title: "Five Nights at Christmas",
  genre: "Horror",
  category: "Survival",
  icon: "🎅",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "Christmas Horror",
  image: "https://static.playgama.com/p-img/pg/five-nights-at-christmas/big-preview/ff5f8b877e88481da903a946bc4eb1ff?width=448",
  gameUrl: "https://playgama.com/export/game/five-nights-at-christmas?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/five-nights-at-christmas",
  platform: ["Desktop"],
  orientation: "landscape",
  source: "Playgama",
  description: "Survive terrifying nights in a snowy forest. Complete tasks, stay warm and watch out for the mysterious Snowman."
},

{
  id: 55,
  title: "Age of Heroes",
  genre: "Strategy",
  category: "Tower Defense",
  icon: "⚔️",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "RPG",
  image: "https://static.playgama.com/p-img/pg/age-of-heroes/big_preview/2edf00207ba34813b41dd9b22da461c4?width=448",
  gameUrl: "https://playgama.com/export/game/age-of-heroes?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/age-of-heroes",
  platform: ["Desktop", "Mobile"],
  orientation: "both",
  source: "Playgama",
  description: "Build an army of legendary heroes, defend fortresses and conquer different eras. Experience tactical battles, tower defense, hero upgrades and epic warfare."
},

{
  id: 56,
  title: "Backrooms: Exit Protocol 0",
  genre: "Horror",
  category: "Survival",
  icon: "👁️",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "3D Horror",
  image: "https://static.playgama.com/p-img/pg/preview/89c731c985b64f68aa280815ebb98f77?width=448",
  gameUrl: "https://playgama.com/export/game/backrooms-exit-protocol-0?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/backrooms-exit-protocol-0",
  platform: ["Desktop", "Mobile"],
  orientation: "landscape",
  source: "Playgama",
  description: "Explore the terrifying Level 0 backrooms, find the keycard, solve puzzles, avoid the monster and escape alive."
},


{
  id: 57,
  title: "The Mad Cow",
  genre: "Action",
  category: "Arcade",
  icon: "🐄",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "Funny",
  image: "https://static.playgama.com/p-img/pg/the-mad-cow/big-preview/f26275bf3e85468398b94fa2080bbef5?width=448",
  gameUrl: "https://playgama.com/export/game/the-mad-cow?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/the-mad-cow",
  platform: ["Desktop", "Mobile"],
  orientation: "landscape",
  source: "Playgama",
  description: "Play as Dasha the crazy cow! Destroy buildings, smash objects, use weapons, fly helicopters and escape the police in a chaotic city sandbox."
},


{
  id: 58,
  title: "Arrow Exit Puzzle",
  genre: "Puzzle",
  category: "Brain Training",
  icon: "🏹",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "Brain Game",
  image: "https://static.playgama.com/p-img/pg/arrow-exit-puzzle/big-preview/8fb99bdb64614846863eeed2c60a222d?width=448",
  gameUrl: "https://playgama.com/export/game/arrow-exit-puzzle?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/arrow-exit-puzzle",
  platform: ["Desktop", "Mobile"],
  orientation: "portrait",
  source: "Playgama",
  description: "Challenge your logic and spatial thinking! Tap arrows in the correct sequence to clear the board. Avoid obstacles and solve increasingly difficult puzzles."
},


{
  id: 59,
  title: "Car Smash Simulator: Crash & Tune",
  genre: "Simulation",
  category: "Driving",
  icon: "🚘",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "3D",
  image: "https://static.playgama.com/p-img/pg/car-smash-simulator-crash--tune/big-preview/79a9ff5139df4ebeaa6f1dbf25c91171?width=448",
  gameUrl: "https://playgama.com/export/game/car-smash-simulator-crash--tune?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/car-smash-simulator-crash--tune",
  platform: ["Desktop", "Mobile"],
  orientation: "landscape",
  source: "Playgama",
  description: "Drive, crash and customize cars in a massive 3D open-world sandbox. Smash vehicles with giant hammers, hydraulic crushers and mega ramps. Tune your cars and perform spectacular stunts."
},


{
  id: 60,
  title: "Bubble Boom",
  genre: "Bubble Shooter",
  category: "Puzzle",
  icon: "🫧",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "Casual",
  image: "https://static.playgama.com/p-img/pg/bubble-boom/big-preview/3cd68f69b073483bb828af70f4b40afd?width=448",
  gameUrl: "https://playgama.com/export/game/bubble-boom?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/bubble-boom",
  platform: ["Desktop", "Mobile"],
  orientation: "portrait",
  source: "Playgama",
  description: "A colorful bubble shooter puzzle game. Aim and shoot bubbles to match three or more of the same color, clear levels, and stop the bubbles from reaching the bottom."
},


{
  id: 61,
  title: "SWAT OPS: Body Camera",
  genre: "FPS",
  category: "Action",
  icon: "🎯",
  color: "turbo",
  rating: "Free",
  players: "1 Player / Multiplayer",
  badge: "3D Shooter",
  image: "https://static.playgama.com/p-img/pg/preview/d2edb209ce274dc98ea45921ea61fd47?width=448",
  gameUrl: "https://playgama.com/export/game/swat-ops-body-camera?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/swat-ops-body-camera",
  platform: ["Desktop", "Mobile"],
  orientation: "both",
  source: "Playgama",
  description: "A tactical first-person shooter with realistic body-camera visuals. Battle bots or real players in Deathmatch and Zombie Mode across four maps, earn coins, and unlock weapon skins and charms."
},


{
  id: 62,
  title: "Motorcycle Racer: Road Mayhem",
  genre: "Racing",
  category: "Driving",
  icon: "🏍️",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "Bike Racing",
  image: "https://static.playgama.com/p-img/pg/motorcycle-racer-road-mayhem/big_preview/172bc19cb4694ac3896516a315ee8499?width=448",
  gameUrl: "https://playgama.com/export/game/motorcycle-racer-road-mayhem?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/motorcycle-racer-road-mayhem",
  platform: ["Desktop", "Mobile"],
  orientation: "landscape",
  source: "Playgama",
  description: "An exciting motorcycle racing game featuring realistic bike physics. Race through busy city streets and highways, dodge traffic, unlock powerful motorcycles, and upgrade your bike to win races."
},


{
  id: 63,
  title: "Chrome Dino Game (Original)",
  genre: "Endless Runner",
  category: "Arcade",
  icon: "🦖",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "Classic",
  image: "https://static.playgama.com/p-img/pg/chrome-dino-run/big_preview/bd2b0efd118a40fcbdd8cc23569918c9?width=448",
  gameUrl: "https://playgama.com/export/game/chrome-dino-run?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/chrome-dino-run",
  platform: ["Desktop", "Mobile"],
  orientation: "both",
  source: "Playgama",
  description: "A classic-style endless dinosaur runner. Jump over cacti, duck under flying pterodactyls, avoid obstacles, and survive as long as possible while the game gets faster."
},


{
  id: 64,
  title: "Ragdoll Crash-Test: Throw and Break!",
  genre: "Ragdoll",
  category: "Puzzle",
  icon: "🧍",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "Physics",
  image: "https://static.playgama.com/p-img/pg/ragdoll-crashtest-throw-and-break/big-preview/806817717e62466a83cb4377d0fa92eb?width=448",
  gameUrl: "https://playgama.com/export/game/ragdoll-crashtest-throw-and-break?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/ragdoll-crashtest-throw-and-break",
  platform: ["Desktop", "Mobile"],
  orientation: "portrait",
  source: "Playgama",
  description: "A chaotic physics-based ragdoll puzzle game. Drag and launch a stickman into different objects, experiment with collisions, and create spectacular destruction across crash-test challenges."
},


{
  id: 65,
  title: "Big Wild Bucks: Voxel Buck Hunter",
  genre: "Hunting",
  category: "Action",
  icon: "🦌",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "3D Shooter",
  image: "https://static.playgama.com/p-img/pg/big-wild-bucks-voxel-buck-hunter/big_preview/5e52575c7b5841fc8c8a9968e134823f?width=448",
  gameUrl: "https://playgama.com/export/game/big-wild-bucks-voxel-buck-hunter?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/big-wild-bucks-voxel-buck-hunter",
  platform: ["Desktop", "Mobile"],
  orientation: "both",
  source: "Playgama",
  description: "A fast-paced first-person voxel hunting game. Hunt trophy bucks across changing environments, upgrade rifles and ammunition, collect rare animal coats, and unlock new biomes. Aim carefully and avoid shooting does."
},

{
  id: 66,
  title: "Schoolboy Runaway: Room Escape",
  genre: "Escape",
  category: "Adventure",
  icon: "🏃",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "Stealth",
  image: "https://static.playgama.com/p-img/pg/schoolboy-runaway-room-escape/big-preview/586c1992919f4498a268e78d7525e837?width=448",
  gameUrl: "https://playgama.com/export/game/schoolboy-runaway-room-escape?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/schoolboy-runaway-room-escape",
  platform: ["Desktop", "Mobile"],
  orientation: "landscape",
  source: "Playgama",
  description: "A 3D first-person stealth escape adventure. Explore the house, complete tasks from strict parents, search for hidden objects, avoid getting caught, and find a way to escape."
},

{
  id: 67,
  title: "Tank 1944",
  genre: "Tank Shooter",
  category: "Action",
  icon: "🪖",
  color: "turbo",
  rating: "Free",
  players: "1 Player",
  badge: "War",
  image: "https://static.playgama.com/p-img/pg/tank-1944/big-preview/2ca50ee78f6e4fe989cc3d01e77b0d31?width=448",
  gameUrl: "https://playgama.com/export/game/tank-1944?clid=p_d5690e8c-531c-4c8a-87e6-34f11440e1e5",
  playgamaUrl: "https://playgama.com/game/tank-1944",
  platform: ["Desktop", "Mobile"],
  orientation: "landscape",
  source: "Playgama",
  description: "Enter realistic tank battles in Tank 1944. Choose your tank, calculate your shots, develop battlefield tactics, and defeat enemy vehicles. Features realistic physics and detailed environments."
},



];



const categories = [
  { name: "All Games", icon: "" },
  { name: "Adventure", icon: "" },
  { name: "Strategy", icon: "" },
  { name: "Sandbox", icon: "" },
  { name: "Launcher", icon: "" },
  { name: "Survival", icon: "" },
  { name: "Simulation", icon: "" },
  { name: "Platformer", icon: "" },
  { name: "FPS", icon: "" },
  { name: "Space", icon: "" }
];

function Logo() {
  return (
    <a href="#home" className="brand" aria-label="ORQADE home">
      <span className="brand-symbol">O</span>
      <span>
        ORQ<span className="brand-accent">A</span>DE
      </span>
      <span className="brand-period">.</span>
    </a>
  );
}

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Games");
  const [activeNav, setActiveNav] = useState("Discover");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [deviceFilter, setDeviceFilter] = useState("All");
const [snakeOpen, setSnakeOpen] = useState(false);
const [runnerOpen, setRunnerOpen] = useState(false);
const [selectedGame, setSelectedGame] = useState(null);

const [gameLoading, setGameLoading] = useState(true);

useEffect(() => {
  if (!selectedGame) return;

  setGameLoading(true);
}, [selectedGame]);


const filteredGames = useMemo(() => {
  return games.filter((game) => {
    const matchesCategory =
      category === "All Games" ||
      [game.genre, game.category, ...(game.tags || [])]
        .some(value =>
          String(value || "").toLowerCase().trim() ===
          category.toLowerCase().trim()
        );

    const matchesSearch =
      !search ||
      game.title.toLowerCase().includes(search.toLowerCase()) ||
      game.genre?.toLowerCase().includes(search.toLowerCase()) ||
      game.category?.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });
}, [games, category, search]);




  const scrollToGames = () => {
    document.getElementById("games")?.scrollIntoView({ behavior: "smooth" });
  };


    return (
    <div className="site-shell" id="home">
      <header className="topbar">
    <div className="topbar-inner">
      <Logo />

          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle navigation"
          >
            {mobileMenu ? "✕" : "☰"}
          </button>

          
<nav className={`main-nav ${mobileMenu ? "nav-open" : ""}`}>
  {["Discover", "Browser Games", "Mobile & PC"].map((item) => (
    <a
      key={item}
      href={
        item === "Discover"
          ? "#discover"
          : item === "Mobile & PC"
          ? "#discover"
          : "#games"
      }
      className={activeNav === item ? "nav-link selected" : "nav-link"}
      onClick={() => {
        setActiveNav(item);
        setMobileMenu(false);

        if (item === "Browser Games") {
          setDeviceFilter("All");
          setCategory("All Games");
        }

        if (item === "Mobile & PC") {
          setDeviceFilter("All");
        }
      }}
    >
      {item}
    </a>
  ))}
</nav>


          <div className="topbar-actions">
            <span className="live-indicator"><i /> LIVE</span>
            <a href="#games" className="topbar-button">Explore games <span>↗</span></a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-background-grid" />
          <div className="hero-container">
            <div className="hero-copy">
              <div className="hero-kicker">
                <span className="kicker-line" />
                THE PLAYGROUND FOR EVERYONE
              </div>

              <h1>
                YOUR WORLD.
                <br />
                YOUR <span>GAME.</span>
              </h1>

              <p className="hero-description">
                Discover your next obsession. Play exciting browser games
                instantly, explore new worlds and find something worth playing.
              </p>

              <div className="hero-actions">
                <button className="button-primary" onClick={scrollToGames}>
                  Explore games <span>↗</span>
                </button>
                <a href="#discover" className="button-quiet">
                  Discover more <span>→</span>
                </a>
              </div>

              <div className="hero-stats">
                <div><strong>INSTANT</strong><span>Browser play</span></div>
                <div><strong>100s</strong><span>Worlds to explore</span></div>
                <div><strong>FREE</strong><span>To get started</span></div>
              </div>
            </div>

            <div className="hero-visual" aria-label="Featured fantasy game artwork">
              <div className="visual-ring ring-one" />
              <div className="visual-ring ring-two" />
              <div className="visual-glow" />
              <div className="visual-orb">🎮</div>
              <div className="visual-label label-top">
                <span className="label-dot" /> PLAY YOUR WAY
              </div>
              <div className="visual-label label-bottom">
                <span>✦</span> NEXT LEVEL FUN
              </div>
              <div className="visual-chip chip-left">⚡ ACTION</div>
              <div className="visual-chip chip-right">🏆 ARCADE</div>
            </div>
          </div>

          <div className="hero-marquee">
            <span>DISCOVER</span><b>✳</b>
            <span>PLAY</span><b>✳</b>
            <span>REPEAT</span><b>✳</b>
            <span>DISCOVER</span><b>✳</b>
            <span>PLAY</span><b>✳</b>
            <span>REPEAT</span>
          </div>
        </section>

        <section className="library-section" id="games">
          <div className="section-topline">
            <div>
              <div className="section-eyebrow">THE ORQADE LIBRARY / 001</div>
              <h2>Find your next <span>favourite.</span></h2>
              <p className="section-description">
                A world of games is waiting. Pick a category and jump in.
              </p>
            </div>
            <div className="library-count">
              <strong>{filteredGames.length.toString().padStart(2, "0")}</strong>
              <span>GAMES SHOWN</span>
            </div>
          </div>

          <div className="library-toolbar">
            <div className="category-tabs">
              {categories.map((item) => (
                <button
                  key={item.name}
                  className={category === item.name ? "category-tab active" : "category-tab"}
                  onClick={() => setCategory(item.name)}
                >
                  <span>{item.icon}</span> {item.name}
                </button>
              ))}
            </div>

            <label className="search-box">
              <span>⌕</span>
              <input
                type="search"
                placeholder="Search your next game..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              <kbd>⌘ K</kbd>
            </label>
          </div>

          <div className="games-grid">
            {filteredGames.map((game, index) => (
              <article className="game-card" key={game.id}>
  <button
    className={`game-cover cover-${game.color}`}
onClick={() => setSelectedGame(game)}
  >
                
                  {game.badge && <span className="game-badge">{game.badge}</span>}
                  <span className="cover-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="cover-art">
  {game.image ? (
    <img
      src={game.image}
      alt={game.title}
      className="game-cover-image"
    />
  ) : (
    game.icon
  )}
</span>
                  <span className="cover-play">▶</span>
                  <span className="cover-shine" />
                </button>

                <div className="game-card-details">
                  
                  <div className="game-title-row">
                    <div>
                      <h3>{game.title}</h3>
                      <span className="game-genre">{game.genre}</span>
                    </div>
                    <span className="game-rating">★ {game.rating}</span>
                  </div>
                  <div className="game-card-meta">
                    <span><i /> {game.players} players</span>
                    <span className="game-card-arrow">↗</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredGames.length === 0 && (
            <div className="no-results">
              <span>⌕</span>
              <h3>No games found</h3>
              <p>Try a different title or choose another category.</p>
              <button onClick={() => { setSearch(""); setCategory("All Games"); }}>
                Clear filters
              </button>
            </div>
          )}

          <div className="library-bottom">
            <span>SHOWING {filteredGames.length} OF {games.length} DEMO TITLES</span>
            <span>MORE WORLDS ARE COMING <b>✳</b></span>
          </div>
        </section>

<section className="discover-section" id="discover">
  <div className="discover-decoration">✳</div>

  <div className="discover-content">
    <div className="section-eyebrow">THE NEXT LEVEL / 002</div>

    <h2>
      Not just games.<br />
      <span>New worlds.</span>
    </h2>

    <p>
      Explore the wider gaming universe. Discover mobile and PC titles,
      find your next adventure and play instantly.
    </p>

    <a href="#games" className="button-primary">
      Explore the universe <span>↗</span>
    </a>
  </div>

  <div className="discover-panels">
    <a
      href="#games"
      className="discover-panel panel-mobile"
      onClick={() => {
        setCategory("All Games");
        setSearch("");
      }}
    >
      <span className="panel-icon">📱</span>
      <span className="panel-label">01 / MOBILE</span>
      <strong>Games on the go.</strong>
      <span className="panel-arrow">↗</span>
    </a>

    <a
      href="#games"
      className="discover-panel panel-pc"
      onClick={() => {
        setCategory("All Games");
        setSearch("");
      }}
    >
      <span className="panel-icon">🖥️</span>
      <span className="panel-label">02 / PC</span>
      <strong>Find your next world.</strong>
      <span className="panel-arrow">↗</span>
    </a>
  </div>
</section>


        <section className="newsletter-section">
          <div>
            <div className="section-eyebrow">STAY IN THE LOOP</div>
            <h2>Good games. <span>Good times.</span></h2>
            <p>More discoveries and new gaming experiences are on the way.</p>
          </div>
          <a href="#games" className="newsletter-link">Find a game <span>↗</span></a>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <div className="footer-main">
          <div className="footer-brand-column">
            <Logo />
            <p className="footer-about">
              A playground for curious players. Discover games, explore new
              worlds and find your next favourite experience.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">ig</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">yt</a>
              <a href="https://discord.com" target="_blank" rel="noreferrer" aria-label="Discord">dc</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>EXPLORE</h4>
            <a href="#games">All games</a>
            <a href="#games">Popular games</a>
            <a href="#games">New games</a>
            <a href="#discover">Mobile games</a>
            <a href="#discover">PC games</a>
          </div>

          <div className="footer-column">  <a href="#games">Action</a>
            <a href="#games">Adventure</a>
            <a href="#games">Racing</a>
            <a href="#games">Puzzle</a>
            <a href="#games">Arcade</a>
          </div>

          <div className="footer-column">
            <h4>ORQADE</h4>
            <a href="#home">About us</a>
            <a href="#footer">Contact</a>
            <a href="#footer">Submit a game</a>
            <a href="#footer">Advertise</a>
            <a href="#footer">Partnerships</a>
          </div>

          <div className="footer-column">
            <h4>LEGAL</h4>
            <a href="#footer">Privacy policy</a>
            <a href="#footer">Terms of use</a>
            <a href="#footer">Cookie policy</a>
            <a href="#footer">Copyright</a>
          </div>
        </div>

    <div className="footer-bottom">
  <span>© 2026 ORQADE. ALL RIGHTS RESERVED.</span>
  <span>BUILT FOR THE LOVE OF PLAY <b>✳</b></span>
  <a href="#home">BACK TO TOP ↑</a>
</div>
</footer>

{selectedGame && (
  <div className="game-player">

    <div className="game-player-header">
      <button onClick={() => setSelectedGame(null)}>
        ← Back to Games
      </button>

      <h2>{selectedGame.title}</h2>

      <button
        onClick={() =>
          document.getElementById("orqade-game-frame")
            ?.requestFullscreen()
        }
      >
        ⛶ Fullscreen
      </button>
    </div>

    <div className="game-frame">

      {gameLoading && (
        <div className="orqade-loader">
          <div className="orqade-spinner"></div>
          <h2>ORQADE</h2>
          <p>Loading your game...</p>
          <span>Please wait while the game starts</span>
        </div>
      )}

      <iframe
        id="orqade-game-frame"
        key={selectedGame.id}
       src={selectedGame.gameUrl}
        title={selectedGame.title}
        allowFullScreen
        allow="fullscreen; autoplay; gamepad"
        onLoad={() => setGameLoading(false)}
      />

    </div>

    <button
      className="external-fallback"
      onClick={() =>
        window.open(
          getGameUrl(selectedGame),
          "_blank",
          "noopener,noreferrer"
        )
      }
    >
      Game not loading? Open separately ↗
    </button>

  </div>
)}

{snakeOpen && (
  <NeonSnake onClose={() => setSnakeOpen(false)} />
)}

{runnerOpen && (
  <JungleRunner onClose={() => setRunnerOpen(false)} />
)}

    </div>
  );
}

export default App;

