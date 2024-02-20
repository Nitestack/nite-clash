import HomeOffense from "@coc/home/army";

export const babyDragon = new HomeOffense({
  name: "Baby Dragon",
  id: "babyDragon",
  type: "troop",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Barracks Lv. 11",
    },
    {
      price: 2000000,
      upgradeDuration: "2d",
      requiredLabLevel: 7,
    },
    {
      price: 2500000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 3400000,
      upgradeDuration: "5d",
      requiredLabLevel: 8,
    },
    {
      price: 4200000,
      upgradeDuration: "6d 6h",
      requiredLabLevel: 9,
    },
    {
      price: 5500000,
      upgradeDuration: "7d 12h",
      requiredLabLevel: 10,
    },
    {
      price: 7200000,
      upgradeDuration: "8d 12h",
      requiredLabLevel: 11,
    },
    {
      price: 16000000,
      upgradeDuration: "15d 18h",
      requiredLabLevel: 12,
    },
    {
      price: 18000000,
      upgradeDuration: "16d 12h",
      requiredLabLevel: 13,
    },
  ],
});
