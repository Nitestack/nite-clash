import BuilderDefense from "@coc/builder/defenses/Defense";

export const lavaLauncher = new BuilderDefense({
  name: "Lava Launcher",
  id: "lavaLauncher",
  levels: [
    {
      price: 3000000,
      upgradeDuration: "2d",
    },
    {
      price: 3100000,
      upgradeDuration: "3d",
    },
    {
      price: 3200000,
      upgradeDuration: "4d",
    },
    {
      price: 3400000,
      upgradeDuration: "5d",
    },
    {
      price: 3700000,
      upgradeDuration: "6d",
    },
    {
      price: 4000000,
      upgradeDuration: "7d",
    },
    {
      price: 4300000,
      upgradeDuration: "8d",
    },
    {
      price: 4600000,
      upgradeDuration: "10d",
    },
    {
      price: 4900000,
      upgradeDuration: "11d",
    },
    {
      price: 5900000,
      upgradeDuration: "12d",
    },
  ],
});
