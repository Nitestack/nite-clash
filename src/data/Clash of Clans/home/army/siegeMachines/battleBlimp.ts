import HomeOffense from "@coc/home/army";

export const battleBlimp = new HomeOffense({
  name: "Battle Blimp",
  id: "battleBlimp",
  type: "siegeMachine",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Workshop Lv. 2",
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
  ],
});
