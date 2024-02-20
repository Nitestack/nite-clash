import BuilderArmy from "@coc/builder/army/Army";

export const builderBarracks = new BuilderArmy({
  name: "Builder Barracks",
  id: "builderBarracks",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
    },
    {
      price: 4000,
      upgradeDuration: "1m",
    },
    {
      price: 10000,
      upgradeDuration: "10m",
    },
    {
      price: 25000,
      upgradeDuration: "30m",
    },
    {
      price: 100000,
      upgradeDuration: "3h",
    },
    {
      price: 150000,
      upgradeDuration: "6h",
    },
    {
      price: 300000,
      upgradeDuration: "9h",
    },
    {
      price: 500000,
      upgradeDuration: "1d",
    },
    {
      price: 1000000,
      upgradeDuration: "2d",
    },
    {
      price: 1500000,
      upgradeDuration: "3d",
    },
    {
      price: 2000000,
      upgradeDuration: "4d",
    },
    {
      price: 3000000,
      upgradeDuration: "5d",
    },
  ],
});
