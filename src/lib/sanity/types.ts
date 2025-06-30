import type { SanityDocument } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/types";

export interface Post extends SanityDocument {
  _type: "post";
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  image?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  body: PortableTextBlock[];
  excerpt: string;
}
