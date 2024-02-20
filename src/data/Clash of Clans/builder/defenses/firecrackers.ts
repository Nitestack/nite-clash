import BuilderDefense from "@coc/builder/defenses/Defense";

export const fireCrackers = new BuilderDefense({
  name: "Firecrackers",
  id: "firecrackers",
  levels: [
    {
      price: 40000,
      upgradeDuration: "15m",
    },
    {
      price: 80000,
      upgradeDuration: "2h",
    },
    {
      price: 120000,
      upgradeDuration: "4h",
    },
    {
      price: 300000,
      upgradeDuration: "12h",
    },
    {
      price: 800000,
      upgradeDuration: "1d",
    },
    {
      price: 1200000,
      upgradeDuration: "2d",
    },
    {
      price: 2000000,
      upgradeDuration: "4d",
    },
    {
      price: 3000000,
      upgradeDuration: "6d",
    },
    {
      price: 4000000,
      upgradeDuration: "8d",
    },
    {
      price: 5000000,
      upgradeDuration: "9d",
    },
  ],
});
