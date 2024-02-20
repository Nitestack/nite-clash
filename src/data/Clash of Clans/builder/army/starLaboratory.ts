import BuilderArmy from "@coc/builder/army/Army";

export const starLaboratory = new BuilderArmy({
  name: "Star Laboratory",
  id: "starLaboratory",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
    },
    {
      price: 15000,
      upgradeDuration: "10m",
    },
    {
      price: 50000,
      upgradeDuration: "30m",
    },
    {
      price: 300000,
      upgradeDuration: "8h",
    },
    {
      price: 700000,
      upgradeDuration: "12h",
    },
    {
      price: 1000000,
      upgradeDuration: "2d",
    },
    {
      price: 2000000,
      upgradeDuration: "4d",
    },
    {
      price: 3000000,
      upgradeDuration: "6d",
    },
    {
      price: 4000000,
      upgradeDuration: "8d",
    },
    {
      price: 5000000,
      upgradeDuration: "10d",
    },
  ],
});
