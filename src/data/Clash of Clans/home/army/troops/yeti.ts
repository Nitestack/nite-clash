import HomeOffense from "@coc/home/army";

export const yeti = new HomeOffense({
  name: "Yeti",
  id: "yeti",
  type: "troop",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Barracks Lv. 14",
    },
    {
      price: 7000000,
      upgradeDuration: "7d",
      requiredLabLevel: 10,
    },
    {
      price: 9000000,
      upgradeDuration: "10d",
      requiredLabLevel: 11,
    },
    {
      price: 17100000,
      upgradeDuration: "17d",
      requiredLabLevel: 12,
    },
    {
      price: 19000000,
      upgradeDuration: "18d",
      requiredLabLevel: 13,
    },
  ],
});
