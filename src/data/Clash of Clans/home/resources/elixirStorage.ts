import HomeResource from "@coc/home/resources/Resource";

export const elixirStorage = new HomeResource({
  name: "Elixir Storage",
  id: "elixirStorage",
  levels: [
    {
      price: 300,
      upgradeDuration: "10s",
    },
    {
      price: 750,
      upgradeDuration: "5m",
    },
    {
      price: 1500,
      upgradeDuration: "20m",
    },
    {
      price: 3000,
      upgradeDuration: "1h",
    },
    {
      price: 6000,
      upgradeDuration: "2h",
    },
    {
      price: 12000,
      upgradeDuration: "3h",
    },
    {
      price: 25000,
      upgradeDuration: "4h",
    },
    {
      price: 50000,
      upgradeDuration: "5h",
    },
    {
      price: 100000,
      upgradeDuration: "8h",
    },
    {
      price: 250000,
      upgradeDuration: "12h",
    },
    {
      price: 500000,
      upgradeDuration: "16h",
    },
    {
      price: 1000000,
      upgradeDuration: "2d",
    },
    {
      price: 1800000,
      upgradeDuration: "3d 12h",
    },
    {
      price: 2800000,
      upgradeDuration: "5d 12h",
    },
    {
      price: 5500000,
      upgradeDuration: "11d 6h",
    },
    {
      price: 6500000,
      upgradeDuration: "12d",
    },
  ],
});
