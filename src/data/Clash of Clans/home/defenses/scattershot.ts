import HomeDefense from "@coc/home/defenses/Defense";

export const scattershot = new HomeDefense({
  name: "Scattershot",
  id: "scattershot",
  levels: [
    {
      price: 11000000,
      upgradeDuration: "11d",
    },
    {
      price: 12000000,
      upgradeDuration: "12d",
    },
    {
      price: 18000000,
      upgradeDuration: "18d",
    },
    {
      price: 21300000,
      upgradeDuration: "19d 12h",
    },
  ],
});
