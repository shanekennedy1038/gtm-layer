import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "GTM Layer was built by practitioners who have spent careers in the ERP ecosystem. We understand what it takes to generate pipeline in a complex, relationship-driven market.",
};

const values = [
  {
    title: "Specialist, not generalist",
    description:
      "We only work in the ERP partner space. That means we understand the buying cycle, the competitive landscape, and the decision-makers before we make a single call.",
  },
  {
    title: "AI-augmented, human-led",
    description:
      "Our AI agents do the intelligence and automation work. Our people do the relationship and execution work. Neither replaces the other — the combination is the product.",
  },
  {
    title: "Commercially sharp",
    description:
      "We measure success by pipeline generated and meetings booked against qualified accounts. Vanity metrics don't pay the bills — for us or for you.",
  },
  {
    title: "Built for APAC",
    description:
      "The APAC ERP market has its own dynamics. Relationship timelines, procurement culture, and partner ecosystems differ from North American playbooks. We're local and we understand it.",
  },
];

const team = [
  {
    name: "Shane Kennedy",
    role: "Founder & GTM Lead",
    bio: "Extensive background in ERP channel sales and go-to-market strategy across the APAC region. Spent years inside SAP and independent partner ecosystems before building GTM Layer to fix the pipeline problem that every boutique ERP partner faces.",
  },
];

export default function About() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#3B82F6" }}
          >
            About GTM Layer
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold mt-4 mb-6"
            style={{ fontFamily: "var(--font-sora)", letterSpacing: "-0.02em" }}
          >
            Built by ERP practitioners.
            <br />
            <span className="gradient-text">Powered by agentic AI.</span>
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#9CA3AF" }}
          >
            GTM Layer was founded with a single thesis: that boutique and
            mid-size ERP partners deserve access to the same calibre of
            go-to-market capability that enterprise vendors have — without
            hiring an in-house team of 10.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20" style={{ background: "#060912" }}>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#06B6D4" }}
            >
              The Story
            </span>
            <h2
              className="text-3xl font-bold mt-3 mb-6"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Why we built GTM Layer
            </h2>
            <div className="flex flex-col gap-5 text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
              <p>
                ERP partner sales is one of the most complex go-to-market
                challenges in B2B. Long sales cycles, multi-stakeholder buying
                committees, niche technical audiences, and fierce competition
                inside vendor ecosystems mean that generic outbound playbooks
                simply don&apos;t work.
              </p>
              <p>
                We watched boutique SAP, Oracle, Microsoft, and NetSuite
                partners struggle to generate pipeline without access to the
                intelligence and execution capacity that their larger competitors
                take for granted. Cold lists, offshore SDRs, and one-size-fits-all
                agencies left money on the table every quarter.
              </p>
              <p>
                When large language models and agentic AI systems matured to the
                point where they could genuinely augment complex B2B research and
                outreach tasks, we saw an opportunity to build something
                fundamentally different: a GTM service that combines deep ERP
                market knowledge with a proprietary AI platform — and delivers it
                at a price point that makes sense for boutique to mid-size
                partners.
              </p>
              <p>
                That&apos;s GTM Layer. And it&apos;s the only thing we do.
              </p>
            </div>
          </div>

          <div className="rounded-2xl p-8 border"
            style={{
              background: "rgba(59,130,246,0.05)",
              borderColor: "rgba(59,130,246,0.2)",
            }}
          >
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "var(--font-sora)" }}>
              The GTM Layer difference
            </h3>
            <div className="flex flex-col gap-6">
              {[
                {
                  label: "Generic agency",
                  items: ["General B2B lists", "Offshore SDR volume", "Vanity metrics", "No ecosystem knowledge"],
                  bad: true,
                },
                {
                  label: "GTM Layer",
                  items: ["ERP-specific intelligence", "AI-augmented execution", "Pipeline and meetings", "Deep APAC ecosystem knowledge"],
                  bad: false,
                },
              ].map((col) => (
                <div key={col.label}>
                  <div className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: col.bad ? "#6B7280" : "#06B6D4" }}>
                    {col.label}
                  </div>
                  <ul className="flex flex-col gap-2">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm"
                        style={{ color: col.bad ? "#6B7280" : "#D1D5DB" }}>
                        <span className="text-base">{col.bad ? "✕" : "✓"}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#3B82F6" }}
            >
              What We Stand For
            </span>
            <h2
              className="text-3xl font-bold mt-3"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Our operating principles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="card-hover rounded-2xl p-8 border"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20" style={{ background: "#060912" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#06B6D4" }}
            >
              The Team
            </span>
            <h2
              className="text-3xl font-bold mt-3"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Practitioners, not theorists
            </h2>
          </div>
          <div className="flex justify-center">
            {team.map((member) => (
              <div
                key={member.name}
                className="max-w-lg rounded-2xl p-10 border text-center"
                style={{
                  background: "rgba(59,130,246,0.05)",
                  borderColor: "rgba(59,130,246,0.2)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center text-white font-bold text-2xl"
                  style={{
                    background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                  }}
                >
                  {member.name[0]}
                </div>
                <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-sora)" }}>
                  {member.name}
                </h3>
                <div className="text-sm mb-4" style={{ color: "#3B82F6" }}>
                  {member.role}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-sora)" }}>
            Want to know more?
          </h2>
          <p className="mb-8 text-base" style={{ color: "#9CA3AF" }}>
            Get in touch for a no-obligation conversation about your pipeline
            challenges.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-block px-8 py-4 rounded-xl text-base font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)" }}
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
