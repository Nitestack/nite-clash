export { home } from "@coc/home";
export { builder } from "@coc/builder";
export { townHall } from "@coc/home/townHall/index";
export { builderHall } from "@coc/builder/builderHall/index";

import { townHall } from "@coc/home/townHall/index";
import { builderHall } from "@coc/builder/builderHall/index";

import { heroes } from "@coc/home/army/heroes";
import { army } from "@coc/home/army";
import { defenses } from "@coc/home/defenses";
import { traps } from "@coc/home/traps";
import { heroPets } from "@coc/home/army/heroes/pets";
import { troops } from "@coc/home/army/troops";
import { darkTroops } from "@coc/home/army/darkTroops";
import { siegeMachines } from "@coc/home/army/siegeMachines";
import { spells } from "@coc/home/army/spells";
import { darkSpells } from "@coc/home/army/darkSpells";
import { resources } from "@coc/home/resources";

import { builderTroops } from "@coc/builder/army/troops";

export { builderHeroes } from "@coc/builder/army/heroes";
export { builderArmy } from "@coc/builder/army";
import { builderDefenses as _defenses } from "@coc/builder/defenses";
export { builderTraps } from "@coc/builder/traps";
export { builderTroops } from "@coc/builder/army/troops";
export { builderResources } from "@coc/builder/resources";

export const homeWallLimit: number | undefined = undefined;
export const builderWallLimit: number | undefined = undefined;

export const maxedBuilderHallLevel = builderHall.length;
export const maxedTownHallLevel = townHall.length;

export const homeHeroes = heroes;
export const homeArmy = army;
export const homeDefenses = defenses.filter(
  (defense) => defense.name.toLowerCase() != "wall"
);
export const builderDefenses = _defenses.filter(
  (defense) => defense.name.toLowerCase() != "wall"
);
export const homeTraps = traps;
export const homePets = heroPets;
export const homeTroops = troops;
export const homeDarkTroops = darkTroops;
export const homeSiegeMachines = siegeMachines;
export const homeElixirSpells = spells;
export const homeDarkSpells = darkSpells;
export const homeSpells = [...homeElixirSpells, ...homeDarkSpells];
export const homeResources = resources;
export const homeSuperTroops = [
  "Super Barbarian",
  "Super Archer",
  "Super Giant",
  "Sneaky Goblin",
  "Super Wall Breaker",
  "Rocket Balloon",
  "Super Wizard",
  "Super Dragon",
  "Inferno Dragon",
  "Super Miner",
];
export const homeDarkSuperTroops = [
  "Super Minion",
  "Super Hog Rider",
  "Super Valkyrie",
  "Super Witch",
  "Ice Hound",
  "Super Bowler",
];

export const laboratory = [
  ...homePets,
  ...homeTroops,
  ...homeDarkTroops,
  ...homeSpells,
  ...homeSiegeMachines,
  ...builderTroops,
];

export function getPlayerLink(tag: string) {
  return `https://link.clashofclans.com/de?action=OpenPlayerProfile&tag=${encodeURIComponent(
    tag.replace(/#/g, "")
  )}`;
}
