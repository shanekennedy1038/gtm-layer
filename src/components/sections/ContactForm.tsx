"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setState("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          company: form.company,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setState("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setState("error");
    }
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "0.75rem",
    padding: "0.875rem 1rem",
    color: "#ffffff",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "#9CA3AF",
    marginBottom: "0.5rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
  };

  return (
    <div
      className="rounded-2xl border p-8"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      {state === "success" ? (
        <div className="text-center py-12">
          <div
            className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl"
            style={{ background: "rgba(6,182,212,0.15)", color: "#06B6D4" }}
          >
            ✓
          </div>
          <h3
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Message sent
          </h3>
          <p className="text-sm" style={{ color: "#9CA3AF" }}>
            Thanks for getting in touch. We&apos;ll be back in touch within one
            business day.
          </p>
          <button
            onClick={() => setState("idle")}
            className="mt-6 text-sm underline"
            style={{ color: "#3B82F6" }}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="name" style={labelStyle}>
                Full name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                style={inputStyle}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")
                }
              />
            </div>
            <div>
              <label htmlFor="email" style={labelStyle}>
                Work email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                style={inputStyle}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")
                }
              />
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="company" style={labelStyle}>
              Company *
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              value={form.company}
              onChange={handleChange}
              placeholder="Your company name"
              style={inputStyle}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")
              }
            />
          </div>

          <div className="mb-7">
            <label htmlFor="message" style={labelStyle}>
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your current GTM challenges, your target market, or what you'd like to cover in a discovery call."
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")
              }
            />
          </div>

          {state === "error" && (
            <div
              className="mb-5 rounded-lg p-4 text-sm"
              style={{
                background: "rgba(239,68,68,0.1)",
                color: "#FCA5A5",
                border: "1px solid rgba(239,68,68,0.2)",
              }}
            >
              Something went wrong. Please try again or email us directly.
            </div>
          )}

          <button
            type="submit"
            disabled={state === "sending"}
            className="btn-glow w-full py-4 rounded-xl text-sm font-semibold text-white transition-opacity duration-200"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
              opacity: state === "sending" ? 0.7 : 1,
              cursor: state === "sending" ? "not-allowed" : "pointer",
            }}
          >
            {state === "sending" ? "Sending…" : "Send Message"}
          </button>

          <p className="text-xs text-center mt-4" style={{ color: "#4B5563" }}>
            We respond within one business day. Your details will never be shared.
          </p>
        </form>
      )}
    </div>
  );
}
