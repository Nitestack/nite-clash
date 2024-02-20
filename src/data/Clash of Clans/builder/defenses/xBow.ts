import BuilderDefense from "@coc/builder/defenses/Defense";

export const xBow = new BuilderDefense({
  name: "X-Bow",
  id: "xBow",
  levels: [
    {
      price: 4400000,
      upgradeDuration: "7d",
    },
    {
      price: 4800000,
      upgradeDuration: "8d",
    },
    {
      price: 5200000,
      upgradeDuration: "10d",
    },
    {
      price: 5600000,
      upgradeDuration: "11d",
    },
    {
      price: 6000000,
      upgradeDuration: "12d",
    },
  ],
});
