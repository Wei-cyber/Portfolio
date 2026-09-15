import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drewry Tran — Software & AI Engineer",
  description:
    "Software & AI Engineer building agentic AI systems, data infrastructure, and production-oriented software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
