import HomeOffense from "@coc/home/army";

export const logLauncher = new HomeOffense({
  name: "Log Launcher",
  id: "logLauncher",
  type: "siegeMachine",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
      text: "Workshop Lv. 5",
    },
    {
      price: 4800000,
      upgradeDuration: "6d",
      requiredLabLevel: 10,
    },
    {
      price: 6500000,
      upgradeDuration: "9d",
      requiredLabLevel: 10,
    },
    {
      price: 8500000,
      upgradeDuration: "9d 12h",
      requiredLabLevel: 11,
    },
  ],
});
