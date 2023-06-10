import { codeRouter } from "@/server/api/routers/code";
import { createTRPCRouter } from "@/server/api/trpc";
import { emailListRouter } from "./routers/email_list";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  code: codeRouter,
  email_list: emailListRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
