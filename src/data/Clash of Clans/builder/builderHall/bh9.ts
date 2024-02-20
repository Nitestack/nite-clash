import { type HallType } from "@types";

export const bh9 = {
  //ARMY
  builderBarracks: {
    amount: 1,
    maxLevel: 11,
  },
  armyCamp: {
    maxLevel: 1,
    amount: 6,
  },
  starLaboratory: 1,
  reinforcementCamp: {
    maxLevel: 1,
    amount: 2,
  },
  healingHut: {
    amount: 1,
    maxLevel: 5,
  },
  //RESOURCE
  elixirStorage: 2,
  elixirCollector: 3,
  goldStorage: 2,
  goldMine: 3,
  gemMine: 1,
  clockTower: 1,
  //DEFENSE
  ottosOutpost: 1,
  cannon: 3,
  archerTower: 3,
  doubleCannon: 3,
  hiddenTesla: 3,
  firecrackers: 5,
  crusher: 2,
  guardPost: 1,
  airBombs: 1,
  multiMortar: 1,
  roaster: 1,
  giantCannon: 1,
  megaTesla: 1,
  lavaLauncher: 1,
  wall: 180,
  //TRAP
  pushTrap: 5,
  mine: 5,
  springTrap: {
    amount: 6,
    maxLevel: 4,
  },
  megaMine: 4,
  //HERO
  battleMachine: {
    amount: 1,
    maxLevel: 30,
  },
  battleCopter: {
    amount: 1,
    maxLevel: 30,
  },
  //TROOP
  ragedBarbarian: {
    amount: 1,
    maxLevel: 18,
  },
  sneakyArcher: {
    amount: 1,
    maxLevel: 18,
  },
  boxerGiant: {
    amount: 1,
    maxLevel: 18,
  },
  betaMinion: {
    amount: 1,
    maxLevel: 18,
  },
  bomber: {
    amount: 1,
    maxLevel: 18,
  },
  babyDragon: {
    amount: 1,
    maxLevel: 18,
  },
  cannonCart: {
    amount: 1,
    maxLevel: 18,
  },
  nightWitch: {
    amount: 1,
    maxLevel: 18,
  },
  dropShip: {
    amount: 1,
    maxLevel: 18,
  },
  powerPEKKA: {
    amount: 1,
    maxLevel: 18,
  },
  hogGlider: {
    amount: 1,
    maxLevel: 18,
  },
} satisfies HallType;
