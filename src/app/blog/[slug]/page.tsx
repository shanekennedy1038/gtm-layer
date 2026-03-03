import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return { title: post.title, description: post.excerpt };
  } catch {
    return { title: "Post not found" };
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div style={{ paddingTop: "80px", background: "#FFFFFF" }}>
      {/* Back link */}
      <div className="max-w-3xl mx-auto px-6 pt-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm transition-colors duration-200"
          style={{ color: "#86868B" }}
        >
          ← Back to Blog
        </Link>
      </div>

      {/* Post */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(1, 156, 226, 0.08)",
                color: "#019CE2",
              }}
            >
              {post.category}
            </span>
            <span className="text-xs" style={{ color: "#86868B" }}>
              {post.readTime}
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-sora)",
              letterSpacing: "-0.02em",
              color: "#1D1D1F",
            }}
          >
            {post.title}
          </h1>

          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: "#6E6E73" }}
          >
            {post.excerpt}
          </p>

          <div
            className="flex items-center gap-4 pt-6 border-t"
            style={{ borderColor: "rgba(0,0,0,0.08)" }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{
                background: "linear-gradient(135deg, #019CE2, #06B6D4)",
              }}
            >
              {post.author[0]}
            </div>
            <div>
              <div className="text-sm font-medium" style={{ color: "#1D1D1F" }}>
                {post.author}
              </div>
              <div className="text-xs" style={{ color: "#86868B" }}>
                {new Date(post.date).toLocaleDateString("en-AU", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>
        </header>

        {/* Divider */}
        <div
          className="h-px mb-12"
          style={{
            background:
              "linear-gradient(90deg, #019CE2, #06B6D4, transparent)",
          }}
        />

        {/* Post body */}
        <div className="prose-gtm">
          <MDXRemote source={post.content} />
        </div>

        {/* Footer nav */}
        <div
          className="mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(0,0,0,0.08)" }}
        >
          <Link
            href="/blog"
            className="text-sm"
            style={{ color: "#86868B" }}
          >
            ← All articles
          </Link>
          <Link
            href="/contact"
            className="btn-glow px-6 py-3 rounded-lg text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #019CE2, #06B6D4)" }}
          >
            Talk to GTM Layer →
          </Link>
        </div>
      </article>
    </div>
  );
}
