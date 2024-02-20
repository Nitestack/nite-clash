import BuilderTrap from "@coc/builder/traps/Trap";

export const pushTrap = new BuilderTrap({
  name: "Push Trap",
  id: "pushTrap",
  levels: [
    {
      price: 1000,
      upgradeDuration: "0s",
    },
    {
      price: 3000,
      upgradeDuration: "5m",
    },
    {
      price: 10000,
      upgradeDuration: "20m",
    },
    {
      price: 20000,
      upgradeDuration: "2h",
    },
    {
      price: 40000,
      upgradeDuration: "4h",
    },
    {
      price: 60000,
      upgradeDuration: "12h",
    },
    {
      price: 100000,
      upgradeDuration: "16h",
    },
    {
      price: 200000,
      upgradeDuration: "1d",
    },
    {
      price: 300000,
      upgradeDuration: "1d 12h",
    },
    {
      price: 500000,
      upgradeDuration: "2d",
    },
  ],
});
