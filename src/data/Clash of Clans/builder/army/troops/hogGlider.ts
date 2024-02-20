import BuilderTroop from "@coc/builder/army";

export const hogGlider = new BuilderTroop({
  name: "Hog Glider",
  id: "hogGlider",
  startLevel: 15,
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Builder Barracks Lv. 11",
    },
    {
      price: 4000000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 9,
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
      price: 5400000,
      upgradeDuration: "6d 12h",
      requiredLabLevel: 10,
    },
    {
      price: 5800000,
      upgradeDuration: "6d 12h",
      requiredLabLevel: 10,
    },
  ],
});
