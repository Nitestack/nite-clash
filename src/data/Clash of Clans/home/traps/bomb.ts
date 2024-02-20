import HomeTrap from "@coc/home/traps/Trap";

export const bomb = new HomeTrap({
  name: "Bomb",
  id: "bomb",
  levels: [
    {
      price: 400,
      upgradeDuration: "0s",
    },
    {
      price: 1000,
      upgradeDuration: "6m",
    },
    {
      price: 10000,
      upgradeDuration: "2h",
    },
    {
      price: 100000,
      upgradeDuration: "8h",
    },
    {
      price: 300000,
      upgradeDuration: "18h",
    },
    {
      price: 500000,
      upgradeDuration: "1d 12h",
    },
    {
      price: 850000,
      upgradeDuration: "2d 12h",
    },
    {
      price: 1400000,
      upgradeDuration: "2d 18h",
    },
    {
      price: 2400000,
      upgradeDuration: "3d 12h",
    },
    {
      price: 5500000,
      upgradeDuration: "7d 12h",
    },
    {
      price: 8000000,
      upgradeDuration: "8d",
    },
  ],
});
