import HomeOffense from "@coc/home/army";

export const apprenticeWarden = new HomeOffense({
  name: "Apprentice Warden",
  id: "apprenticeWarden",
  type: "darkTroop",
  costType: "darkElixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Dark Barracks Lv. 10",
    },
    {
      price: 180000,
      upgradeDuration: "9d",
      requiredLabLevel: 11,
    },
    {
      price: 315000,
      upgradeDuration: "16d 18h",
      requiredLabLevel: 12,
    },
    {
      price: 340000,
      upgradeDuration: "17d 12h",
      requiredLabLevel: 13,
    },
  ],
});
