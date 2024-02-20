import HomeOffense from "@coc/home/army";

export const healer = new HomeOffense({
  name: "Healer",
  id: "healer",
  type: "troop",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Barracks Lv. 8",
    },
    {
      price: 450000,
      upgradeDuration: "12h",
      requiredLabLevel: 5,
    },
    {
      price: 900000,
      upgradeDuration: "1d",
      requiredLabLevel: 6,
    },
    {
      price: 2700000,
      upgradeDuration: "2d",
      requiredLabLevel: 7,
    },
    {
      price: 4200000,
      upgradeDuration: "7d",
      requiredLabLevel: 9,
    },
    {
      price: 8000000,
      upgradeDuration: "8d 12h",
      requiredLabLevel: 11,
    },
    {
      price: 16000000,
      upgradeDuration: "16d",
      requiredLabLevel: 12,
    },
    {
      price: 18000000,
      upgradeDuration: "17d",
      requiredLabLevel: 13,
    },
  ],
});
