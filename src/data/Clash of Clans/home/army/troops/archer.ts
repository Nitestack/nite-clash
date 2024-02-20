import HomeOffense from "@coc/home/army";

export const archer = new HomeOffense({
  name: "Archer",
  id: "archer",
  type: "troop",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Barracks Lv. 2",
    },
    {
      price: 30000,
      upgradeDuration: "3h",
      requiredLabLevel: 1,
    },
    {
      price: 80000,
      upgradeDuration: "6h",
      requiredLabLevel: 3,
    },
    {
      price: 300000,
      upgradeDuration: "12h",
      requiredLabLevel: 5,
    },
    {
      price: 800000,
      upgradeDuration: "1d",
      requiredLabLevel: 6,
    },
    {
      price: 2000000,
      upgradeDuration: "1d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 2500000,
      upgradeDuration: "2d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 3200000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 9,
    },
    {
      price: 5600000,
      upgradeDuration: "6d",
      requiredLabLevel: 10,
    },
    {
      price: 14500000,
      upgradeDuration: "13d",
      requiredLabLevel: 12,
    },
    {
      price: 16000000,
      upgradeDuration: "14d",
      requiredLabLevel: 13,
    },
  ],
});
