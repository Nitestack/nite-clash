import BuilderResource from "@coc/builder/resources/Resource";

export const goldStorage = new BuilderResource({
  name: "Gold Storage",
  id: "goldStorage",
  levels: [
    {
      price: 20000,
      upgradeDuration: "30m",
    },
    {
      price: 80000,
      upgradeDuration: "1h",
    },
    {
      price: 200000,
      upgradeDuration: "3h",
    },
    {
      price: 300000,
      upgradeDuration: "6h",
    },
    {
      price: 600000,
      upgradeDuration: "12h",
    },
    {
      price: 1000000,
      upgradeDuration: "1d",
    },
    {
      price: 1500000,
      upgradeDuration: "2d",
    },
    {
      price: 2000000,
      upgradeDuration: "3d",
    },
    {
      price: 2500000,
      upgradeDuration: "4d",
    },
    {
      price: 3200000,
      upgradeDuration: "5d",
    },
  ],
});
