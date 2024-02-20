import HomeTrap from "@coc/home/traps/Trap";

export const giantBomb = new HomeTrap({
  name: "Giant Bomb",
  id: "giantBomb",
  levels: [
    {
      price: 12500,
      upgradeDuration: "0s",
    },
    {
      price: 75000,
      upgradeDuration: "6h",
    },
    {
      price: 600000,
      upgradeDuration: "1d",
    },
    {
      price: 2000000,
      upgradeDuration: "3d",
    },
    {
      price: 2500000,
      upgradeDuration: "3d 12h",
    },
    {
      price: 3000000,
      upgradeDuration: "4d 6h",
    },
    {
      price: 4200000,
      upgradeDuration: "5d 12h",
    },
    {
      price: 8500000,
      upgradeDuration: "10d 12h",
    },
    {
      price: 10500000,
      upgradeDuration: "12d",
    },
  ],
});
