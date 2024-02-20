import HomeOffense from "@coc/home/army";

export const wallBreaker = new HomeOffense({
  name: "Wall Breaker",
  id: "wallBreaker",
  type: "troop",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Barracks Lv. 5",
    },
    {
      price: 100000,
      upgradeDuration: "6h",
      requiredLabLevel: 2,
    },
    {
      price: 250000,
      upgradeDuration: "12h",
      requiredLabLevel: 4,
    },
    {
      price: 600000,
      upgradeDuration: "18h",
      requiredLabLevel: 5,
    },
    {
      price: 1200000,
      upgradeDuration: "1d",
      requiredLabLevel: 6,
    },
    {
      price: 2500000,
      upgradeDuration: "2d 3h",
      requiredLabLevel: 8,
    },
    {
      price: 4200000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 9,
    },
    {
      price: 6500000,
      upgradeDuration: "6d 12h",
      requiredLabLevel: 10,
    },
    {
      price: 8000000,
      upgradeDuration: "9d",
      requiredLabLevel: 11,
    },
    {
      price: 15200000,
      upgradeDuration: "15d",
      requiredLabLevel: 12,
    },
    {
      price: 16500000,
      upgradeDuration: "16d",
      requiredLabLevel: 13,
    },
  ],
});
