import { type HallType } from "@types";

export const bh5 = {
  //ARMY
  builderBarracks: {
    amount: 1,
    maxLevel: 7,
  },
  armyCamp: {
    maxLevel: 1,
    amount: 4,
  },
  starLaboratory: 1,
  //RESOURCE
  elixirStorage: 1,
  elixirCollector: 1,
  goldStorage: 1,
  goldMine: 1,
  gemMine: 1,
  clockTower: 1,
  //DEFENSE
  cannon: 2,
  archerTower: 2,
  doubleCannon: 2,
  hiddenTesla: 1,
  firecrackers: 2,
  crusher: 1,
  guardPost: 1,
  airBombs: 1,
  multiMortar: 1,
  wall: 100,
  //TRAP
  pushTrap: 4,
  mine: 4,
  springTrap: {
    amount: 3,
    maxLevel: 2,
  },
  megaMine: 1,
  //HERO
  battleMachine: {
    amount: 1,
    maxLevel: 5,
  },
  //TROOP
  ragedBarbarian: {
    amount: 1,
    maxLevel: 10,
  },
  sneakyArcher: {
    amount: 1,
    maxLevel: 10,
  },
  boxerGiant: {
    amount: 1,
    maxLevel: 10,
  },
  betaMinion: {
    amount: 1,
    maxLevel: 10,
  },
  bomber: {
    amount: 1,
    maxLevel: 10,
  },
  babyDragon: {
    amount: 1,
    maxLevel: 10,
  },
  cannonCart: {
    amount: 1,
    maxLevel: 10,
  },
} satisfies HallType;
