import type HomeOffense from "@coc/home/army";

import { wallWrecker } from "@coc/home/army/siegeMachines/wallWrecker";
import { battleBlimp } from "@coc/home/army/siegeMachines/battleBlimp";
import { stoneSlammer } from "@coc/home/army/siegeMachines/stoneSlammer";
import { siegeBarracks } from "@coc/home/army/siegeMachines/siegeBarracks";
import { logLauncher } from "@coc/home/army/siegeMachines/logLauncher";
import { flameFlinger } from "@coc/home/army/siegeMachines/flameFlinger";
import { battleDrill } from "@coc/home/army/siegeMachines/battleDrill";

export const siegeMachines: HomeOffense[] = [
  wallWrecker,
  battleBlimp,
  stoneSlammer,
  siegeBarracks,
  logLauncher,
  flameFlinger,
  battleDrill,
];
