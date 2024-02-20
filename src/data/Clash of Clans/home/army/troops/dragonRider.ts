import HomeOffense from "@coc/home/army";

export const dragonRider = new HomeOffense({
  name: "Dragon Rider",
  id: "dragonRider",
  type: "troop",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Barracks Lv. 15",
    },
    {
      price: 9600000,
      upgradeDuration: "9d",
      requiredLabLevel: 11,
    },
    {
      price: 16500000,
      upgradeDuration: "16d",
      requiredLabLevel: 12,
    },
  ],
});
