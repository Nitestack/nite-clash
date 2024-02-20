import BuilderTroop from "@coc/builder/army";

export const electrofireWizard = new BuilderTroop({
  name: "Electrofire Wizard",
  id: "electrofireWizard",
  startLevel: 17,
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Builder Barracks Lv. 12",
    },
    {
      price: 4400000,
      upgradeDuration: "6d",
      requiredLabLevel: 10,
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
