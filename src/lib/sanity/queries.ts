export const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  excerpt
}`;

export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
