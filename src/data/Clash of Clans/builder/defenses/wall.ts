import BuilderDefense from "@coc/builder/defenses/Defense";

export const wall = new BuilderDefense({
  name: "Wall",
  id: "wall",
  levels: [
    {
      price: 1000,
      upgradeDuration: "0s",
    },
    {
      price: 2000,
      upgradeDuration: "0s",
    },
    {
      price: 10000,
      upgradeDuration: "0s",
    },
    {
      price: 50000,
      upgradeDuration: "0s",
    },
    {
      price: 150000,
      upgradeDuration: "0s",
    },
    {
      price: 240000,
      upgradeDuration: "0s",
    },
    {
      price: 400000,
      upgradeDuration: "0s",
    },
    {
      price: 600000,
      upgradeDuration: "0s",
    },
    {
      price: 800000,
      upgradeDuration: "0s",
    },
    {
      price: 1000000,
      upgradeDuration: "0s",
    },
  ],
});
