import HomeDefense from "@coc/home/defenses/Defense";

export const airSweeper = new HomeDefense({
  name: "Air Sweeper",
  id: "airSweeper",
  levels: [
    {
      price: 400000,
      upgradeDuration: "6h",
    },
    {
      price: 700000,
      upgradeDuration: "12h",
    },
    {
      price: 1100000,
      upgradeDuration: "18h",
    },
    {
      price: 1500000,
      upgradeDuration: "1d",
    },
    {
      price: 2000000,
      upgradeDuration: "2d",
    },
    {
      price: 2500000,
      upgradeDuration: "2d 12h",
    },
    {
      price: 4200000,
      upgradeDuration: "3d 12h",
    },
  ],
});
