import BuilderDefense from "@coc/builder/defenses/Defense";

export const megaTesla = new BuilderDefense({
  name: "Mega Tesla",
  id: "megaTesla",
  levels: [
    {
      price: 3000000,
      upgradeDuration: "2d",
    },
    {
      price: 3100000,
      upgradeDuration: "3d",
    },
    {
      price: 3200000,
      upgradeDuration: "4d",
    },
    {
      price: 3300000,
      upgradeDuration: "5d",
    },
    {
      price: 3400000,
      upgradeDuration: "6d",
    },
    {
      price: 3600000,
      upgradeDuration: "7d",
    },
    {
      price: 3800000,
      upgradeDuration: "8d",
    },
    {
      price: 4000000,
      upgradeDuration: "10d",
    },
    {
      price: 4800000,
      upgradeDuration: "11d",
    },
    {
      price: 5800000,
      upgradeDuration: "12d",
    },
  ],
});
