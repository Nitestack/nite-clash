import BuilderResource from "@coc/builder/resources/Resource";

export const gemMine = new BuilderResource({
  name: "Gem Mine",
  id: "gemMine",
  levels: [
    {
      price: 120000,
      upgradeDuration: "1h",
    },
    {
      price: 180000,
      upgradeDuration: "2h",
    },
    {
      price: 240000,
      upgradeDuration: "6h",
    },
    {
      price: 450000,
      upgradeDuration: "8h",
    },
    {
      price: 1000000,
      upgradeDuration: "12h",
    },
    {
      price: 1500000,
      upgradeDuration: "1d",
    },
    {
      price: 2500000,
      upgradeDuration: "2d",
    },
    {
      price: 3500000,
      upgradeDuration: "4d",
    },
    {
      price: 4500000,
      upgradeDuration: "6d",
    },
    {
      price: 5500000,
      upgradeDuration: "8d",
    },
  ],
});
