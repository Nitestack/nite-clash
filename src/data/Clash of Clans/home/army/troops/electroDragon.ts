import HomeOffense from "@coc/home/army";

export const electroDragon = new HomeOffense({
  name: "Electro Dragon",
  id: "electroDragon",
  type: "troop",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Barracks Lv. 13",
    },
    {
      price: 6300000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 9,
    },
    {
      price: 7000000,
      upgradeDuration: "9d",
      requiredLabLevel: 10,
    },
    {
      price: 9600000,
      upgradeDuration: "10d",
      requiredLabLevel: 11,
    },
    {
      price: 18000000,
      upgradeDuration: "17d",
      requiredLabLevel: 12,
    },
    {
      price: 20000000,
      upgradeDuration: "18d",
      requiredLabLevel: 13,
    },
  ],
});
