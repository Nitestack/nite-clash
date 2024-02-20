import HomeArmy from "@coc/home/army/Army";

export const clanCastle = new HomeArmy({
  name: "Clan Castle",
  id: "clanCastle",
  levels: [
    {
      price: 10000,
      upgradeDuration: "0s",
    },
    {
      price: 100000,
      upgradeDuration: "8h",
    },
    {
      price: 800000,
      upgradeDuration: "12h",
    },
    {
      price: 1200000,
      upgradeDuration: "1d",
    },
    {
      price: 2500000,
      upgradeDuration: "2d",
    },
    {
      price: 4200000,
      upgradeDuration: "5d",
    },
    {
      price: 5500000,
      upgradeDuration: "6d 6h",
    },
    {
      price: 8000000,
      upgradeDuration: "9d",
    },
    {
      price: 10000000,
      upgradeDuration: "11d",
    },
    {
      price: 18000000,
      upgradeDuration: "19d",
    },
    {
      price: 20000000,
      upgradeDuration: "20d",
    },
  ],
});
