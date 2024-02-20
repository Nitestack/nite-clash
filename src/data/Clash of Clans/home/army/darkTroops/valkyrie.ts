import HomeOffense from "@coc/home/army";

export const valkyrie = new HomeOffense({
  name: "Valkyrie",
  id: "valkyrie",
  type: "darkTroop",
  costType: "darkElixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Dark Barracks Lv. 3",
    },
    {
      price: 8000,
      upgradeDuration: "1d",
      requiredLabLevel: 6,
    },
    {
      price: 12000,
      upgradeDuration: "2d",
      requiredLabLevel: 7,
    },
    {
      price: 25000,
      upgradeDuration: "3d",
      requiredLabLevel: 7,
    },
    {
      price: 38000,
      upgradeDuration: "4d 6h",
      requiredLabLevel: 8,
    },
    {
      price: 63000,
      upgradeDuration: "5d 6h",
      requiredLabLevel: 9,
    },
    {
      price: 110000,
      upgradeDuration: "7d",
      requiredLabLevel: 10,
    },
    {
      price: 155000,
      upgradeDuration: "10d",
      requiredLabLevel: 11,
    },
    {
      price: 295000,
      upgradeDuration: "16d 6h",
      requiredLabLevel: 12,
    },
    {
      price: 320000,
      upgradeDuration: "17d",
      requiredLabLevel: 13,
    },
  ],
});
