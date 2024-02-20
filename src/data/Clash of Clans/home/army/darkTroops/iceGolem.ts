import HomeOffense from "@coc/home/army";

export const iceGolem = new HomeOffense({
  name: "Ice Golem",
  id: "iceGolem",
  type: "darkTroop",
  costType: "darkElixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Dark Barracks Lv. 8",
    },
    {
      price: 55000,
      upgradeDuration: "2d 20h",
      requiredLabLevel: 9,
    },
    {
      price: 85000,
      upgradeDuration: "5d",
      requiredLabLevel: 9,
    },
    {
      price: 100000,
      upgradeDuration: "6d 12h",
      requiredLabLevel: 10,
    },
    {
      price: 125000,
      upgradeDuration: "8d",
      requiredLabLevel: 10,
    },
    {
      price: 305000,
      upgradeDuration: "16d",
      requiredLabLevel: 12,
    },
    {
      price: 335000,
      upgradeDuration: "17d",
      requiredLabLevel: 13,
    },
  ],
});
