import HomeOffense from "@coc/home/army";

export const electroTitan = new HomeOffense({
  name: "Electro Titan",
  id: "electroTitan",
  type: "troop",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Barracks Lv. 16",
    },
    {
      price: 19500000,
      upgradeDuration: "17d 12h",
      requiredLabLevel: 12,
    },
    {
      price: 20500000,
      upgradeDuration: "18d",
      requiredLabLevel: 13,
    },
  ],
});
