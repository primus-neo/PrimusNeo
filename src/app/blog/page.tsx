import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { POSTS_QUERY } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import type { Post } from "@/lib/sanity/types";

const options = { next: { revalidate: 30 } };

export default async function BlogPage() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY, {}, options);

  return (
    <main className="min-h-screen w-full p-8">
      <div className="mx-auto" style={{ width: '80vw' }}>
        <h1 className="text-5xl font-bold mb-12 text-center text-glow">Follow what we are up to</h1>
        {posts.length > 0 ? (
          <div className="space-y-8">
            {posts.map((post) => {
              const imageUrl = post.image
                ? urlFor(post.image)?.width(400).height(300).url()
                : "/images/logo-primus-neo.png";

              return (
                <Link 
                  href={`/blog/${post.slug.current}`}
                  key={post._id}
                  className="group hover:no-underline block"
                >
                  <article className="bg-black/50 rounded-xl overflow-hidden border border-border/40 transition-all duration-200 hover:border-border/80 hover:shadow-lg">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 relative">
                        <img
                          src={imageUrl}
                          alt={post.title}
                          className="object-cover w-full h-full min-h-[250px] transition-transform duration-200 group-hover:scale-105"
                        />
                      </div>
                      <div className="md:w-2/3 p-8">
                        <div className="space-y-4">
                          <h2 className="text-2xl font-semibold group-hover:text-primary text-glow transition-colors">
                            {post.title}
                          </h2>
                          <time className="text-sm text-muted-foreground block">
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                          <p className="text-muted-foreground leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No posts found.</p>
        )}
      </div>
    </main>
  );
}
