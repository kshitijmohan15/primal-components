import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const codeRouter = createTRPCRouter({
  createCode: publicProcedure
    .input(z.object({ code: z.string(), title: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.code.create({
        data: {
          code: input.code,
          title: input.title,
        },
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.code.findMany();
  }),
  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.code.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
});
