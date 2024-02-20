import type HomeSpell from "@coc/home/army/spells/Spell";

import { lightningSpell } from "@coc/home/army/spells/lightningSpell";
import { healingSpell } from "@coc/home/army/spells/healingSpell";
import { rageSpell } from "@coc/home/army/spells/rageSpell";
import { jumpSpell } from "@coc/home/army/spells/jumpSpell";
import { freezeSpell } from "@coc/home/army/spells/freezeSpell";
import { cloneSpell } from "@coc/home/army/spells/cloneSpell";
import { invisibilitySpell } from "@coc/home/army/spells/invisibilitySpell";
import { recallSpell } from "@coc/home/army/spells/recallSpell";

export const spells: HomeSpell[] = [
  lightningSpell,
  healingSpell,
  rageSpell,
  jumpSpell,
  freezeSpell,
  cloneSpell,
  invisibilitySpell,
  recallSpell,
];
