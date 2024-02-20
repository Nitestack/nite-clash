import HomeOffense from "@coc/home/army";

export const hogRider = new HomeOffense({
  name: "Hog Rider",
  id: "hogRider",
  type: "darkTroop",
  costType: "darkElixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Dark Barracks Lv. 2",
    },
    {
      price: 5000,
      upgradeDuration: "10h",
      requiredLabLevel: 5,
    },
    {
      price: 9000,
      upgradeDuration: "20h",
      requiredLabLevel: 6,
    },
    {
      price: 16000,
      upgradeDuration: "1d 6h",
      requiredLabLevel: 6,
    },
    {
      price: 30000,
      upgradeDuration: "2d",
      requiredLabLevel: 7,
    },
    {
      price: 43000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 70000,
      upgradeDuration: "5d 6h",
      requiredLabLevel: 9,
    },
    {
      price: 95000,
      upgradeDuration: "7d",
      requiredLabLevel: 10,
    },
    {
      price: 150000,
      upgradeDuration: "9d",
      requiredLabLevel: 10,
    },
    {
      price: 175000,
      upgradeDuration: "10d",
      requiredLabLevel: 11,
    },
    {
      price: 305000,
      upgradeDuration: "16d 6h",
      requiredLabLevel: 12,
    },
    {
      price: 335000,
      upgradeDuration: "17d",
      requiredLabLevel: 13,
    },
  ],
});
