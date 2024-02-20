import HomeDefense from "@coc/home/defenses/Defense";

export const gigaInferno2 = new HomeDefense({
  name: "Giga Inferno 2",
  id: "gigaInferno2",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
    },
    {
      price: 8500000,
      upgradeDuration: "8d 12h",
    },
    {
      price: 10500000,
      upgradeDuration: "10d 12h",
    },
    {
      price: 12300000,
      upgradeDuration: "12d 6h",
    },
    {
      price: 14200000,
      upgradeDuration: "13d 6h",
    },
  ],
});
