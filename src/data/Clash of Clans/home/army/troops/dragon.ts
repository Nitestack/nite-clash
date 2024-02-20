import HomeOffense from "@coc/home/army";

export const dragon = new HomeOffense({
  name: "Dragon",
  id: "dragon",
  type: "troop",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Barracks Lv. 9",
    },
    {
      price: 1000000,
      upgradeDuration: "18h",
      requiredLabLevel: 5,
    },
    {
      price: 2000000,
      upgradeDuration: "1d 12h",
      requiredLabLevel: 6,
    },
    {
      price: 3000000,
      upgradeDuration: "3d",
      requiredLabLevel: 7,
    },
    {
      price: 3800000,
      upgradeDuration: "5d 6h",
      requiredLabLevel: 8,
    },
    {
      price: 4900000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 9,
    },
    {
      price: 6300000,
      upgradeDuration: "9d",
      requiredLabLevel: 10,
    },
    {
      price: 8800000,
      upgradeDuration: "9d 12h",
      requiredLabLevel: 11,
    },
    {
      price: 17500000,
      upgradeDuration: "17d",
      requiredLabLevel: 12,
    },
    {
      price: 19500000,
      upgradeDuration: "18d",
      requiredLabLevel: 13,
    },
  ],
});
