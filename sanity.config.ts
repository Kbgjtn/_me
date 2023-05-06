import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const { NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET } =
  process.env;

export default defineConfig({
  basePath: "/studio",
  name: "default",
  title: "_me blog",
  projectId: `${NEXT_PUBLIC_SANITY_PROJECT_ID}`,
  dataset: `${NEXT_PUBLIC_SANITY_DATASET}`,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
