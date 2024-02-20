import HomeOffense from "@coc/home/army";

export const lavaHound = new HomeOffense({
  name: "Lava Hound",
  id: "lavaHound",
  type: "darkTroop",
  costType: "darkElixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Dark Barracks Lv. 6",
    },
    {
      price: 35000,
      upgradeDuration: "2d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 50000,
      upgradeDuration: "4d 6h",
      requiredLabLevel: 8,
    },
    {
      price: 85000,
      upgradeDuration: "6d 6h",
      requiredLabLevel: 9,
    },
    {
      price: 120000,
      upgradeDuration: "9d",
      requiredLabLevel: 10,
    },
    {
      price: 160000,
      upgradeDuration: "9d 12h",
      requiredLabLevel: 11,
    },
  ],
});
