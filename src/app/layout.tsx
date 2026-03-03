import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GTM Layer — Agentic AI Go-To-Market for ERP Partners",
    template: "%s | GTM Layer",
  },
  description:
    "GTM Layer is an agentic AI go-to-market agency serving SAP, Oracle, Microsoft, and NetSuite partners across Australia and APAC. We combine a market intelligence CRM with specialist AI agents to scale your pipeline — without scaling headcount.",
  openGraph: {
    title: "GTM Layer — Agentic AI Go-To-Market for ERP Partners",
    description:
      "Scale pipeline without scaling headcount. Specialist AI-powered GTM for ERP partners across APAC.",
    url: "https://gtm-layer.com",
    siteName: "GTM Layer",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
