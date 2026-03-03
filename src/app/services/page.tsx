import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the GTM Layer three-part system: Data Layer for market intelligence, Agent Layer for AI-driven automation, and GTM Layer for senior SDR execution.",
};

const dataAgents = [
  {
    name: "Account Enrichment Agent",
    description:
      "Automatically enriches account profiles with firmographic data, technology install base, headcount signals, and ERP ecosystem metadata.",
  },
  {
    name: "ICP Scoring Agent",
    description:
      "Scores and ranks accounts against your ideal customer profile across multiple dimensions — fit, timing, and whitespace opportunity.",
  },
  {
    name: "Competitive Intelligence Agent",
    description:
      "Monitors competitor activity, partner announcements, and ecosystem moves to surface competitive context for your sales team.",
  },
  {
    name: "Whitespace Mapping Agent",
    description:
      "Identifies untapped segments within your target market — accounts that match your ICP but sit outside your current pipeline.",
  },
];

const agentAgents = [
  {
    name: "Signal Surfacing Agent",
    description:
      "Monitors intent signals, job changes, technology shifts, and buying trigger events in real time — flagging accounts that are in-market now.",
  },
  {
    name: "Outreach Generation Agent",
    description:
      "Generates personalised, context-aware email sequences and call scripts based on account data, signals, and your value proposition.",
  },
  {
    name: "Campaign Brief Agent",
    description:
      "Converts ICP data and market signals into ready-to-run campaign briefs — including messaging, offer, channel, and sequencing recommendations.",
  },
  {
    name: "Meeting Prep Agent",
    description:
      "Before every booked meeting, generates a detailed account brief: pain points, key stakeholders, relevant signals, and recommended talking points.",
  },
];

const gtmServices = [
  {
    name: "SDR Execution",
    description:
      "Dedicated senior SDR resource targeting your ICP accounts with personalised, signal-led outreach across email, phone, and LinkedIn.",
  },
  {
    name: "Qualified Meeting Booking",
    description:
      "We book, qualify, and hand off meetings to your internal sales team with full briefing notes — so they're prepped before the first call.",
  },
  {
    name: "Sequence & Campaign Management",
    description:
      "End-to-end management of outbound sequences, A/B testing, and campaign optimisation against pipeline and conversion metrics.",
  },
  {
    name: "Pipeline Reporting",
    description:
      "Weekly and monthly pipeline reports covering outreach volume, response rates, meetings booked, and pipeline value created.",
  },
  {
    name: "GTM Strategy Reviews",
    description:
      "Quarterly strategic reviews covering ICP refinement, market trends, competitive positioning, and campaign direction for the next period.",
  },
];

export default function Services() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(6,182,212,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#06B6D4" }}
          >
            Our Services
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold mt-4 mb-6"
            style={{ fontFamily: "var(--font-sora)", letterSpacing: "-0.02em" }}
          >
            Three layers.
            <br />
            <span className="gradient-text">One GTM system.</span>
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#9CA3AF" }}
          >
            GTM Layer is not a single tool or a single service. It&apos;s a stacked
            system — intelligence, automation, and execution — that works together to
            generate qualified pipeline for ERP partners.
          </p>
        </div>
      </section>

      {/* Data Layer */}
      <section id="data-layer" className="py-24" style={{ background: "#060912" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                style={{ background: "rgba(59,130,246,0.12)", color: "#3B82F6", border: "1px solid rgba(59,130,246,0.25)" }}>
                Layer 01 — Data Layer
              </div>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Market intelligence built for the ERP ecosystem
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#9CA3AF" }}>
                Most B2B data tools are built for horizontal markets. GTM Layer&apos;s
                Data Layer is built exclusively for the ERP partner ecosystem — with
                enrichment, scoring, and intelligence tailored to how SAP, Oracle,
                Microsoft, and NetSuite partners actually sell.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#9CA3AF" }}>
                We aggregate firmographic data, ERP install base signals, headcount
                shifts, partner activity, and intent data into a centralised CRM that
                becomes your single source of truth for who to target, when, and why.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "SAP, Oracle, Microsoft Dynamics, NetSuite coverage",
                  "APAC-first data sourcing and verification",
                  "CRM integration with your existing stack",
                  "Continuous enrichment — not a one-time export",
                ].map((pt) => (
                  <div key={pt} className="flex items-start gap-3 text-sm" style={{ color: "#D1D5DB" }}>
                    <span className="mt-1 text-blue-400" style={{ color: "#3B82F6" }}>✓</span>
                    {pt}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dataAgents.map((agent) => (
                <div
                  key={agent.name}
                  className="card-hover rounded-xl p-5 border"
                  style={{
                    background: "rgba(59,130,246,0.05)",
                    borderColor: "rgba(59,130,246,0.2)",
                  }}
                >
                  <div className="w-6 h-6 mb-3 rounded"
                    style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)" }} />
                  <h3 className="text-sm font-bold mb-2" style={{ fontFamily: "var(--font-sora)" }}>
                    {agent.name}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#9CA3AF" }}>
                    {agent.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agent Layer */}
      <section id="agent-layer" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {agentAgents.map((agent) => (
                <div
                  key={agent.name}
                  className="card-hover rounded-xl p-5 border"
                  style={{
                    background: "rgba(6,182,212,0.05)",
                    borderColor: "rgba(6,182,212,0.2)",
                  }}
                >
                  <div className="w-6 h-6 mb-3 rounded"
                    style={{ background: "linear-gradient(135deg, #06B6D4, #3B82F6)" }} />
                  <h3 className="text-sm font-bold mb-2" style={{ fontFamily: "var(--font-sora)" }}>
                    {agent.name}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#9CA3AF" }}>
                    {agent.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                style={{ background: "rgba(6,182,212,0.1)", color: "#06B6D4", border: "1px solid rgba(6,182,212,0.25)" }}>
                Layer 02 — Agent Layer
              </div>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                AI agents that do the intelligence work
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#9CA3AF" }}>
                Our Agent Layer is a suite of specialist AI agents that operate
                continuously on top of the Data Layer — surfacing signals, generating
                outreach, briefing campaigns, and enriching accounts so your human
                team never starts from zero.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#9CA3AF" }}>
                These are not generic AI tools. Each agent is trained on ERP
                go-to-market contexts, understands the nuances of the partner
                ecosystem, and is calibrated against your specific ICP and value
                proposition.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Operates 24/7 without manual prompting",
                  "Integrates with your CRM and outreach tools",
                  "Human review and approval gates for all outbound",
                  "Continuously improves on engagement feedback",
                ].map((pt) => (
                  <div key={pt} className="flex items-start gap-3 text-sm" style={{ color: "#D1D5DB" }}>
                    <span style={{ color: "#06B6D4" }}>✓</span>
                    {pt}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GTM Execution Layer */}
      <section id="gtm-layer" className="py-24" style={{ background: "#060912" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background: "rgba(139,92,246,0.1)", color: "#A78BFA", border: "1px solid rgba(139,92,246,0.25)" }}>
              Layer 03 — GTM Layer
            </div>
            <h2
              className="text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Senior SDR execution. End to end.
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "#9CA3AF" }}>
              The GTM Layer is where intelligence and automation meet human
              execution. Our senior SDRs use the Data Layer and Agent Layer outputs
              to run focused, contextual outbound — and they&apos;re accountable to
              pipeline, not just activity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gtmServices.map((s) => (
              <div
                key={s.name}
                className="card-hover rounded-2xl p-7 border"
                style={{
                  background: "rgba(139,92,246,0.04)",
                  borderColor: "rgba(139,92,246,0.18)",
                }}
              >
                <h3 className="text-base font-bold mb-3" style={{ fontFamily: "var(--font-sora)", color: "#A78BFA" }}>
                  {s.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-sora)" }}>
            Engagement model
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "#9CA3AF" }}>
            We work on a retained engagement basis — typically a three-month
            minimum with monthly reviews. Pricing is scoped based on your ICP
            size, market complexity, and the layers you need. Most engagements
            include all three layers from day one.
          </p>
          <p className="text-sm mb-10" style={{ color: "#6B7280" }}>
            We don&apos;t publish fixed pricing because the right scope looks
            different for every partner. Book a discovery call and we&apos;ll
            give you a clear picture of what&apos;s involved.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-block px-8 py-4 rounded-xl text-base font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)" }}
          >
            Get a Proposal
          </Link>
        </div>
      </section>
    </div>
  );
}
