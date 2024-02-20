import HomeOffense from "@coc/home/army";

export const giant = new HomeOffense({
  name: "Giant",
  id: "giant",
  type: "troop",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Barracks Lv. 3",
    },
    {
      price: 40000,
      upgradeDuration: "4h",
      requiredLabLevel: 2,
    },
    {
      price: 150000,
      upgradeDuration: "8h",
      requiredLabLevel: 4,
    },
    {
      price: 500000,
      upgradeDuration: "12h",
      requiredLabLevel: 5,
    },
    {
      price: 1200000,
      upgradeDuration: "1d",
      requiredLabLevel: 6,
    },
    {
      price: 2000000,
      upgradeDuration: "2d",
      requiredLabLevel: 7,
    },
    {
      price: 3000000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 3500000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 9,
    },
    {
      price: 5600000,
      upgradeDuration: "8d",
      requiredLabLevel: 10,
    },
    {
      price: 8000000,
      upgradeDuration: "9d",
      requiredLabLevel: 11,
    },
    {
      price: 16500000,
      upgradeDuration: "16d",
      requiredLabLevel: 13,
    },
  ],
});
