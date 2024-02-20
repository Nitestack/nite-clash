import BuilderDefense from "@coc/builder/defenses/Defense";

export const archerTower = new BuilderDefense({
  name: "Archer Tower",
  id: "archerTower",
  levels: [
    {
      price: 12000,
      upgradeDuration: "5m",
    },
    {
      price: 30000,
      upgradeDuration: "15m",
    },
    {
      price: 60000,
      upgradeDuration: "2h",
    },
    {
      price: 250000,
      upgradeDuration: "8h",
    },
    {
      price: 800000,
      upgradeDuration: "1d",
    },
    {
      price: 1200000,
      upgradeDuration: "2d",
    },
    {
      price: 2000000,
      upgradeDuration: "4d",
    },
    {
      price: 2800000,
      upgradeDuration: "6d",
    },
    {
      price: 3600000,
      upgradeDuration: "8d",
    },
    {
      price: 4600000,
      upgradeDuration: "9d",
    },
  ],
});
