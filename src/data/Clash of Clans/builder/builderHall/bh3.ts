import { type HallType } from "@types";

export const bh3 = {
  //ARMY
  builderBarracks: {
    amount: 1,
    maxLevel: 4,
  },
  armyCamp: {
    maxLevel: 1,
    amount: 3,
  },
  starLaboratory: 1,
  //RESOURCE
  elixirStorage: 1,
  elixirCollector: 1,
  goldStorage: 1,
  goldMine: 1,
  gemMine: 1,
  //DEFENSE
  cannon: 2,
  archerTower: 1,
  doubleCannon: 1,
  hiddenTesla: 1,
  firecrackers: 1,
  crusher: 1,
  wall: 50,
  //TRAP
  pushTrap: 2,
  mine: 2,
  springTrap: {
    amount: 2,
    maxLevel: 1,
  },
  //TROOP
  ragedBarbarian: {
    amount: 1,
    maxLevel: 6,
  },
  sneakyArcher: {
    amount: 1,
    maxLevel: 6,
  },
  boxerGiant: {
    amount: 1,
    maxLevel: 6,
  },
  betaMinion: {
    amount: 1,
    maxLevel: 6,
  },
} satisfies HallType;
