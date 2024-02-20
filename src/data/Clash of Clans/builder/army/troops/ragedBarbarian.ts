import BuilderTroop from "@coc/builder/army";

export const ragedBarbarian = new BuilderTroop({
  name: "Raged Barbarian",
  id: "ragedBarbarian",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Builder Barracks Lv. 1",
    },
    {
      price: 3500,
      upgradeDuration: "30s",
      requiredLabLevel: 1,
    },
    {
      price: 7000,
      upgradeDuration: "5m",
      requiredLabLevel: 2,
    },
    {
      price: 10000,
      upgradeDuration: "15m",
      requiredLabLevel: 2,
    },
    {
      price: 90000,
      upgradeDuration: "5h",
      requiredLabLevel: 3,
    },
    {
      price: 180000,
      upgradeDuration: "10h",
      requiredLabLevel: 3,
    },
    {
      price: 300000,
      upgradeDuration: "15h",
      requiredLabLevel: 4,
    },
    {
      price: 330000,
      upgradeDuration: "20h",
      requiredLabLevel: 4,
    },
    {
      price: 700000,
      upgradeDuration: "1d",
      requiredLabLevel: 5,
    },
    {
      price: 900000,
      upgradeDuration: "1d 12h",
      requiredLabLevel: 5,
    },
    {
      price: 1000000,
      upgradeDuration: "2d",
      requiredLabLevel: 6,
    },
    {
      price: 1200000,
      upgradeDuration: "2d 12h",
      requiredLabLevel: 6,
    },
    {
      price: 2000000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 2200000,
      upgradeDuration: "4d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 3000000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 3200000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 3800000,
      upgradeDuration: "6d",
      requiredLabLevel: 9,
    },
    {
      price: 4000000,
      upgradeDuration: "6d",
      requiredLabLevel: 9,
    },
    {
      price: 4600000,
      upgradeDuration: "6d 12h",
      requiredLabLevel: 10,
    },
    {
      price: 5200000,
      upgradeDuration: "6d 12h",
      requiredLabLevel: 10,
    },
  ],
});
