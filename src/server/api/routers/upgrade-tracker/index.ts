import { createTRPCRouter } from "@trpc";

import { coc } from "@server/api/routers/upgrade-tracker/coc";

export const upgradeTracker = createTRPCRouter({
  coc: coc,
});
