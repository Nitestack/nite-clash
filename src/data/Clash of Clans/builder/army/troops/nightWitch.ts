import BuilderTroop from "@coc/builder/army";

export const nightWitch = new BuilderTroop({
  name: "Night Witch",
  id: "nightWitch",
  startLevel: 9,
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Builder Barracks Lv. 8",
    },
    {
      price: 1400000,
      upgradeDuration: "2d",
      requiredLabLevel: 6,
    },
    {
      price: 1600000,
      upgradeDuration: "2d",
      requiredLabLevel: 6,
    },
    {
      price: 1800000,
      upgradeDuration: "2d 12h",
      requiredLabLevel: 6,
    },
    {
      price: 2500000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 2700000,
      upgradeDuration: "4d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 3500000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 3700000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 4200000,
      upgradeDuration: "6d",
      requiredLabLevel: 9,
    },
    {
      price: 4400000,
      upgradeDuration: "6d",
      requiredLabLevel: 9,
    },
    {
      price: 5200000,
      upgradeDuration: "6d 12h",
      requiredLabLevel: 10,
    },
    {
      price: 5600000,
      upgradeDuration: "6d 12h",
      requiredLabLevel: 10,
    },
  ],
});
