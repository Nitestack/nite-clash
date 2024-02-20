import { type HallType } from "@types";

export const bh4 = {
  //ARMY
  builderBarracks: {
    amount: 1,
    maxLevel: 6,
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
  doubleCannon: 1,
  hiddenTesla: 1,
  firecrackers: 1,
  crusher: 1,
  guardPost: 1,
  airBombs: 1,
  wall: 75,
  //TRAP
  pushTrap: 3,
  mine: 3,
  springTrap: {
    amount: 2,
    maxLevel: 2,
  },
  megaMine: 1,
  //TROOP
  ragedBarbarian: {
    amount: 1,
    maxLevel: 8,
  },
  sneakyArcher: {
    amount: 1,
    maxLevel: 8,
  },
  boxerGiant: {
    amount: 1,
    maxLevel: 8,
  },
  betaMinion: {
    amount: 1,
    maxLevel: 8,
  },
  bomber: {
    amount: 1,
    maxLevel: 8,
  },
  babyDragon: {
    amount: 1,
    maxLevel: 8,
  },
} satisfies HallType;
