import HomeDefense from "@coc/home/defenses/Defense";

export const gigaInferno1 = new HomeDefense({
  name: "Giga Inferno 1",
  id: "gigaInferno1",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
    },
    {
      price: 7500000,
      upgradeDuration: "4d 12h",
    },
    {
      price: 9000000,
      upgradeDuration: "6d",
    },
    {
      price: 11200000,
      upgradeDuration: "6d 18h",
    },
    {
      price: 13500000,
      upgradeDuration: "8d 6h",
    },
  ],
});
