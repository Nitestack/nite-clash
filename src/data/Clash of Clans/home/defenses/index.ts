import type HomeDefense from "@coc/home/defenses/Defense";

import { wall } from "@coc/home/defenses/wall";
import { cannon } from "@coc/home/defenses/cannon";
import { archerTower } from "@coc/home/defenses/archerTower";
import { mortar } from "@coc/home/defenses/mortar";
import { airDefense } from "@coc/home/defenses/airDefense";
import { wizardTower } from "@coc/home/defenses/wizardTower";
import { airSweeper } from "@coc/home/defenses/airSweeper";
import { hiddenTesla } from "@coc/home/defenses/hiddenTesla";
import { bombTower } from "@coc/home/defenses/bombTower";
import { xBow } from "@coc/home/defenses/xBow";
import { infernoTower } from "@coc/home/defenses/infernoTower";
import { eagleArtillery } from "@coc/home/defenses/eagleArtillery";
import { scattershot } from "@coc/home/defenses/scattershot";
import { buildersHut } from "@coc/home/defenses/buildersHut";
import { spellTower } from "@coc/home/defenses/spellTower";
import { monolith } from "@coc/home/defenses/monolith";

import { gigaTesla } from "@coc/home/defenses/gigaTesla";
import { gigaInferno1 } from "@coc/home/defenses/gigaInferno1";
import { gigaInferno2 } from "@coc/home/defenses/gigaInferno2";
import { gigaInferno3 } from "@coc/home/defenses/gigaInferno3";

export const defenses: HomeDefense[] = [
  wall,
  cannon,
  archerTower,
  mortar,
  airDefense,
  wizardTower,
  airSweeper,
  hiddenTesla,
  bombTower,
  xBow,
  infernoTower,
  eagleArtillery,
  gigaTesla,
  scattershot,
  gigaInferno1,
  buildersHut,
  gigaInferno2,
  spellTower,
  monolith,
  gigaInferno3,
];
