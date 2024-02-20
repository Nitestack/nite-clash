import HomeTrap from "@coc/home/traps/Trap";

export const springTrap = new HomeTrap({
  name: "Spring Trap",
  id: "springTrap",
  levels: [
    {
      price: 2000,
      upgradeDuration: "0s",
    },
    {
      price: 300000,
      upgradeDuration: "12h",
    },
    {
      price: 500000,
      upgradeDuration: "18h",
    },
    {
      price: 800000,
      upgradeDuration: "1d 12h",
    },
    {
      price: 1000000,
      upgradeDuration: "3d",
    },
  ],
});
