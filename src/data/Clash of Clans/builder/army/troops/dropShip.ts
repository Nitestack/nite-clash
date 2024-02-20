import BuilderTroop from "@coc/builder/army";

export const dropShip = new BuilderTroop({
  name: "Drop Ship",
  id: "dropShip",
  startLevel: 11,
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Builder Barracks Lv. 9",
    },
    {
      price: 2400000,
      upgradeDuration: "2d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 2600000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 2800000,
      upgradeDuration: "4d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 3600000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 3800000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 4300000,
      upgradeDuration: "6d",
      requiredLabLevel: 9,
    },
    {
      price: 4500000,
      upgradeDuration: "6d",
      requiredLabLevel: 9,
    },
    {
      price: 5500000,
      upgradeDuration: "6d 12h",
      requiredLabLevel: 10,
    },
    {
      price: 5700000,
      upgradeDuration: "6d 12h",
      requiredLabLevel: 10,
    },
  ],
});
