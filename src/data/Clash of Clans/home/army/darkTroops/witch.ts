import HomeOffense from "@coc/home/army";

export const witch = new HomeOffense({
  name: "Witch",
  id: "witch",
  type: "darkTroop",
  costType: "darkElixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Dark Barracks Lv. 5",
    },
    {
      price: 50000,
      upgradeDuration: "4d",
      requiredLabLevel: 7,
    },
    {
      price: 68000,
      upgradeDuration: "4d 18h",
      requiredLabLevel: 8,
    },
    {
      price: 90000,
      upgradeDuration: "6d 18h",
      requiredLabLevel: 9,
    },
    {
      price: 125000,
      upgradeDuration: "9d",
      requiredLabLevel: 10,
    },
    {
      price: 340000,
      upgradeDuration: "17d 12h",
      requiredLabLevel: 13,
    },
  ],
});
