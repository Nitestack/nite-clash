import { type HallType } from "@types";

export const bh2 = {
  //ARMY
  builderBarracks: 1,
  armyCamp: {
    maxLevel: 1,
    amount: 2,
  },
  starLaboratory: 1,
  //RESOURCE
  elixirCollector: {
    amount: 1,
    maxLevel: 1,
  },
  goldMine: {
    amount: 1,
    maxLevel: 1,
  },
  //DEFENSE
  cannon: {
    amount: 1,
    maxLevel: 1,
  },
  archerTower: {
    amount: 1,
    maxLevel: 1,
  },
  doubleCannon: {
    amount: 1,
    maxLevel: 1,
  },
  wall: {
    amount: 20,
    maxLevel: 1,
  },
  //TRAP
  pushTrap: {
    amount: 1,
    maxLevel: 1,
  },
  //TROOP
  ragedBarbarian: {
    amount: 1,
    maxLevel: 4,
  },
  sneakyArcher: {
    amount: 1,
    maxLevel: 4,
  },
} satisfies HallType;
