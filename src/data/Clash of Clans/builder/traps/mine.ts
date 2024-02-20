import BuilderTrap from "@coc/builder/traps/Trap";

export const mine = new BuilderTrap({
  name: "Mine",
  id: "mine",
  levels: [
    {
      price: 5000,
      upgradeDuration: "0s",
    },
    {
      price: 10000,
      upgradeDuration: "30m",
    },
    {
      price: 15000,
      upgradeDuration: "1h",
    },
    {
      price: 25000,
      upgradeDuration: "2h",
    },
    {
      price: 50000,
      upgradeDuration: "6h",
    },
    {
      price: 80000,
      upgradeDuration: "12h",
    },
    {
      price: 120000,
      upgradeDuration: "1d",
    },
    {
      price: 250000,
      upgradeDuration: "1d 12h",
    },
    {
      price: 500000,
      upgradeDuration: "2d",
    },
    {
      price: 1500000,
      upgradeDuration: "2d 12h",
    },
  ],
});
