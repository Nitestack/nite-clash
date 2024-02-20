import BuilderDefense from "@coc/builder/defenses/Defense";

export const roaster = new BuilderDefense({
  name: "Roaster",
  id: "roaster",
  levels: [
    {
      price: 1000000,
      upgradeDuration: "1d",
    },
    {
      price: 1200000,
      upgradeDuration: "2d",
    },
    {
      price: 1400000,
      upgradeDuration: "3d",
    },
    {
      price: 1500000,
      upgradeDuration: "4d",
    },
    {
      price: 1600000,
      upgradeDuration: "5d",
    },
    {
      price: 1700000,
      upgradeDuration: "6d",
    },
    {
      price: 2600000,
      upgradeDuration: "8d",
    },
    {
      price: 3600000,
      upgradeDuration: "10d",
    },
    {
      price: 4600000,
      upgradeDuration: "11d",
    },
    {
      price: 5600000,
      upgradeDuration: "12d",
    },
  ],
});
