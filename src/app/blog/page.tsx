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
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#3B82F6" }}
          >
            GTM Layer Insights
          </span>
          <h1
            className="text-5xl font-bold mt-4 mb-6"
            style={{ fontFamily: "var(--font-sora)", letterSpacing: "-0.02em" }}
          >
            ERP GTM. <span className="gradient-text">Sharp thinking.</span>
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#9CA3AF" }}>
            Practical perspectives on agentic AI, signal-led selling, and
            go-to-market strategy for ERP partners in APAC.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-32">
        <div className="max-w-5xl mx-auto px-6">
          {posts.length === 0 ? (
            <p className="text-center" style={{ color: "#6B7280" }}>
              No posts yet. Check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="card-hover rounded-2xl border overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Card header accent */}
                  <div
                    className="h-1 w-full"
                    style={{
                      background: "linear-gradient(90deg, #3B82F6, #06B6D4)",
                    }}
                  />
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{
                          background: "rgba(59,130,246,0.12)",
                          color: "#93C5FD",
                        }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs" style={{ color: "#6B7280" }}>
                        {post.readTime}
                      </span>
                    </div>

                    <h2
                      className="text-xl font-bold mb-3 leading-snug"
                      style={{ fontFamily: "var(--font-sora)" }}
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-blue-400 transition-colors duration-200"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    <p
                      className="text-sm leading-relaxed mb-6"
                      style={{ color: "#9CA3AF" }}
                    >
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-medium text-white">
                          {post.author}
                        </div>
                        <div className="text-xs mt-0.5" style={{ color: "#6B7280" }}>
                          {new Date(post.date).toLocaleDateString("en-AU", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-medium transition-colors duration-200"
                        style={{ color: "#3B82F6" }}
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
