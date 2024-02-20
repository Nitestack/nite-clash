import { type HallType } from "@types";

export const bh6 = {
  //ARMY
  builderBarracks: {
    amount: 1,
    maxLevel: 8,
  },
  armyCamp: {
    maxLevel: 1,
    amount: 5,
  },
  starLaboratory: 1,
  reinforcementCamp: {
    maxLevel: 1,
    amount: 1,
  },
  healingHut: {
    amount: 1,
    maxLevel: 2,
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
  cannon: 2,
  archerTower: 3,
  doubleCannon: 2,
  hiddenTesla: 2,
  firecrackers: 2,
  crusher: 2,
  guardPost: 1,
  airBombs: 1,
  multiMortar: 1,
  roaster: 1,
  wall: 120,
  //TRAP
  pushTrap: 4,
  mine: 5,
  springTrap: {
    amount: 3,
    maxLevel: 3,
  },
  megaMine: 2,
  //HERO
  battleMachine: {
    amount: 1,
    maxLevel: 10,
  },
  //TROOP
  ragedBarbarian: {
    amount: 1,
    maxLevel: 12,
  },
  sneakyArcher: {
    amount: 1,
    maxLevel: 12,
  },
  boxerGiant: {
    amount: 1,
    maxLevel: 12,
  },
  betaMinion: {
    amount: 1,
    maxLevel: 12,
  },
  bomber: {
    amount: 1,
    maxLevel: 12,
  },
  babyDragon: {
    amount: 1,
    maxLevel: 12,
  },
  cannonCart: {
    amount: 1,
    maxLevel: 12,
  },
  nightWitch: {
    amount: 1,
    maxLevel: 12,
  },
} satisfies HallType;
