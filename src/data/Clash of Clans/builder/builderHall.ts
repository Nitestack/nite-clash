import Base from "@coc/Base";
import type { ClashOfClansInfoLevel } from "@coc/Base";

export const builderHall = new Base({
  name: "Builder Hall",
  id: "builderHall",
  baseImageUrl: "Builder/Builder Hall",
  village: "builder",
  type: "hall",
  levels: (
    [
      {
        price: 0,
        upgradeDuration: "0s",
      },
      {
        price: 3500,
        upgradeDuration: "5s",
      },
      {
        price: 30000,
        upgradeDuration: "1h",
      },
      {
        price: 200000,
        upgradeDuration: "1d",
      },
      {
        price: 400000,
        upgradeDuration: "2d",
      },
      {
        price: 1200000,
        upgradeDuration: "3d",
      },
      {
        price: 1800000,
        upgradeDuration: "4d",
      },
      {
        price: 2800000,
        upgradeDuration: "5d",
      },
      {
        price: 3800000,
        upgradeDuration: "6d",
      },
      {
        price: 4800000,
        upgradeDuration: "7d",
      },
    ] satisfies ClashOfClansInfoLevel[]
  ).map((level) => ({
    ...level,
    costType: "builderGold",
  })),
});
