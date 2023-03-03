import { procedure, router } from "../trpc";

export const appRouter = router({
  casesByAge: procedure.query(() => {
    return [
      { title: "Sports", value: 275 },
      { title: "Strategy", value: 115 },
      { title: "Action", value: 120 },
      { title: "Shooter", value: 350 },
      { title: "Other", value: 150 },
    ];
  }),
  variants: procedure.query(() => {
    return [
      { title: "Sports", value: 275 },
      { title: "Strategy", value: 115 },
      { title: "Action", value: 120 },
      { title: "Shooter", value: 350 },
      { title: "Other", value: 150 },
    ];
  }),
});

export type AppRouter = typeof appRouter;
