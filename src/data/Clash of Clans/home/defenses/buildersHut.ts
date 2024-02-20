import HomeDefense from "@coc/home/defenses/Defense";

export const buildersHut = new HomeDefense({
  name: "Builder's Hut",
  id: "buildersHut",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
    },
    {
      price: 9000000,
      upgradeDuration: "9d 12h",
    },
    {
      price: 12000000,
      upgradeDuration: "11d 12h",
    },
    {
      price: 14500000,
      upgradeDuration: "13d 6h",
    },
    {
      price: 17000000,
      upgradeDuration: "14d 12h",
    },
  ],
});
