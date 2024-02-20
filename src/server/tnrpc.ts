import { createTNRPC } from "@nitestack/tnrpc";

import { prisma } from "@db";
import getAPI from "@server/api";

export const { tNRH, tNSA } = createTNRPC(
  {
    baseUrl: "http://localhost:3000",
  },
  async () => ({
    prisma,
    api: {
      coc: await getAPI("coc"),
      cr: await getAPI("cr"),
      bs: await getAPI("bs"),
    },
  })
);
