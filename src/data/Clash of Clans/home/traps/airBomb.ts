import HomeTrap from "@coc/home/traps/Trap";

export const airBomb = new HomeTrap({
  name: "Air Bomb",
  id: "airBomb",
  levels: [
    {
      price: 4000,
      upgradeDuration: "0s",
    },
    {
      price: 20000,
      upgradeDuration: "4h",
    },
    {
      price: 200000,
      upgradeDuration: "12h",
    },
    {
      price: 600000,
      upgradeDuration: "1d",
    },
    {
      price: 1400000,
      upgradeDuration: "2d",
    },
    {
      price: 1900000,
      upgradeDuration: "2d 12h",
    },
    {
      price: 2400000,
      upgradeDuration: "3d 12h",
    },
    {
      price: 3000000,
      upgradeDuration: "4d 6h",
    },
    {
      price: 6500000,
      upgradeDuration: "8d 12h",
    },
    {
      price: 9000000,
      upgradeDuration: "9d",
    },
  ],
});
