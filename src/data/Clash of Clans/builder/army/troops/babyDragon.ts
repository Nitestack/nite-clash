import BuilderTroop from "@coc/builder/army";

export const babyDragon = new BuilderTroop({
  name: "Baby Dragon",
  id: "babyDragon",
  startLevel: 5,
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Builder Barracks Lv. 6",
    },
    {
      price: 360000,
      upgradeDuration: "16h",
      requiredLabLevel: 4,
    },
    {
      price: 380000,
      upgradeDuration: "20h",
      requiredLabLevel: 4,
    },
    {
      price: 400000,
      upgradeDuration: "1d",
      requiredLabLevel: 4,
    },
    {
      price: 1000000,
      upgradeDuration: "1d 12h",
      requiredLabLevel: 5,
    },
    {
      price: 1200000,
      upgradeDuration: "2d",
      requiredLabLevel: 5,
    },
    {
      price: 1400000,
      upgradeDuration: "2d",
      requiredLabLevel: 6,
    },
    {
      price: 1600000,
      upgradeDuration: "2d 12h",
      requiredLabLevel: 6,
    },
    {
      price: 2400000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 2600000,
      upgradeDuration: "4d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 3400000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 3600000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 4100000,
      upgradeDuration: "6d",
      requiredLabLevel: 9,
    },
    {
      price: 4300000,
      upgradeDuration: "6d",
      requiredLabLevel: 9,
    },
    {
      price: 5100000,
      upgradeDuration: "6d 12h",
      requiredLabLevel: 10,
    },
    {
      price: 5500000,
      upgradeDuration: "6d 12h",
      requiredLabLevel: 10,
    },
  ],
});
