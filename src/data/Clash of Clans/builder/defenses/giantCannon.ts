import BuilderDefense from "@coc/builder/defenses/Defense";

export const giantCannon = new BuilderDefense({
  name: "Giant Cannon",
  id: "giantCannon",
  levels: [
    {
      price: 2000000,
      upgradeDuration: "1d",
    },
    {
      price: 2100000,
      upgradeDuration: "2d",
    },
    {
      price: 2200000,
      upgradeDuration: "3d",
    },
    {
      price: 2300000,
      upgradeDuration: "4d",
    },
    {
      price: 2400000,
      upgradeDuration: "5d",
    },
    {
      price: 2500000,
      upgradeDuration: "6d",
    },
    {
      price: 2700000,
      upgradeDuration: "8d",
    },
    {
      price: 3800000,
      upgradeDuration: "10d",
    },
    {
      price: 4700000,
      upgradeDuration: "11d",
    },
    {
      price: 5700000,
      upgradeDuration: "12d",
    },
  ],
});
