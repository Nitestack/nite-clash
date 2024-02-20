import type HomeSpell from "@coc/home/army/spells/Spell";

import { poisonSpell } from "@coc/home/army/darkSpells/poisonSpell";
import { earthquakeSpell } from "@coc/home/army/darkSpells/earthquakeSpell";
import { hasteSpell } from "@coc/home/army/darkSpells/hasteSpell";
import { skeletonSpell } from "@coc/home/army/darkSpells/skeletonSpell";
import { batSpell } from "@coc/home/army/darkSpells/batSpell";

export const darkSpells: HomeSpell[] = [
  poisonSpell,
  earthquakeSpell,
  hasteSpell,
  skeletonSpell,
  batSpell,
];
