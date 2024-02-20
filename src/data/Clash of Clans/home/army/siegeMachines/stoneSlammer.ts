import HomeOffense from "@coc/home/army";

export const stoneSlammer = new HomeOffense({
  name: "Stone Slammer",
  id: "stoneSlammer",
  type: "siegeMachine",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Workshop Lv. 3",
    },
    {
      price: 3800000,
      upgradeDuration: "5d",
      requiredLabLevel: 10,
    },
    {
      price: 5000000,
      upgradeDuration: "6d",
      requiredLabLevel: 10,
    },
    {
      price: 8500000,
      upgradeDuration: "9d",
      requiredLabLevel: 11,
    },
    {
      price: 15000000,
      upgradeDuration: "16d 12h",
      requiredLabLevel: 13,
    },
  ],
});
