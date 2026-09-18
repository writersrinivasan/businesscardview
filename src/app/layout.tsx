import type { Metadata, Viewport } from "next";
import { card } from "@/config/card";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(card.siteUrl),
  title: `${card.profile.name} — ${card.profile.title}`,
  description: card.profile.tagline,
  keywords: [
    card.profile.name,
    card.company.name,
    "digital business card",
    "contact",
    ...card.products.map((p) => p.name),
  ],
  openGraph: {
    title: `${card.profile.name} — ${card.profile.title}`,
    description: card.profile.tagline,
    url: card.siteUrl,
    siteName: card.company.name,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `${card.profile.name} — ${card.profile.title}`,
    description: card.profile.tagline,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: card.profile.accent,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={
        {
          "--brand": card.profile.accent,
          "--brand-soft": card.profile.accentSoft,
        } as React.CSSProperties
      }
    >
      <body className="bg-white text-slate-900">{children}</body>
    </html>
  );
}
