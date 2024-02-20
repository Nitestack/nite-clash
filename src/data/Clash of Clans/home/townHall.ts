import Base from "@coc/Base";
import type { ClashOfClansInfoLevel } from "@coc/Base";

export const townHall = new Base({
  name: "Town Hall",
  id: "townHall",
  baseImageUrl: "Home/Town Hall",
  village: "home",
  type: "hall",
  levels: (
    [
      {
        price: 0,
        upgradeDuration: "0s",
      },
      {
        price: 1000,
        upgradeDuration: "10s",
      },
      {
        price: 4000,
        upgradeDuration: "1h",
      },
      {
        price: 25000,
        upgradeDuration: "3h",
      },
      {
        price: 150000,
        upgradeDuration: "6h",
      },
      {
        price: 750000,
        upgradeDuration: "12h",
      },
      {
        price: 1000000,
        upgradeDuration: "18h",
      },
      {
        price: 2000000,
        upgradeDuration: "1d",
      },
      {
        price: 3000000,
        upgradeDuration: "2d",
      },
      {
        price: 3500000,
        upgradeDuration: "2d 12h",
      },
      {
        price: 4000000,
        upgradeDuration: "2d 18h",
      },
      {
        price: 6000000,
        upgradeDuration: "4d 6h",
      },
      {
        price: 9000000,
        upgradeDuration: "7d 12h",
      },
      {
        price: 15000000,
        upgradeDuration: "13d 6h",
      },
      {
        price: 18000000,
        upgradeDuration: "15d",
      },
    ] satisfies ClashOfClansInfoLevel[]
  ).map((level) => ({
    ...level,
    costType: "gold",
  })),
});
