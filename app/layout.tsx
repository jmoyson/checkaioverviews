import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Check AI Overviews",
  description: "See which of your ranking keywords trigger Google's AI Overviews.",
  openGraph: {
    title: "Check AI Overviews",
    description: "See which of your ranking keywords trigger Google's AI Overviews.",
    url: "https://checkaioverviews.com",
  },
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
