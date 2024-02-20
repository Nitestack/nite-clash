import BuilderTroop from "@coc/builder/army";

export const boxerGiant = new BuilderTroop({
  name: "Boxer Giant",
  id: "boxerGiant",
  startLevel: 3,
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Builder Barracks Lv. 3",
    },
    {
      price: 60000,
      upgradeDuration: "5h",
      requiredLabLevel: 3,
    },
    {
      price: 120000,
      upgradeDuration: "10h",
      requiredLabLevel: 3,
    },
    {
      price: 240000,
      upgradeDuration: "16h",
      requiredLabLevel: 3,
    },
    {
      price: 350000,
      upgradeDuration: "20h",
      requiredLabLevel: 4,
    },
    {
      price: 380000,
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
