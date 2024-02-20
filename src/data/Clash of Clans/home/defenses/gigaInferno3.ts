import HomeDefense from "@coc/home/defenses/Defense";

export const gigaInferno3 = new HomeDefense({
  name: "Giga Inferno 3",
  id: "gigaInferno3",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
    },
    {
      price: 10000000,
      upgradeDuration: "9d",
    },
    {
      price: 12000000,
      upgradeDuration: "11d",
    },
    {
      price: 14000000,
      upgradeDuration: "13d",
    },
    {
      price: 16000000,
      upgradeDuration: "14d",
    },
  ],
});
