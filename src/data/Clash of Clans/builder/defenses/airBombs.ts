import BuilderDefense from "@coc/builder/defenses/Defense";

export const airBombs = new BuilderDefense({
  name: "Air Bombs",
  id: "airBombs",
  levels: [
    {
      price: 300000,
      upgradeDuration: "6h",
    },
    {
      price: 320000,
      upgradeDuration: "12h",
    },
    {
      price: 340000,
      upgradeDuration: "1d",
    },
    {
      price: 360000,
      upgradeDuration: "2d",
    },
    {
      price: 1200000,
      upgradeDuration: "3d",
    },
    {
      price: 1500000,
      upgradeDuration: "5d",
    },
    {
      price: 2400000,
      upgradeDuration: "7d",
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
