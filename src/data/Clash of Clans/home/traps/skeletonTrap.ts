import HomeTrap from "@coc/home/traps/Trap";

export const skeletonTrap = new HomeTrap({
  name: "Skeleton Trap",
  id: "skeletonTrap",
  levels: [
    {
      price: 6000,
      upgradeDuration: "0s",
    },
    {
      price: 450000,
      upgradeDuration: "5h",
    },
    {
      price: 900000,
      upgradeDuration: "20h",
    },
    {
      price: 1500000,
      upgradeDuration: "1d 16h",
    },
  ],
});
