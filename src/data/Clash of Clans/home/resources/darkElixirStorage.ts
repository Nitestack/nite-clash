import HomeResource from "@coc/home/resources/Resource";

export const darkElixirStorage = new HomeResource({
  name: "Dark Elixir Storage",
  id: "darkElixirStorage",
  levels: [
    {
      price: 250000,
      upgradeDuration: "8h",
    },
    {
      price: 500000,
      upgradeDuration: "16h",
    },
    {
      price: 1000000,
      upgradeDuration: "1d",
    },
    {
      price: 1500000,
      upgradeDuration: "1d 12h",
    },
    {
      price: 2000000,
      upgradeDuration: "2d",
    },
    {
      price: 3000000,
      upgradeDuration: "3d",
    },
    {
      price: 3800000,
      upgradeDuration: "3d 12h",
    },
    {
      price: 5400000,
      upgradeDuration: "6d 12h",
    },
    {
      price: 11500000,
      upgradeDuration: "14d 6h",
    },
    {
      price: 12500000,
      upgradeDuration: "15d",
    },
  ],
});
