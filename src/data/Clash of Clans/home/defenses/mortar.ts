import HomeDefense from "@coc/home/defenses/Defense";

export const mortar = new HomeDefense({
  name: "Mortar",
  id: "mortar",
  levels: [
    {
      price: 5000,
      upgradeDuration: "3h",
    },
    {
      price: 25000,
      upgradeDuration: "6h",
    },
    {
      price: 100000,
      upgradeDuration: "12h",
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
      price: 750000,
      upgradeDuration: "2d 12h",
    },
    {
      price: 1500000,
      upgradeDuration: "3d",
    },
    {
      price: 2500000,
      upgradeDuration: "3d 6h",
    },
    {
      price: 3500000,
      upgradeDuration: "4d 6h",
    },
    {
      price: 4800000,
      upgradeDuration: "5d 12h",
    },
    {
      price: 5800000,
      upgradeDuration: "7d 12h",
    },
    {
      price: 6500000,
      upgradeDuration: "8d 18h",
    },
    {
      price: 8200000,
      upgradeDuration: "9d 12h",
    },
    {
      price: 16500000,
      upgradeDuration: "17d",
    },
    {
      price: 19000000,
      upgradeDuration: "18d",
    },
  ],
});
