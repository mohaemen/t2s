import type { Metadata } from "next"
import "./globals.css"
import { ClientBody } from "./ClientBody"

export const metadata: Metadata = {
  title: "MyBuilder - The reliable way to hire a tradesperson",
  description: "Do you have an idea for a home improvement job? Let a qualified tradesperson bring your idea to life. Post your job for free on MyBuilder and get quotes from tradespeople in your area.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://ext.same-assets.com/4131608513/3462302913.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://ext.same-assets.com/4131608513/2359238048.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://ext.same-assets.com/4131608513/1489132346.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  )
}
