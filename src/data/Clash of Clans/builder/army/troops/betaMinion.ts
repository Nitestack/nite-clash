import BuilderTroop from "@coc/builder/army";

export const betaMinion = new BuilderTroop({
  name: "Beta Minion",
  id: "betaMinion",
  startLevel: 3,
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Builder Barracks Lv. 4",
    },
    {
      price: 50000,
      upgradeDuration: "4h",
      requiredLabLevel: 3,
    },
    {
      price: 110000,
      upgradeDuration: "8h",
      requiredLabLevel: 3,
    },
    {
      price: 220000,
      upgradeDuration: "12h",
      requiredLabLevel: 3,
    },
    {
      price: 330000,
      upgradeDuration: "18h",
      requiredLabLevel: 4,
    },
    {
      price: 360000,
      upgradeDuration: "1d",
      requiredLabLevel: 4,
    },
    {
      price: 900000,
      upgradeDuration: "1d 12h",
      requiredLabLevel: 5,
    },
    {
      price: 1100000,
      upgradeDuration: "2d",
      requiredLabLevel: 5,
    },
    {
      price: 1300000,
      upgradeDuration: "2d",
      requiredLabLevel: 6,
    },
    {
      price: 1500000,
      upgradeDuration: "2d 12h",
      requiredLabLevel: 6,
    },
    {
      price: 2300000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 2500000,
      upgradeDuration: "4d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 3300000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 3500000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 4000000,
      upgradeDuration: "6d",
      requiredLabLevel: 9,
    },
    {
      price: 4200000,
      upgradeDuration: "6d",
      requiredLabLevel: 9,
    },
    {
      price: 4800000,
      upgradeDuration: "6d 12h",
      requiredLabLevel: 10,
    },
    {
      price: 5400000,
      upgradeDuration: "6d 12h",
      requiredLabLevel: 10,
    },
  ],
});
