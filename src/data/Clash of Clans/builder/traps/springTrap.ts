import BuilderTrap from "@coc/builder/traps/Trap";

export const springTrap = new BuilderTrap({
  name: "Spring Trap",
  id: "springTrap",
  levels: [
    {
      price: 10000,
      upgradeDuration: "0s",
    },
    {
      price: 30000,
      upgradeDuration: "1h",
    },
    {
      price: 100000,
      upgradeDuration: "1d",
    },
    {
      price: 300000,
      upgradeDuration: "2d",
    },
  ],
});
