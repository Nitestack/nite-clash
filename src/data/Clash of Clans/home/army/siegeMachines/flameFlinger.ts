import HomeOffense from "@coc/home/army";

export const flameFlinger = new HomeOffense({
  name: "Flame Flinger",
  id: "flameFlinger",
  type: "siegeMachine",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Workshop Lv. 6",
    },
    {
      price: 7600000,
      upgradeDuration: "9d 12h",
      requiredLabLevel: 10,
    },
    {
      price: 10500000,
      upgradeDuration: "13d 12h",
      requiredLabLevel: 10,
    },
    {
      price: 13300000,
      upgradeDuration: "15d",
      requiredLabLevel: 11,
    },
  ],
});
