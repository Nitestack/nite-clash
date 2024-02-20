import HomeDefense from "@coc/home/defenses/Defense";

export const airDefense = new HomeDefense({
  name: "Air Defense",
  id: "airDefense",
  levels: [
    {
      price: 22000,
      upgradeDuration: "3h",
    },
    {
      price: 90000,
      upgradeDuration: "12h",
    },
    {
      price: 270000,
      upgradeDuration: "16h",
    },
    {
      price: 500000,
      upgradeDuration: "1d",
    },
    {
      price: 1000000,
      upgradeDuration: "1d 12h",
    },
    {
      price: 1350000,
      upgradeDuration: "2d",
    },
    {
      price: 1750000,
      upgradeDuration: "3d",
    },
    {
      price: 3000000,
      upgradeDuration: "4d 6h",
    },
    {
      price: 4200000,
      upgradeDuration: "6d 6h",
    },
    {
      price: 5800000,
      upgradeDuration: "8d 18h",
    },
    {
      price: 8400000,
      upgradeDuration: "9d 12h",
    },
    {
      price: 17000000,
      upgradeDuration: "17d",
    },
    {
      price: 19500000,
      upgradeDuration: "18d",
    },
  ],
});
