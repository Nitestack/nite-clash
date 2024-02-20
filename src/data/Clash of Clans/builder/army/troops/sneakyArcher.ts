import BuilderTroop from "@coc/builder/army";

export const sneakyArcher = new BuilderTroop({
  name: "Sneaky Archer",
  id: "sneakyArcher",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Builder Barracks Lv. 2",
    },
    {
      price: 5000,
      upgradeDuration: "3m",
      requiredLabLevel: 1,
    },
    {
      price: 8000,
      upgradeDuration: "10m",
      requiredLabLevel: 2,
    },
    {
      price: 12000,
      upgradeDuration: "30m",
      requiredLabLevel: 2,
    },
    {
      price: 100000,
      upgradeDuration: "6h",
      requiredLabLevel: 3,
    },
    {
      price: 200000,
      upgradeDuration: "11h",
      requiredLabLevel: 3,
    },
    {
      price: 320000,
      upgradeDuration: "16h",
      requiredLabLevel: 4,
    },
    {
      price: 350000,
      upgradeDuration: "21h",
      requiredLabLevel: 4,
    },
    {
      price: 800000,
      upgradeDuration: "1d",
      requiredLabLevel: 5,
    },
    {
      price: 1000000,
      upgradeDuration: "1d 12h",
      requiredLabLevel: 5,
    },
    {
      price: 1100000,
      upgradeDuration: "2d",
      requiredLabLevel: 6,
    },
    {
      price: 1300000,
      upgradeDuration: "2d 12h",
      requiredLabLevel: 6,
    },
    {
      price: 2100000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 2300000,
      upgradeDuration: "4d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 3100000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 3300000,
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
