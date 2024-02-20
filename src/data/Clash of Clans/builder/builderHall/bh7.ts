import { type HallType } from "@types";

export const bh7 = {
  //ARMY
  builderBarracks: {
    amount: 1,
    maxLevel: 9,
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
    maxLevel: 3,
  },
  //RESOURCE
  elixirStorage: 2,
  elixirCollector: 2,
  goldStorage: 2,
  goldMine: 2,
  gemMine: 1,
  clockTower: 1,
  //DEFENSE
  ottosOutpost: 1,
  cannon: 3,
  archerTower: 3,
  doubleCannon: 2,
  hiddenTesla: 3,
  firecrackers: 3,
  crusher: 2,
  guardPost: 1,
  airBombs: 1,
  multiMortar: 1,
  roaster: 1,
  giantCannon: 1,
  wall: 140,
  //TRAP
  pushTrap: 5,
  mine: 5,
  springTrap: {
    amount: 4,
    maxLevel: 3,
  },
  megaMine: 2,
  //HERO
  battleMachine: {
    amount: 1,
    maxLevel: 20,
  },
  //TROOP
  ragedBarbarian: {
    amount: 1,
    maxLevel: 14,
  },
  sneakyArcher: {
    amount: 1,
    maxLevel: 14,
  },
  boxerGiant: {
    amount: 1,
    maxLevel: 14,
  },
  betaMinion: {
    amount: 1,
    maxLevel: 14,
  },
  bomber: {
    amount: 1,
    maxLevel: 14,
  },
  babyDragon: {
    amount: 1,
    maxLevel: 14,
  },
  cannonCart: {
    amount: 1,
    maxLevel: 14,
  },
  nightWitch: {
    amount: 1,
    maxLevel: 14,
  },
  dropShip: {
    amount: 1,
    maxLevel: 14,
  },
} satisfies HallType;
