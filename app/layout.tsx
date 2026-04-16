import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  title: "MR LAW CONSULTANCY | Resolution Driven Legal Advisory",
  description:
    "Tailored legal advisory services for employment relations, delictual claims, insurance law, matrimonial disputes and contractual matters. Resolution driven approach prioritizing settlement over prolonged litigation.",
  keywords: [
    "legal consultancy",
    "employment law",
    "insurance law",
    "matrimonial disputes",
    "contract law",
    "dispute resolution",
    "South Africa",
    "Johannesburg",
  ],
  authors: [{ name: "MR LAW CONSULTANCY" }],
  creator: "MR LAW CONSULTANCY",
  publisher: "MR LAW CONSULTANCY",
  robots: "index, follow",
  openGraph: {
    title: "MR LAW CONSULTANCY | Resolution Driven Legal Advisory",
    description:
      "Tailored legal advisory services for employment relations, delictual claims, insurance law, matrimonial disputes and contractual matters.",
    type: "website",
    locale: "en_ZA",
    siteName: "MR LAW CONSULTANCY",
  },
  twitter: {
    card: "summary_large_image",
    title: "MR LAW CONSULTANCY | Resolution Driven Legal Advisory",
    description:
      "Tailored legal advisory services for employment relations, delictual claims, insurance law, matrimonial disputes and contractual matters.",
  },
  alternates: {
    canonical: "https://mrlaw.co.za",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-slate-900">
        {children}
      </body>
    </html>
  );
}
