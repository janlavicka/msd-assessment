import { procedure, router } from "../trpc";

export const appRouter = router({
  casesByAge: procedure.query(async () => {
    const data = await fetch(
      "https://api.coronavirus.data.gov.uk/generic/soa/region/E12000007/newCasesBySpecimenDateAgeDemographics",
    ).then((res) => res.json());

    return (
      data.payload
        // filter out the age ranges that are too large
        .filter((item: any) => {
          if (!item.age.includes("_")) return false;

          const [min, max] = item.age.split("_");

          return parseInt(max) - parseInt(min) < 10;
        })
        // sort by age range
        .sort((a: any, b: any) => {
          return a.age.localeCompare(b.age);
        })
        // map to the format that the chart expects
        .map((item: any) => ({
          title: item.age.replace("_", " - "),
          value: item.cases,
        }))
    );
  }),
  variants: procedure.query(async () => {
    const data = await fetch(
      "https://api.coronavirus.data.gov.uk/generic/soa/region/E12000007/variants",
    ).then((res) => res.json());

    // map to the format that the chart expects
    return data.payload.map((item: any) => ({
      title: item.variant,
      value: item.newWeeklyPercentage,
    }));
  }),
});

export type AppRouter = typeof appRouter;
