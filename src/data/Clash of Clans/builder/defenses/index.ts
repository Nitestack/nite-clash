import type BuilderDefense from "@coc/builder/defenses/Defense";

import { wall } from "@coc/builder/defenses/wall";
import { cannon } from "@coc/builder/defenses/cannon";
import { archerTower } from "@coc/builder/defenses/archerTower";
import { doubleCannon } from "@coc/builder/defenses/doubleCannon";
import { hiddenTesla } from "@coc/builder/defenses/hiddenTesla";
import { fireCrackers } from "@coc/builder/defenses/firecrackers";
import { crusher } from "@coc/builder/defenses/crusher";
import { guardPost } from "@coc/builder/defenses/guardPost";
import { airBombs } from "@coc/builder/defenses/airBombs";
import { multiMortar } from "@coc/builder/defenses/multiMortar";
import { roaster } from "@coc/builder/defenses/roaster";
import { giantCannon } from "@coc/builder/defenses/giantCannon";
import { megaTesla } from "@coc/builder/defenses/megaTesla";
import { lavaLauncher } from "@coc/builder/defenses/lavaLauncher";
import { xBow } from "@coc/builder/defenses/xBow";

export const builderDefenses: BuilderDefense[] = [
  wall,
  cannon,
  archerTower,
  doubleCannon,
  hiddenTesla,
  fireCrackers,
  crusher,
  guardPost,
  airBombs,
  multiMortar,
  roaster,
  giantCannon,
  megaTesla,
  lavaLauncher,
  xBow,
];
