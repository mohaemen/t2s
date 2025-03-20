import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "MyBuilder - The reliable way to hire a tradesperson",
  description: "Do you have an idea for a home improvement job? Let a qualified tradesperson bring your idea to life. Post your job for free on MyBuilder and get quotes from tradespeople in your area.",
  keywords: "tradesperson, home improvement, builder, renovation, quotes, tradespeople",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo-dark.svg" />
      </head>
      <body>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
