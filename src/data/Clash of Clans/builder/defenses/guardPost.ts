import BuilderDefense from "@coc/builder/defenses/Defense";

export const guardPost = new BuilderDefense({
  name: "Guard Post",
  id: "guardPost",
  levels: [
    {
      price: 200000,
      upgradeDuration: "4h",
    },
    {
      price: 240000,
      upgradeDuration: "8h",
    },
    {
      price: 280000,
      upgradeDuration: "12h",
    },
    {
      price: 320000,
      upgradeDuration: "1d",
    },
    {
      price: 1000000,
      upgradeDuration: "2d",
    },
    {
      price: 1400000,
      upgradeDuration: "4d",
    },
    {
      price: 2300000,
      upgradeDuration: "6d",
    },
    {
      price: 3200000,
      upgradeDuration: "8d",
    },
    {
      price: 4100000,
      upgradeDuration: "10d",
    },
    {
      price: 5100000,
      upgradeDuration: "12d",
    },
  ],
});
