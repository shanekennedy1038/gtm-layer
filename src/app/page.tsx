import Link from "next/link";

const stats = [
  { value: "3x", label: "Pipeline velocity for ERP partners" },
  { value: "APAC", label: "Specialist market focus" },
  { value: "AI-native", label: "Platform built for signal-led GTM" },
];

const layers = [
  {
    id: "data",
    tag: "Layer 01",
    title: "Data Layer",
    description:
      "A centralised market intelligence CRM purpose-built for ERP ecosystems. We aggregate signals across firmographic data, intent data, partner activity, and technology install base — so your team always knows who to talk to and why.",
    points: [
      "Account enrichment across SAP, Oracle, Microsoft & NetSuite landscapes",
      "Intent signal aggregation from multiple sources",
      "Competitive intelligence and whitespace mapping",
      "ICP scoring and account prioritisation",
    ],
    color: "#3B82F6",
  },
  {
    id: "agent",
    tag: "Layer 02",
    title: "Agent Layer",
    description:
      "Specialist AI agents that do the heavy lifting — surfacing opportunities, generating outreach, briefing campaigns, and enriching accounts autonomously. Your human team focuses on conversations, not admin.",
    points: [
      "Signal Surfacing Agent — identifies buying triggers in real time",
      "Enrichment Agent — fills account and contact gaps automatically",
      "Outreach Agent — generates personalised, context-aware sequences",
      "Campaign Brief Agent — turns ICP data into ready-to-run campaigns",
    ],
    color: "#06B6D4",
  },
  {
    id: "gtm",
    tag: "Layer 03",
    title: "GTM Layer",
    description:
      "Senior SDR and GTM execution from practitioners who understand the ERP partner landscape. We run your outbound, book qualified meetings, and report on pipeline — end to end.",
    points: [
      "Dedicated SDR execution against your ICP",
      "Qualified meeting booking and handoff",
      "Campaign and sequence management",
      "Pipeline reporting and cadence review",
    ],
    color: "#8B5CF6",
  },
];

const testimonials = [
  {
    quote:
      "GTM Layer understands the SAP partner world better than any agency we've worked with. They got up to speed fast and delivered pipeline in the first quarter.",
    name: "Head of Sales",
    company: "Mid-size SAP Reseller, Australia",
  },
  {
    quote:
      "The combination of real market intelligence and AI-driven outreach is a genuine differentiator. We're having conversations we couldn't access before.",
    name: "CEO",
    company: "NetSuite Implementation Partner, APAC",
  },
  {
    quote:
      "Finally a GTM partner that doesn't treat ERP as a vertical afterthought. They know the ecosystem and it shows in the quality of the leads.",
    name: "Marketing Director",
    company: "Microsoft Dynamics Partner, ANZ",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ paddingTop: "96px" }}
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59,130,246,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium mb-8"
            style={{
              borderColor: "rgba(59, 130, 246, 0.3)",
              background: "rgba(59, 130, 246, 0.08)",
              color: "#93C5FD",
            }}>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" style={{ backgroundColor: "#06B6D4" }} />
            Agentic AI Go-To-Market · ERP Specialists · APAC
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-sora)", letterSpacing: "-0.02em" }}
          >
            Pipeline at scale.
            <br />
            <span className="gradient-text">No extra headcount.</span>
          </h1>

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ color: "#9CA3AF" }}
          >
            GTM Layer is a specialist go-to-market agency for SAP, Oracle,
            Microsoft, and NetSuite partners in Australia and APAC. We combine a
            proprietary AI platform with senior SDR execution to deliver
            qualified pipeline — fast.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-glow px-8 py-4 rounded-xl text-base font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
              }}
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-xl text-base font-semibold border transition-all duration-200"
              style={{
                color: "#D1D5DB",
                borderColor: "rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              See How It Works
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 border-t pt-12"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            {stats.map((s) => (
              <div key={s.value} className="text-center">
                <div
                  className="text-4xl font-bold mb-2 gradient-text"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {s.value}
                </div>
                <div className="text-sm" style={{ color: "#6B7280" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Layers */}
      <section className="py-32" style={{ background: "#060912" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#3B82F6" }}
            >
              How It Works
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-3 mb-4"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              The Three Layers
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "#6B7280" }}>
              Our platform stacks intelligence, automation, and human execution
              into a unified go-to-market system.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {layers.map((layer) => (
              <div
                key={layer.id}
                className="card-hover rounded-2xl p-8 border"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <span
                  className="text-xs font-bold uppercase tracking-widest mb-4 block"
                  style={{ color: layer.color }}
                >
                  {layer.tag}
                </span>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-sora)",
                    color: layer.color,
                  }}
                >
                  {layer.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#9CA3AF" }}>
                  {layer.description}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {layer.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm" style={{ color: "#D1D5DB" }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: layer.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: "#3B82F6" }}
            >
              Explore all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32" style={{ background: "#0A0F1E" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#06B6D4" }}
            >
              What Our Clients Say
            </span>
            <h2
              className="text-4xl font-bold mt-3"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Built for ERP partners. <br />Proven in the APAC market.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 border"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(59, 130, 246, 0.15)",
                }}
              >
                <p className="text-base italic leading-relaxed mb-6" style={{ color: "#D1D5DB" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: "#6B7280" }}>{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(6,182,212,0.1) 100%)",
          borderTop: "1px solid rgba(59,130,246,0.2)",
          borderBottom: "1px solid rgba(59,130,246,0.2)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Ready to scale your pipeline?
          </h2>
          <p className="text-lg mb-10" style={{ color: "#9CA3AF" }}>
            Book a no-obligation discovery call with our team. We&apos;ll map your
            current GTM gaps and show you exactly how the GTM Layer system
            works for your market.
          </p>
          <Link
            href="/contact"
            className="btn-glow inline-block px-10 py-4 rounded-xl text-base font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)" }}
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
