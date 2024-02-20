import { type HallType } from "@types";

export const bh8 = {
  //ARMY
  builderBarracks: {
    amount: 1,
    maxLevel: 10,
  },
  armyCamp: {
    maxLevel: 1,
    amount: 6,
  },
  starLaboratory: 1,
  reinforcementCamp: {
    maxLevel: 1,
    amount: 1,
  },
  healingHut: {
    amount: 1,
    maxLevel: 4,
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
  firecrackers: 4,
  crusher: 2,
  guardPost: 1,
  airBombs: 1,
  multiMortar: 1,
  roaster: 1,
  giantCannon: 1,
  megaTesla: 1,
  wall: 160,
  //TRAP
  pushTrap: 5,
  mine: 5,
  springTrap: {
    amount: 5,
    maxLevel: 4,
  },
  megaMine: 3,
  //HERO
  battleMachine: {
    amount: 1,
    maxLevel: 25,
  },
  battleCopter: {
    amount: 1,
    maxLevel: 25,
  },
  //TROOP
  ragedBarbarian: {
    amount: 1,
    maxLevel: 16,
  },
  sneakyArcher: {
    amount: 1,
    maxLevel: 16,
  },
  boxerGiant: {
    amount: 1,
    maxLevel: 16,
  },
  betaMinion: {
    amount: 1,
    maxLevel: 16,
  },
  bomber: {
    amount: 1,
    maxLevel: 16,
  },
  babyDragon: {
    amount: 1,
    maxLevel: 16,
  },
  cannonCart: {
    amount: 1,
    maxLevel: 16,
  },
  nightWitch: {
    amount: 1,
    maxLevel: 16,
  },
  dropShip: {
    amount: 1,
    maxLevel: 16,
  },
  powerPEKKA: {
    amount: 1,
    maxLevel: 16,
  },
} satisfies HallType;
