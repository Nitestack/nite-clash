import HomeOffense from "@coc/home/army";

export const siegeBarracks = new HomeOffense({
  name: "Siege Barracks",
  id: "siegeBarracks",
  type: "siegeMachine",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Workshop Lv. 4",
    },
    {
      price: 5000000,
      upgradeDuration: "6d",
      requiredLabLevel: 10,
    },
    {
      price: 7000000,
      upgradeDuration: "8d 12h",
      requiredLabLevel: 10,
    },
    {
      price: 8500000,
      upgradeDuration: "9d",
      requiredLabLevel: 11,
    },
  ],
});
