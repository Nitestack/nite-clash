import HomeArmy from "@coc/home/army/Army";

export const workshop = new HomeArmy({
  name: "Workshop",
  id: "workshop",
  levels: [
    {
      price: 3000000,
      upgradeDuration: "4d",
    },
    {
      price: 5000000,
      upgradeDuration: "5d",
    },
    {
      price: 7000000,
      upgradeDuration: "7d",
    },
    {
      price: 9000000,
      upgradeDuration: "10d",
    },
    {
      price: 10000000,
      upgradeDuration: "11d",
    },
    {
      price: 16500000,
      upgradeDuration: "17d",
    },
    {
      price: 19000000,
      upgradeDuration: "18d",
    },
  ],
});
