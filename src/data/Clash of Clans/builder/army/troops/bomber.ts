import BuilderTroop from "@coc/builder/army";

export const bomber = new BuilderTroop({
  name: "Bomber",
  id: "bomber",
  startLevel: 5,
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Builder Barracks Lv. 5",
    },
    {
      price: 320000,
      upgradeDuration: "16h",
      requiredLabLevel: 4,
    },
    {
      price: 340000,
      upgradeDuration: "20h",
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
      price: 1000000,
      upgradeDuration: "2d",
      requiredLabLevel: 5,
    },
    {
      price: 1200000,
      upgradeDuration: "2d",
      requiredLabLevel: 6,
    },
    {
      price: 1400000,
      upgradeDuration: "2d 12h",
      requiredLabLevel: 6,
    },
    {
      price: 2200000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 2400000,
      upgradeDuration: "4d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 3200000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 3400000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 3900000,
      upgradeDuration: "6d",
      requiredLabLevel: 9,
    },
    {
      price: 4100000,
      upgradeDuration: "6d",
      requiredLabLevel: 9,
    },
    {
      price: 4700000,
      upgradeDuration: "6d 12h",
      requiredLabLevel: 10,
    },
    {
      price: 5300000,
      upgradeDuration: "6d 12h",
      requiredLabLevel: 10,
    },
  ],
});
