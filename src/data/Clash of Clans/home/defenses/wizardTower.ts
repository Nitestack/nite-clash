import HomeDefense from "@coc/home/defenses/Defense";

export const wizardTower = new HomeDefense({
  name: "Wizard Tower",
  id: "wizardTower",
  levels: [
    {
      price: 120000,
      upgradeDuration: "3h",
    },
    {
      price: 220000,
      upgradeDuration: "8h",
    },
    {
      price: 420000,
      upgradeDuration: "12h",
    },
    {
      price: 720000,
      upgradeDuration: "18h",
    },
    {
      price: 920000,
      upgradeDuration: "1d",
    },
    {
      price: 1200000,
      upgradeDuration: "1d 12h",
    },
    {
      price: 2200000,
      upgradeDuration: "2d",
    },
    {
      price: 2700000,
      upgradeDuration: "3d",
    },
    {
      price: 3700000,
      upgradeDuration: "5d 6h",
    },
    {
      price: 5200000,
      upgradeDuration: "6d 12h",
    },
    {
      price: 7200000,
      upgradeDuration: "9d",
    },
    {
      price: 9200000,
      upgradeDuration: "9d 12h",
    },
    {
      price: 10200000,
      upgradeDuration: "10d",
    },
    {
      price: 17200000,
      upgradeDuration: "17d",
    },
    {
      price: 19200000,
      upgradeDuration: "18d",
    },
  ],
});
