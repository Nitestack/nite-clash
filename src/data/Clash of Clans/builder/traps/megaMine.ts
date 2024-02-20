import BuilderTrap from "@coc/builder/traps/Trap";

export const megaMine = new BuilderTrap({
  name: "Mega Mine",
  id: "megaMine",
  levels: [
    {
      price: 30000,
      upgradeDuration: "0s",
    },
    {
      price: 40000,
      upgradeDuration: "1h",
    },
    {
      price: 50000,
      upgradeDuration: "3h",
    },
    {
      price: 80000,
      upgradeDuration: "6h",
    },
    {
      price: 120000,
      upgradeDuration: "12h",
    },
    {
      price: 300000,
      upgradeDuration: "1d",
    },
    {
      price: 600000,
      upgradeDuration: "1d 12h",
    },
    {
      price: 1000000,
      upgradeDuration: "2d",
    },
    {
      price: 1400000,
      upgradeDuration: "3d",
    },
    {
      price: 2500000,
      upgradeDuration: "4d",
    },
  ],
});
