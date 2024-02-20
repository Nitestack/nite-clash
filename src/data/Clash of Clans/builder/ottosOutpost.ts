import Base from "@coc/Base";
import type { ClashOfClansInfoLevel } from "@coc/Base";

export const ottosOutpost = new Base({
  name: "O.T.T.O's Outpost",
  id: "ottosOutpost",
  baseImageUrl: "Builder/O.T.T.O's Outpost",
  village: "builder",
  type: "defense",
  levels: (
    [
      {
        price: 0,
        upgradeDuration: "0s",
      },
      {
        price: 1000000,
        upgradeDuration: "1d",
      },
      {
        price: 1250000,
        upgradeDuration: "2d",
      },
      {
        price: 1500000,
        upgradeDuration: "3d",
      },
      {
        price: 1750000,
        upgradeDuration: "4d",
      },
      {
        price: 2000000,
        upgradeDuration: "5d",
      },
      {
        price: 3000000,
        upgradeDuration: "7d",
      },
      {
        price: 4000000,
        upgradeDuration: "9d",
      },
      {
        price: 5000000,
        upgradeDuration: "10d",
      },
      {
        price: 6000000,
        upgradeDuration: "11d",
      },
    ] satisfies ClashOfClansInfoLevel[]
  ).map((level) => ({
    ...level,
    costType: "builderGold",
  })),
});
