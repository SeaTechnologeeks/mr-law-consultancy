import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MR LAW CONSULTANCY | Resolution Driven Legal Advisory",
  description: "Tailored legal advisory services for employment relations, delictual claims, insurance law, matrimonial disputes and contractual matters. Resolution driven approach prioritizing settlement over prolonged litigation.",
  keywords: ["legal consultancy", "employment law", "insurance law", "matrimonial disputes", "contract law", "dispute resolution", "South Africa"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a1628] text-[#f1f5f9] antialiased">
        {children}
      </body>
    </html>
  );
}
