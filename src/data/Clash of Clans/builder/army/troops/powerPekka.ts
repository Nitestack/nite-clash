import BuilderTroop from "@coc/builder/army";

export const powerPekka = new BuilderTroop({
  name: "Power P.E.K.K.A",
  id: "powerPEKKA",
  startLevel: 13,
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Builder Barracks Lv. 10",
    },
    {
      price: 3600000,
      upgradeDuration: "4d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 3800000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 4000000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 4600000,
      upgradeDuration: "6d",
      requiredLabLevel: 9,
    },
    {
      price: 4800000,
      upgradeDuration: "6d",
      requiredLabLevel: 9,
    },
    {
      price: 5600000,
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
