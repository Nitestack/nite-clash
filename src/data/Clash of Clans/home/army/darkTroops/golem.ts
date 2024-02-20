import HomeOffense from "@coc/home/army";

export const golem = new HomeOffense({
  name: "Golem",
  id: "golem",
  type: "darkTroop",
  costType: "darkElixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Dark Barracks Lv. 4",
    },
    {
      price: 10000,
      upgradeDuration: "1d 6h",
      requiredLabLevel: 6,
    },
    {
      price: 20000,
      upgradeDuration: "2d 12h",
      requiredLabLevel: 7,
    },
    {
      price: 30000,
      upgradeDuration: "3d 18h",
      requiredLabLevel: 7,
    },
    {
      price: 43000,
      upgradeDuration: "4d 6h",
      requiredLabLevel: 8,
    },
    {
      price: 53000,
      upgradeDuration: "5d",
      requiredLabLevel: 9,
    },
    {
      price: 77000,
      upgradeDuration: "5d 12h",
      requiredLabLevel: 9,
    },
    {
      price: 100000,
      upgradeDuration: "6d 12h",
      requiredLabLevel: 10,
    },
    {
      price: 125000,
      upgradeDuration: "9d",
      requiredLabLevel: 10,
    },
    {
      price: 160000,
      upgradeDuration: "10d",
      requiredLabLevel: 11,
    },
    {
      price: 300000,
      upgradeDuration: "16d",
      requiredLabLevel: 12,
    },
    {
      price: 330000,
      upgradeDuration: "17d",
      requiredLabLevel: 13,
    },
  ],
});
