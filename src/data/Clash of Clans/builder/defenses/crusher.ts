import BuilderDefense from "@coc/builder/defenses/Defense";

export const crusher = new BuilderDefense({
  name: "Crusher",
  id: "crusher",
  levels: [
    {
      price: 120000,
      upgradeDuration: "2h",
    },
    {
      price: 180000,
      upgradeDuration: "5h",
    },
    {
      price: 220000,
      upgradeDuration: "12h",
    },
    {
      price: 350000,
      upgradeDuration: "1d",
    },
    {
      price: 1200000,
      upgradeDuration: "2d",
    },
    {
      price: 1500000,
      upgradeDuration: "4d",
    },
    {
      price: 2400000,
      upgradeDuration: "6d",
    },
    {
      price: 3400000,
      upgradeDuration: "8d",
    },
    {
      price: 4400000,
      upgradeDuration: "10d",
    },
    {
      price: 5400000,
      upgradeDuration: "12d",
    },
  ],
});
