import BuilderResource from "@coc/builder/resources/Resource";

export const elixirCollector = new BuilderResource({
  name: "Elixir Collector",
  id: "elixirCollector",
  levels: [
    {
      price: 1000,
      upgradeDuration: "10m",
    },
    {
      price: 5000,
      upgradeDuration: "20m",
    },
    {
      price: 10000,
      upgradeDuration: "40m",
    },
    {
      price: 30000,
      upgradeDuration: "2h",
    },
    {
      price: 60000,
      upgradeDuration: "6h",
    },
    {
      price: 100000,
      upgradeDuration: "1d",
    },
    {
      price: 200000,
      upgradeDuration: "1d 12h",
    },
    {
      price: 300000,
      upgradeDuration: "2d",
    },
    {
      price: 400000,
      upgradeDuration: "2d 12h",
    },
    {
      price: 800000,
      upgradeDuration: "3d",
    },
  ],
});
