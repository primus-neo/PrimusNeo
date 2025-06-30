import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "./client";

const { projectId, dataset } = client.config();

const builder = projectId && dataset 
  ? imageUrlBuilder({ projectId, dataset })
  : null;

export const urlFor = (source: SanityImageSource) =>
  builder ? builder.image(source) : null;
