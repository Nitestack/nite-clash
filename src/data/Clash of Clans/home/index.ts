import type Base from "@coc/Base";

import { defenses } from "@coc/home/defenses";
import { army } from "@coc/home/army";
import { troops } from "@coc/home/army/troops";
import { darkTroops } from "@coc/home/army/darkTroops";
import { heroes } from "@coc/home/army/heroes";
import { heroPets } from "@coc/home/army/heroes/pets";
import { traps } from "@coc/home/traps";
import { resources } from "@coc/home/resources";
import { spells } from "@coc/home/army/spells";
import { darkSpells } from "@coc/home/army/darkSpells";
import { siegeMachines } from "@coc/home/army/siegeMachines";
import { townHall } from "@coc/home/townHall";

export const home: Base[] = [
  townHall,
  ...defenses,
  ...army,
  ...traps,
  ...resources,
  ...heroes,
  ...heroPets,
  ...troops,
  ...darkTroops,
  ...spells,
  ...darkSpells,
  ...siegeMachines,
];
