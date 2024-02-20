"use server";

import { tNSA } from "@server/tnrpc";
import { TNRPCError } from "@nitestack/tnrpc/error";

import { Util } from "clashofclans.js";

import { z } from "zod";

export const updateAPIPlayer = tNSA(z.object({ playerTag: z.string() }))(
  async ({
    input: { playerTag },
    context: {
      api: { coc },
      prisma,
    },
  }) => {
    const response = await coc.rest.getPlayer(Util.formatTag(playerTag));
    if (!response.ok)
      throw new TNRPCError({
        status: "NOT_FOUND",
        message: `APIPlayer with playerTag '${playerTag}' was not found!`,
      });
    const updatedVillage = await prisma.clashOfClansVillage.update({
      where: {
        playerTag: Util.formatTag(playerTag),
      },
      data: {
        //@ts-expect-error: data is not typed
        player: response.data,
      },
    });
    if (!updatedVillage)
      throw new TNRPCError({
        status: "SERVER_ERROR",
        message: `Village with 'playerTag' = ${playerTag} couldn't be updated!`,
      });
    return response.data;
  }
);

export const updateVillage = tNSA(
  z.object({
    playerTag: z.string(),
    village: z.enum(["home", "builder"]),
    villageData: z.record(z.any()),
  })
)(
  async ({
    input: { playerTag, village, villageData },
    context: { prisma },
  }) => {
    const updatedVillage = await prisma.clashOfClansVillage.update({
      where: {
        playerTag: Util.formatTag(playerTag),
      },
      data: {
        [village === "home" ? "homeVillage" : "builderBase"]: villageData,
      },
    });
    if (!updatedVillage)
      throw new TNRPCError({
        status: "INVALID_INPUT",
        message: `Village with 'playerTag' = ${playerTag} couldn't be updated!`,
      });
    return updatedVillage;
  }
);
