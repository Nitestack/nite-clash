import { tNRH } from "@server/tnrpc";
import { TNRPCError } from "@nitestack/tnrpc/error";
import { type DBVillage } from "@types";

import { z } from "zod";

import { Util } from "clashofclans.js";

export const { GET, tNRHFetch: getClashOfClansUpgradeTrackerVillage } =
  tNRH.get(
    z.object({
      playerTag: z.string(),
    })
  )(
    async ({ input: { playerTag }, context: { prisma } }) => {
      const village = (await prisma.clashOfClansVillage.findUnique({
        where: {
          playerTag: Util.formatTag(playerTag),
        },
        include: {
          builder: true,
          laboratory: true,
          petHouse: true,
        },
      })) as unknown as
        | (DBVillage & {
            createdAt?: Date;
            updatedAt?: Date;
            deletedAt?: Date | null;
          })
        | null;
      if (!village)
        throw new TNRPCError({
          status: "NOT_FOUND",
          message: `Village with 'playerTag' = ${playerTag} was not found!`,
        });
      // if (village.userId != user.id)
      //   throw new TRPCError({
      //     code: "BAD_REQUEST",
      //     message: `Village's 'userId' does not match with 'userId' ${user.id}!`,
      //   });
      delete village.createdAt;
      delete village.updatedAt;
      delete village.deletedAt;
      return village as DBVillage;
    },
    {
      url: "/api/upgrade-tracker/coc",
      protectedRoute: true,
    }
  );
