import HomeOffense from "@coc/home/army";

export const miner = new HomeOffense({
  name: "Miner",
  id: "miner",
  type: "troop",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Barracks Lv. 12",
    },
    {
      price: 2500000,
      upgradeDuration: "2d 4h",
      requiredLabLevel: 8,
    },
    {
      price: 3200000,
      upgradeDuration: "3d 12h",
      requiredLabLevel: 8,
    },
    {
      price: 3800000,
      upgradeDuration: "4d",
      requiredLabLevel: 9,
    },
    {
      price: 5000000,
      upgradeDuration: "7d",
      requiredLabLevel: 9,
    },
    {
      price: 5800000,
      upgradeDuration: "8d",
      requiredLabLevel: 10,
    },
    {
      price: 8000000,
      upgradeDuration: "10d",
      requiredLabLevel: 11,
    },
    {
      price: 16500000,
      upgradeDuration: "16d",
      requiredLabLevel: 12,
    },
    {
      price: 18500000,
      upgradeDuration: "17d",
      requiredLabLevel: 13,
    },
  ],
});
