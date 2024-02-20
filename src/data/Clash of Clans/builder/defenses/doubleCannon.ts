import BuilderDefense from "@coc/builder/defenses/Defense";

export const doubleCannon = new BuilderDefense({
  name: "Double Cannon",
  id: "doubleCannon",
  levels: [
    {
      price: 20000,
      upgradeDuration: "10m",
    },
    {
      price: 50000,
      upgradeDuration: "1h",
    },
    {
      price: 80000,
      upgradeDuration: "3h",
    },
    {
      price: 300000,
      upgradeDuration: "12h",
    },
    {
      price: 900000,
      upgradeDuration: "1d",
    },
    {
      price: 1400000,
      upgradeDuration: "2d",
    },
    {
      price: 2200000,
      upgradeDuration: "4d",
    },
    {
      price: 3200000,
      upgradeDuration: "6d",
    },
    {
      price: 4200000,
      upgradeDuration: "8d",
    },
    {
      price: 5200000,
      upgradeDuration: "10d",
    },
  ],
});
