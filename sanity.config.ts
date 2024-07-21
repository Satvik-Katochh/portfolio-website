import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
// import {visionTool} from '@sanity/vision'
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Portfolio-Website-New",

  projectId: "pemvi1ax",
  dataset: "production",
  basePath: "/studio",
  // plugins: [structureTool(), visionTool()],

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
