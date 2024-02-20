import HomeOffense from "@coc/home/army";

export const goblin = new HomeOffense({
  name: "Goblin",
  id: "goblin",
  type: "troop",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Barracks Lv. 4",
    },
    {
      price: 45000,
      upgradeDuration: "5h",
      requiredLabLevel: 1,
    },
    {
      price: 175000,
      upgradeDuration: "9h",
      requiredLabLevel: 3,
    },
    {
      price: 500000,
      upgradeDuration: "12h",
      requiredLabLevel: 5,
    },
    {
      price: 1200000,
      upgradeDuration: "1d",
      requiredLabLevel: 6,
    },
    {
      price: 2000000,
      upgradeDuration: "1d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 3000000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 5600000,
      upgradeDuration: "7d",
      requiredLabLevel: 10,
    },
    {
      price: 16000000,
      upgradeDuration: "17d",
      requiredLabLevel: 13,
    },
  ],
});
