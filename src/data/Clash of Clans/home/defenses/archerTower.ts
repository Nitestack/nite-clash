import HomeDefense from "@coc/home/defenses/Defense";

export const archerTower = new HomeDefense({
  name: "Archer Tower",
  id: "archerTower",
  levels: [
    {
      price: 1000,
      upgradeDuration: "1m",
    },
    {
      price: 2000,
      upgradeDuration: "15m",
    },
    {
      price: 5000,
      upgradeDuration: "45m",
    },
    {
      price: 20000,
      upgradeDuration: "3h",
    },
    {
      price: 80000,
      upgradeDuration: "5h",
    },
    {
      price: 180000,
      upgradeDuration: "8h",
    },
    {
      price: 360000,
      upgradeDuration: "10h",
    },
    {
      price: 600000,
      upgradeDuration: "12h",
    },
    {
      price: 800000,
      upgradeDuration: "14h",
    },
    {
      price: 1000000,
      upgradeDuration: "18h",
    },
    {
      price: 1200000,
      upgradeDuration: "1d",
    },
    {
      price: 1500000,
      upgradeDuration: "1d 6h",
    },
    {
      price: 2000000,
      upgradeDuration: "2d 6h",
    },
    {
      price: 2500000,
      upgradeDuration: "3d 12h",
    },
    {
      price: 3500000,
      upgradeDuration: "5d",
    },
    {
      price: 4700000,
      upgradeDuration: "5d 12h",
    },
    {
      price: 6100000,
      upgradeDuration: "7d 12h",
    },
    {
      price: 6800000,
      upgradeDuration: "9d",
    },
    {
      price: 8000000,
      upgradeDuration: "9d 12h",
    },
    {
      price: 16500000,
      upgradeDuration: "16d 6h",
    },
    {
      price: 18500000,
      upgradeDuration: "17d",
    },
  ],
});
