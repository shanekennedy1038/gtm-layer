import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a discovery call with the GTM Layer team. We'll map your current GTM gaps and show you how our agentic AI system works for your ERP partner business.",
};

export default function Contact() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: info */}
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#3B82F6" }}
              >
                Get in Touch
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold mt-4 mb-6"
                style={{
                  fontFamily: "var(--font-sora)",
                  letterSpacing: "-0.02em",
                }}
              >
                Let&apos;s talk
                <br />
                <span className="gradient-text">pipeline.</span>
              </h1>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#9CA3AF" }}
              >
                Fill in the form and one of our team will be in touch within
                one business day. Discovery calls typically run 30–45 minutes
                and are genuinely no-obligation — we&apos;ll give you a clear
                picture of what&apos;s possible before any commercial conversation.
              </p>

              <div className="flex flex-col gap-6">
                {[
                  {
                    label: "Who you&apos;ll speak with",
                    value:
                      "Shane Kennedy, Founder of GTM Layer. Not an SDR or sales coordinator — the principal directly.",
                  },
                  {
                    label: "Response time",
                    value:
                      "Within one business day, usually sooner. We&apos;re based in Melbourne, AEST.",
                  },
                  {
                    label: "Who we work with",
                    value:
                      "SAP, Oracle, Microsoft Dynamics, and NetSuite partners across Australia, New Zealand, and broader APAC.",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div
                      className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#3B82F6" }}
                    />
                    <div>
                      <div className="text-sm font-semibold text-white mb-1">
                        {item.label}
                      </div>
                      <div className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust signal */}
              <div
                className="mt-10 rounded-xl p-5 border"
                style={{
                  background: "rgba(59,130,246,0.06)",
                  borderColor: "rgba(59,130,246,0.2)",
                }}
              >
                <p className="text-sm leading-relaxed" style={{ color: "#D1D5DB" }}>
                  <span className="font-semibold text-white">Not ready for a call?</span>{" "}
                  That&apos;s fine — describe your situation in the message field and
                  we&apos;ll respond with a written outline of how GTM Layer could
                  apply to your business. No deck, no pitch — just a straight
                  answer.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
