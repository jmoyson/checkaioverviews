import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScanAIO - AI Overview Scanner",
  description: "See which of your ranking keywords trigger Google's AI Overviews.",
  openGraph: {
    title: "ScanAIO - AI Overview Scanner",
    description: "See which of your ranking keywords trigger Google's AI Overviews.",
    url: "https://scanaio.com",
    type: "website",
    siteName: "ScanAIO",
    images: [
      {
        url: "https://scanaio.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "ScanAIO - See which keywords trigger Google AI Overviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScanAIO - AI Overview Scanner",
    description: "See which of your ranking keywords trigger Google's AI Overviews.",
    images: ["https://scanaio.com/og-default.png"],
  },
  metadataBase: new URL("https://scanaio.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
