import type BuilderHero from "@coc/builder/army/heroes/Hero";

import { battleMachine } from "@coc/builder/army/heroes/battleMachine";
import { battleCopter } from "@coc/builder/army/heroes/battleCopter";

export const builderHeroes: BuilderHero[] = [battleMachine, battleCopter];
