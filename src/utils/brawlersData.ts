
export interface Brawler {
  id: number;
  name: string;
  description: string;
  image: string;
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
    image: "https://raw.githubusercontent.com/drawcodedev/brawl-stars-assets/master/brawlers/shelly/model.png",
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
    image: "https://raw.githubusercontent.com/drawcodedev/brawl-stars-assets/master/brawlers/colt/model.png",
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
    image: "https://raw.githubusercontent.com/drawcodedev/brawl-stars-assets/master/brawlers/spike/model.png",
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
    image: "https://raw.githubusercontent.com/drawcodedev/brawl-stars-assets/master/brawlers/leon/model.png",
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
    image: "https://raw.githubusercontent.com/drawcodedev/brawl-stars-assets/master/brawlers/bo/model.png",
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
    image: "https://raw.githubusercontent.com/drawcodedev/brawl-stars-assets/master/brawlers/piper/model.png",
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
    image: "https://raw.githubusercontent.com/drawcodedev/brawl-stars-assets/master/brawlers/jessie/model.png",
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
    image: "https://raw.githubusercontent.com/drawcodedev/brawl-stars-assets/master/brawlers/el-primo/model.png",
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
    image: "https://raw.githubusercontent.com/drawcodedev/brawl-stars-assets/master/brawlers/mortis/model.png",
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
    image: "https://raw.githubusercontent.com/drawcodedev/brawl-stars-assets/master/brawlers/crow/model.png",
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
    image: "https://raw.githubusercontent.com/drawcodedev/brawl-stars-assets/master/brawlers/poco/model.png",
    rarity: "Rare",
    power: 9,
    health: 5600,
    attack: 1400,
    super: "Encore",
    superDescription: "Poco releases a healing melody that can heal himself and teammates within a large area."
  },
  {
    id: 12,
    name: "Brock",
    description: "Brock fires powerful rockets with a small area of effect. His Super is a barrage of rockets that deals massive area damage.",
    image: "https://raw.githubusercontent.com/drawcodedev/brawl-stars-assets/master/brawlers/brock/model.png",
    rarity: "Epic",
    power: 7,
    health: 3920,
    attack: 1540,
    super: "Rocket Rain",
    superDescription: "Brock fires a barrage of rockets that destroy cover and deal high damage in a large area."
  }
];

export default brawlers;
