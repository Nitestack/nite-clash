import HomeOffense from "@coc/home/army";

export const barbarian = new HomeOffense({
  name: "Barbarian",
  id: "barbarian",
  type: "troop",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Barracks Lv. 1",
    },
    {
      price: 20000,
      upgradeDuration: "2h",
      requiredLabLevel: 1,
    },
    {
      price: 60000,
      upgradeDuration: "5h",
      requiredLabLevel: 3,
    },
    {
      price: 200000,
      upgradeDuration: "12h",
      requiredLabLevel: 5,
    },
    {
      price: 650000,
      upgradeDuration: "1d",
      requiredLabLevel: 6,
    },
    {
      price: 1400000,
      upgradeDuration: "1d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 2100000,
      upgradeDuration: "2d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 2800000,
      upgradeDuration: "3d",
      requiredLabLevel: 9,
    },
    {
      price: 5000000,
      upgradeDuration: "6d",
      requiredLabLevel: 10,
    },
    {
      price: 14000000,
      upgradeDuration: "13d",
      requiredLabLevel: 12,
    },
    {
      price: 16000000,
      upgradeDuration: "14d",
      requiredLabLevel: 13,
    },
  ],
});
