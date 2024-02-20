import HomeDefense from "@coc/home/defenses/Defense";

export const bombTower = new HomeDefense({
  name: "Bomb Tower",
  id: "bombTower",
  levels: [
    {
      price: 800000,
      upgradeDuration: "1d",
    },
    {
      price: 1200000,
      upgradeDuration: "1d 12h",
    },
    {
      price: 1800000,
      upgradeDuration: "2d",
    },
    {
      price: 2600000,
      upgradeDuration: "3d 12h",
    },
    {
      price: 3500000,
      upgradeDuration: "4d 6h",
    },
    {
      price: 5000000,
      upgradeDuration: "6d 6h",
    },
    {
      price: 6300000,
      upgradeDuration: "9d",
    },
    {
      price: 8800000,
      upgradeDuration: "10d",
    },
    {
      price: 17500000,
      upgradeDuration: "17d",
    },
    {
      price: 20000000,
      upgradeDuration: "18d",
    },
  ],
});
