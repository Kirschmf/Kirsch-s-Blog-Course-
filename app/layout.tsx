import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import MainNavigation from "@/components/layout/main-navigation"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Max' Next Blog",
  description: "I blog about web development",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <MainNavigation />
          <main>{children}</main>
          <Analytics />
          <div id="notifications"></div>
        </Suspense>
      </body>
    </html>
  )
}
