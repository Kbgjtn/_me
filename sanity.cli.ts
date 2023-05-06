import { defineCliConfig } from "sanity/cli";

const { NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET } =
  process.env;

export default defineCliConfig({
  api: {
    projectId: `${NEXT_PUBLIC_SANITY_PROJECT_ID}`,
    dataset: `${NEXT_PUBLIC_SANITY_DATASET}`,
  },
});
