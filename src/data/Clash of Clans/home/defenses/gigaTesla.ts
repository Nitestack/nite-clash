import HomeDefense from "@coc/home/defenses/Defense";

export const gigaTesla = new HomeDefense({
  name: "Giga Tesla",
  id: "gigaTesla",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
    },
    {
      price: 3000000,
      upgradeDuration: "1d 12h",
    },
    {
      price: 4200000,
      upgradeDuration: "2d 18h",
    },
    {
      price: 5600000,
      upgradeDuration: "4d 6h",
    },
    {
      price: 7000000,
      upgradeDuration: "5d 12h",
    },
  ],
});
