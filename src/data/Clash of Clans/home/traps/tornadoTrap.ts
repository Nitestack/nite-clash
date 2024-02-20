import HomeTrap from "@coc/home/traps/Trap";

export const tornadoTrap = new HomeTrap({
  name: "Tornado Trap",
  id: "tornadoTrap",
  levels: [
    {
      price: 1800000,
      upgradeDuration: "0s",
    },
    {
      price: 2800000,
      upgradeDuration: "2d",
    },
    {
      price: 3500000,
      upgradeDuration: "3d",
    },
  ],
});
