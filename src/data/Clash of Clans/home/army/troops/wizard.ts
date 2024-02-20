import HomeOffense from "@coc/home/army";

export const wizard = new HomeOffense({
  name: "Wizard",
  id: "wizard",
  type: "troop",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Barracks Lv. 7",
    },
    {
      price: 120000,
      upgradeDuration: "8h",
      requiredLabLevel: 3,
    },
    {
      price: 320000,
      upgradeDuration: "12h",
      requiredLabLevel: 4,
    },
    {
      price: 620000,
      upgradeDuration: "18h",
      requiredLabLevel: 5,
    },
    {
      price: 1200000,
      upgradeDuration: "1d",
      requiredLabLevel: 6,
    },
    {
      price: 2200000,
      upgradeDuration: "2d",
      requiredLabLevel: 7,
    },
    {
      price: 3500000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 5000000,
      upgradeDuration: "5d 6h",
      requiredLabLevel: 9,
    },
    {
      price: 5800000,
      upgradeDuration: "8d",
      requiredLabLevel: 10,
    },
    {
      price: 8500000,
      upgradeDuration: "9d",
      requiredLabLevel: 11,
    },
    {
      price: 17200000,
      upgradeDuration: "16d",
      requiredLabLevel: 13,
    },
  ],
});
