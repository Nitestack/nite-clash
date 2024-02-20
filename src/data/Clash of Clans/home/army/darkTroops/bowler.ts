import HomeOffense from "@coc/home/army";

export const bowler = new HomeOffense({
  name: "Bowler",
  id: "bowler",
  type: "darkTroop",
  costType: "darkElixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Dark Barracks Lv. 7",
    },
    {
      price: 65000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 88000,
      upgradeDuration: "5d",
      requiredLabLevel: 9,
    },
    {
      price: 125000,
      upgradeDuration: "7d 12h",
      requiredLabLevel: 10,
    },
    {
      price: 170000,
      upgradeDuration: "9d",
      requiredLabLevel: 11,
    },
    {
      price: 305000,
      upgradeDuration: "16d 18h",
      requiredLabLevel: 12,
    },
    {
      price: 335000,
      upgradeDuration: "17d 12h",
      requiredLabLevel: 13,
    },
  ],
});
