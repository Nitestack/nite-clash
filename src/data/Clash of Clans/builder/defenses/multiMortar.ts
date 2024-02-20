import BuilderDefense from "@coc/builder/defenses/Defense";

export const multiMortar = new BuilderDefense({
  name: "Multi Mortar",
  id: "multiMortar",
  levels: [
    {
      price: 600000,
      upgradeDuration: "8h",
    },
    {
      price: 700000,
      upgradeDuration: "12h",
    },
    {
      price: 800000,
      upgradeDuration: "1d",
    },
    {
      price: 1000000,
      upgradeDuration: "2d",
    },
    {
      price: 1200000,
      upgradeDuration: "3d",
    },
    {
      price: 1600000,
      upgradeDuration: "5d",
    },
    {
      price: 2500000,
      upgradeDuration: "7d",
    },
    {
      price: 3500000,
      upgradeDuration: "9d",
    },
    {
      price: 4500000,
      upgradeDuration: "11d",
    },
    {
      price: 5500000,
      upgradeDuration: "12d",
    },
  ],
});
