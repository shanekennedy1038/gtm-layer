"use client";

import Link from "next/link";

const footerLinks = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Services: [
    { href: "/services#data-layer", label: "Data Layer" },
    { href: "/services#agent-layer", label: "Agent Layer" },
    { href: "/services#gtm-layer", label: "GTM Layer" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: "#060912",
        borderColor: "rgba(59, 130, 246, 0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                }}
              >
                G
              </div>
              <span
                className="text-lg font-bold tracking-tight"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                GTM<span className="text-blue-400"> Layer</span>
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "#6B7280" }}
            >
              Agentic AI go-to-market for ERP partners across Australia and
              APAC. We scale your pipeline — without scaling headcount.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium px-3 py-1.5 rounded border transition-colors duration-200"
                style={{
                  color: "#9CA3AF",
                  borderColor: "rgba(59, 130, 246, 0.2)",
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#6B7280" }}
              >
                {group}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#9CA3AF" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#ffffff")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#9CA3AF")
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(59, 130, 246, 0.1)" }}
        >
          <p className="text-xs" style={{ color: "#4B5563" }}>
            © {new Date().getFullYear()} GTM Layer Pty Ltd. All rights
            reserved.
          </p>
          <p className="text-xs" style={{ color: "#4B5563" }}>
            Melbourne, Australia · Serving APAC
          </p>
        </div>
      </div>
    </footer>
  );
}
