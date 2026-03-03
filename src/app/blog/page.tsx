import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on agentic AI, ERP go-to-market strategy, signal-led selling, and the future of B2B sales development — from the GTM Layer team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section className="py-24" style={{ background: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#019CE2" }}
          >
            GTM Layer Insights
          </span>
          <h1
            className="text-5xl font-bold mt-4 mb-6"
            style={{
              fontFamily: "var(--font-sora)",
              letterSpacing: "-0.02em",
              color: "#1D1D1F",
            }}
          >
            ERP GTM. <span className="gradient-text">Sharp thinking.</span>
          </h1>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "#6E6E73" }}
          >
            Practical perspectives on agentic AI, signal-led selling, and
            go-to-market strategy for ERP partners in APAC.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-32" style={{ background: "#F5F5F7" }}>
        <div className="max-w-5xl mx-auto px-6 pt-12">
          {posts.length === 0 ? (
            <p className="text-center" style={{ color: "#86868B" }}>
              No posts yet. Check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="card-hover rounded-2xl border overflow-hidden bg-white"
                  style={{ borderColor: "rgba(0,0,0,0.08)" }}
                >
                  {/* Card accent bar */}
                  <div
                    className="h-1 w-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #019CE2, #06B6D4)",
                    }}
                  />
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{
                          background: "rgba(1, 156, 226, 0.08)",
                          color: "#019CE2",
                        }}
                      >
                        {post.category}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: "#86868B" }}
                      >
                        {post.readTime}
                      </span>
                    </div>

                    <h2
                      className="text-xl font-bold mb-3 leading-snug"
                      style={{
                        fontFamily: "var(--font-sora)",
                        color: "#1D1D1F",
                      }}
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="transition-colors duration-200 hover:text-blue-500"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    <p
                      className="text-sm leading-relaxed mb-6"
                      style={{ color: "#6E6E73" }}
                    >
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div>
                        <div
                          className="text-xs font-medium"
                          style={{ color: "#1D1D1F" }}
                        >
                          {post.author}
                        </div>
                        <div
                          className="text-xs mt-0.5"
                          style={{ color: "#86868B" }}
                        >
                          {new Date(post.date).toLocaleDateString("en-AU", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-medium"
                        style={{ color: "#019CE2" }}
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
