import HomeResource from "@coc/home/resources/Resource";

export const darkElixirDrill = new HomeResource({
  name: "Dark Elixir Drill",
  id: "darkElixirDrill",
  levels: [
    {
      price: 500000,
      upgradeDuration: "6h",
    },
    {
      price: 700000,
      upgradeDuration: "12h",
    },
    {
      price: 900000,
      upgradeDuration: "18h",
    },
    {
      price: 1200000,
      upgradeDuration: "1d",
    },
    {
      price: 1500000,
      upgradeDuration: "1d 12h",
    },
    {
      price: 1800000,
      upgradeDuration: "2d",
    },
    {
      price: 2400000,
      upgradeDuration: "3d",
    },
    {
      price: 3000000,
      upgradeDuration: "4d",
    },
    {
      price: 4000000,
      upgradeDuration: "7d",
    },
  ],
});
