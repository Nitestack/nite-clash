import HomeOffense from "@coc/home/army";

export const minion = new HomeOffense({
  name: "Minion",
  id: "minion",
  type: "darkTroop",
  costType: "darkElixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Dark Barracks Lv. 1",
    },
    {
      price: 3000,
      upgradeDuration: "8h",
      requiredLabLevel: 5,
    },
    {
      price: 7000,
      upgradeDuration: "16h",
      requiredLabLevel: 6,
    },
    {
      price: 15000,
      upgradeDuration: "1d",
      requiredLabLevel: 6,
    },
    {
      price: 25000,
      upgradeDuration: "2d",
      requiredLabLevel: 7,
    },
    {
      price: 35000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 63000,
      upgradeDuration: "5d",
      requiredLabLevel: 9,
    },
    {
      price: 95000,
      upgradeDuration: "9d",
      requiredLabLevel: 10,
    },
    {
      price: 150000,
      upgradeDuration: "10d",
      requiredLabLevel: 11,
    },
    {
      price: 285000,
      upgradeDuration: "15d 12h",
      requiredLabLevel: 12,
    },
    {
      price: 310000,
      upgradeDuration: "16d 12h",
      requiredLabLevel: 13,
    },
  ],
});
