// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "pemvi1ax",
  dataset: "production",
  apiVersion: "2024-07-21",
  useCdn: false,
};

const client = createClient(config);

export default client;
