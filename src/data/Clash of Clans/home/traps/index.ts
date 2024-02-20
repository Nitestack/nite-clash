import type HomeTrap from "@coc/home/traps/Trap";

import { bomb } from "@coc/home/traps/bomb";
import { springTrap } from "@coc/home/traps/springTrap";
import { airBomb } from "@coc/home/traps/airBomb";
import { giantBomb } from "@coc/home/traps/giantBomb";
import { seekingAirMine } from "@coc/home/traps/seekingAirMine";
import { skeletonTrap } from "@coc/home/traps/skeletonTrap";
import { tornadoTrap } from "@coc/home/traps/tornadoTrap";

export const traps: HomeTrap[] = [
  bomb,
  springTrap,
  airBomb,
  giantBomb,
  seekingAirMine,
  skeletonTrap,
  tornadoTrap,
];
