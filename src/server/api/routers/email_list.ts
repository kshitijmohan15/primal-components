import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const emailListRouter = createTRPCRouter({
  createEmailList: publicProcedure
    .input(z.object({ email: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.emailList.create({
        data: {
          email: input.email,
        },
      });
    }),
});
