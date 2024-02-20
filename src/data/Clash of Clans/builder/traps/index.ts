import type BuilderTrap from "@coc/builder/traps/Trap";

import { pushTrap } from "@coc/builder/traps/pushTrap";
import { springTrap } from "@coc/builder/traps/springTrap";
import { mine } from "@coc/builder/traps/mine";
import { megaMine } from "@coc/builder/traps/megaMine";

export const builderTraps: BuilderTrap[] = [
  pushTrap,
  springTrap,
  mine,
  megaMine,
];
