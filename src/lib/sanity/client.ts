import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "0ho6tcbk",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
