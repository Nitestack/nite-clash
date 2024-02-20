import HomeOffense from "@coc/home/army";

export const balloon = new HomeOffense({
  name: "Balloon",
  id: "balloon",
  type: "troop",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Barracks Lv. 6",
    },
    {
      price: 125000,
      upgradeDuration: "8h",
      requiredLabLevel: 2,
    },
    {
      price: 400000,
      upgradeDuration: "12h",
      requiredLabLevel: 4,
    },
    {
      price: 800000,
      upgradeDuration: "18h",
      requiredLabLevel: 5,
    },
    {
      price: 1500000,
      upgradeDuration: "1d",
      requiredLabLevel: 6,
    },
    {
      price: 2750000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 4500000,
      upgradeDuration: "5d 6h",
      requiredLabLevel: 9,
    },
    {
      price: 7000000,
      upgradeDuration: "9d",
      requiredLabLevel: 10,
    },
    {
      price: 8500000,
      upgradeDuration: "10d",
      requiredLabLevel: 11,
    },
    {
      price: 17000000,
      upgradeDuration: "17d",
      requiredLabLevel: 12,
    },
  ],
});
