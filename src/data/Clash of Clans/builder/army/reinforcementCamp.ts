import BuilderArmy from "@coc/builder/army/Army";

export const reinforcementCamp = new BuilderArmy({
  //THERE IS ONLY ONE LEVEL! THE LEVELS LISTED BELOW SHOW THE COST OF BUILDING THE REINFORCEMENT CAMP
  name: "Reinforcement Camp",
  id: "reinforcementCamp",
  levels: [
    {
      price: 0,
      upgradeDuration: "0s",
    },
    {
      price: 4000000,
      upgradeDuration: "10d",
    },
  ],
});
