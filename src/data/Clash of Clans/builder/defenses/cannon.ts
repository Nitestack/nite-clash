import BuilderDefense from "@coc/builder/defenses/Defense";

export const cannon = new BuilderDefense({
  name: "Cannon",
  id: "cannon",
  levels: [
    {
      price: 10000,
      upgradeDuration: "1m",
    },
    {
      price: 20000,
      upgradeDuration: "5m",
    },
    {
      price: 50000,
      upgradeDuration: "2h",
    },
    {
      price: 200000,
      upgradeDuration: "8h",
    },
    {
      price: 600000,
      upgradeDuration: "1d",
    },
    {
      price: 1000000,
      upgradeDuration: "2d",
    },
    {
      price: 1800000,
      upgradeDuration: "4d",
    },
    {
      price: 2500000,
      upgradeDuration: "6d",
    },
    {
      price: 3300000,
      upgradeDuration: "8d",
    },
    {
      price: 4500000,
      upgradeDuration: "9d",
    },
  ],
});
