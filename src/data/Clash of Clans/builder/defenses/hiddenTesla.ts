import BuilderDefense from "@coc/builder/defenses/Defense";

export const hiddenTesla = new BuilderDefense({
  name: "Hidden Tesla",
  id: "hiddenTesla",
  levels: [
    {
      price: 50000,
      upgradeDuration: "30m",
    },
    {
      price: 100000,
      upgradeDuration: "3h",
    },
    {
      price: 150000,
      upgradeDuration: "5h",
    },
    {
      price: 280000,
      upgradeDuration: "10h",
    },
    {
      price: 700000,
      upgradeDuration: "1d",
    },
    {
      price: 1300000,
      upgradeDuration: "2d",
    },
    {
      price: 2100000,
      upgradeDuration: "4d",
    },
    {
      price: 3100000,
      upgradeDuration: "6d",
    },
    {
      price: 4100000,
      upgradeDuration: "8d",
    },
    {
      price: 5100000,
      upgradeDuration: "10d",
    },
  ],
});
