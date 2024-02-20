import HomeOffense from "@coc/home/army";

export const headhunter = new HomeOffense({
  name: "Headhunter",
  id: "headhunter",
  type: "darkTroop",
  costType: "darkElixir",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Dark Barracks Lv. 9",
    },
    {
      price: 115000,
      upgradeDuration: "9d",
      requiredLabLevel: 10,
    },
    {
      price: 145000,
      upgradeDuration: "10d",
      requiredLabLevel: 11,
    },
  ],
});
