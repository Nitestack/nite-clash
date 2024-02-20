import HomeOffense from "@coc/home/army";

export const battleDrill = new HomeOffense({
  name: "Battle Drill",
  id: "battleDrill",
  type: "siegeMachine",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Workshop Lv. 7",
    },
    {
      price: 8000000,
      upgradeDuration: "10d",
      requiredLabLevel: 13,
    },
    {
      price: 11000000,
      upgradeDuration: "14d",
      requiredLabLevel: 13,
    },
    {
      price: 14000000,
      upgradeDuration: "16d",
      requiredLabLevel: 13,
    },
  ],
});
