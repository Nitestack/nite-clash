import HomeTrap from "@coc/home/traps/Trap";

export const seekingAirMine = new HomeTrap({
  name: "Seeking Air Mine",
  id: "seekingAirMine",
  levels: [
    {
      price: 15000,
      upgradeDuration: "0s",
    },
    {
      price: 1000000,
      upgradeDuration: "1d",
    },
    {
      price: 2100000,
      upgradeDuration: "3d",
    },
    {
      price: 3600000,
      upgradeDuration: "4d 6h",
    },
    {
      price: 10000000,
      upgradeDuration: "10d",
    },
  ],
});
