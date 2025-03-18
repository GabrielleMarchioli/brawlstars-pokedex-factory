// brawlersData.ts
import shellyImg from "../img/shelly.png";
import coltImg from "../img/colt.png";
import spikeImg from "../img/spike.png";
import leonImg from "../img/leon.png";
import boImg from "../img/bo.png";
import piperImg from "../img/piper.png";
import jessieImg from "../img/jessie.png";
import elprimoImg from "../img/elprimo.png";
import mortisImg from "../img/mortis.png";
import crowImg from "../img/corvo.png";
import pocoImg from "../img/poco.png";
import edgarImg from "../img/edgar.png";

export interface Brawler {
  id: number;
  name: string;
  description: string;
  image: string; // O tipo permanece string porque o bundler resolve o import como uma URL
  rarity: string;
  power: number;
  health: number;
  attack: number;
  super: string;
  superDescription: string;
}

const brawlers: Brawler[] = [
  {
    id: 1,
    name: "Shelly",
    description: "Shelly's spread-fire shotgun deals heavy damage up close but gets less punchy at a distance.",
    image: shellyImg,
    rarity: "Common",
    power: 11,
    health: 5600,
    attack: 2100,
    super: "Super Shell",
    superDescription: "Shelly's SUPER shell obliterates both cover and enemies. The bigger the spread, the less damage each shell fragment deals."
  },
  {
    id: 2,
    name: "Colt",
    description: "Colt fires six straight shots from his dual pistols.",
    image: coltImg,
    rarity: "Common",
    power: 9,
    health: 3920,
    attack: 1680,
    super: "Bullet Storm",
    superDescription: "Colt rapid-fires twice as many bullets, breaking cover and hitting enemies that would normally be behind it."
  },
  {
    id: 3,
    name: "Spike",
    description: "Spike throws cactus grenades that split into six needles that pop out in all directions.",
    image: spikeImg,
    rarity: "Legendary",
    power: 10,
    health: 3360,
    attack: 2240,
    super: "Stick Around!",
    superDescription: "Spike's sticky spikeball bursts into a field of spikes that slows down and damages enemies caught in it."
  },
  {
    id: 4,
    name: "Leon",
    description: "Leon fires four blades in rapid succession. The blades deal more damage the closer Leon is to his target.",
    image: leonImg,
    rarity: "Legendary",
    power: 11,
    health: 4480,
    attack: 2520,
    super: "Smoke Bomb",
    superDescription: "Leon turns himself invisible for a short time. Invisible Leon won't be revealed when attacking."
  },
  {
    id: 5,
    name: "Bo",
    description: "Bo fires three explosive arrows that can blast over obstacles. His arrows can reveal stealthy enemies.",
    image: boImg,
    rarity: "Super Rare",
    power: 8,
    health: 4480,
    attack: 1680,
    super: "Snare a Bear",
    superDescription: "Bo places three mines that explode on contact, stunning nearby enemies for a short time."
  },
  {
    id: 6,
    name: "Piper",
    description: "Piper's bullets deal more damage the further they travel. Her Super allows her to jump away to safety.",
    image: piperImg,
    rarity: "Epic",
    power: 7,
    health: 3360,
    attack: 2800,
    super: "Poppin'",
    superDescription: "Piper leaps away and throws a handful of grenades that each deal area damage around them."
  },
  {
    id: 7,
    name: "Jessie",
    description: "Jessie's energy orb bounces from one enemy to the next, dealing the same damage to each target.",
    image: jessieImg,
    rarity: "Rare",
    power: 10,
    health: 4480,
    attack: 1680,
    super: "Scrappy!",
    superDescription: "Jessie deploys a gun turret that automatically fires at enemies. The turret can be repaired by Jessie's attacks."
  },
  {
    id: 8,
    name: "El Primo",
    description: "El Primo throws a rapid flurry of punches at close range. His Super is a high-flying elbow drop.",
    image: elprimoImg,
    rarity: "Rare",
    power: 8,
    health: 8400,
    attack: 1800,
    super: "Flying Elbow Drop",
    superDescription: "El Primo jumps forward, damaging and knocking back any enemies he lands on."
  },
  {
    id: 9,
    name: "Mortis",
    description: "Mortis dashes forward with each attack, dealing damage to enemies in his path.",
    image: mortisImg,
    rarity: "Mythic",
    power: 9,
    health: 5040,
    attack: 1260,
    super: "Life Blood",
    superDescription: "Mortis sends supernatural bats to attack enemies, dealing damage and healing himself for each enemy hit."
  },
  {
    id: 10,
    name: "Crow",
    description: "Crow throws a trio of poisoned daggers. Enemies hit by the daggers will also take damage over time for a while.",
    image: crowImg,
    rarity: "Legendary",
    power: 10,
    health: 3360,
    attack: 1680,
    super: "Swoop",
    superDescription: "Crow leaps through the air and lands, throwing daggers in all directions both when jumping and landing."
  },
  {
    id: 11,
    name: "Poco",
    description: "Poco fires damaging sound waves at multiple enemies. His Super can heal both himself and teammates.",
    image: pocoImg,
    rarity: "Rare",
    power: 9,
    health: 5600,
    attack: 1400,
    super: "Encore",
    superDescription: "Poco releases a healing melody that can heal himself and teammates within a large area."
  },
  {
    id: 12,
    name: "Edgar",
    description: "Looking mysterious and not really interested in getting involved, Edgar prefers to throw punches with his scarf. With his Super, Edgar jumps into combat brandishing the scarf around him.",
    image: edgarImg,
    rarity: "Epic",
    power: 7,
    health: 3920,
    attack: 1540,
    super: "Vault",
    superDescription: "Edgar leaps over walls and charges at enemies, dealing damage and healing himself slightly with each hit."
  }
];

export default brawlers;