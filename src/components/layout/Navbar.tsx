"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255, 255, 255, 0.92)" : "rgba(255, 255, 255, 0)",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.08)" : "none",
        boxShadow: scrolled ? "0 1px 12px rgba(0, 0, 0, 0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
            style={{ background: "linear-gradient(135deg, #019CE2, #06B6D4)" }}
          >
            G
          </div>
          <span
            className="text-lg font-bold tracking-tight"
            style={{ fontFamily: "var(--font-sora)", color: "#1D1D1F" }}
          >
            GTM<span style={{ color: "#019CE2" }}> Layer</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{
                color: pathname === link.href ? "#019CE2" : "#6E6E73",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1D1D1F")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  pathname === link.href ? "#019CE2" : "#6E6E73")
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="btn-glow px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #019CE2, #06B6D4)" }}
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[
            menuOpen ? "rotate(45deg) translateY(8px)" : "none",
            null,
            menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
          ].map((transform, i) =>
            transform === null ? (
              <span
                key={i}
                className="block w-6 h-0.5 transition-all duration-200"
                style={{ backgroundColor: "#1D1D1F", opacity: menuOpen ? 0 : 1 }}
              />
            ) : (
              <span
                key={i}
                className="block w-6 h-0.5 transition-all duration-200"
                style={{ backgroundColor: "#1D1D1F", transform }}
              />
            )
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-6 flex flex-col gap-4"
          style={{
            background: "rgba(255, 255, 255, 0.98)",
            borderColor: "rgba(0, 0, 0, 0.08)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium"
              style={{
                color: pathname === link.href ? "#019CE2" : "#1D1D1F",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 px-5 py-3 rounded-lg text-sm font-semibold text-white text-center btn-glow"
            style={{ background: "linear-gradient(135deg, #019CE2, #06B6D4)" }}
          >
            Book a Call
          </Link>
        </div>
      )}
    </header>
  );
}
