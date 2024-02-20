import BuilderResource from "@coc/builder/resources/Resource";

export const clockTower = new BuilderResource({
  name: "Clock Tower",
  id: "clockTower",
  levels: [
    {
      price: 150000,
      upgradeDuration: "2h",
    },
    {
      price: 180000,
      upgradeDuration: "3h",
    },
    {
      price: 220000,
      upgradeDuration: "4h",
    },
    {
      price: 300000,
      upgradeDuration: "6h",
    },
    {
      price: 700000,
      upgradeDuration: "12h",
    },
    {
      price: 1200000,
      upgradeDuration: "1d",
    },
    {
      price: 1700000,
      upgradeDuration: "2d",
    },
    {
      price: 2200000,
      upgradeDuration: "3d",
    },
    {
      price: 2700000,
      upgradeDuration: "4d",
    },
    {
      price: 3700000,
      upgradeDuration: "5d",
    },
  ],
});
