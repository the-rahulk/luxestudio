import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import ScrollToTop from "@/components/ScrollToTop"
import PerformanceMonitor from "@/components/PerformanceMonitor"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: "LuxeStudio - Crafted Tech. Curated Design.",
  description:
    "A creative technology studio delivering exceptional digital solutions across automation, accessibility, development, and design.",
  generator: 'v0.dev',
  // Performance optimizations
  keywords: "web development, automation, accessibility, design, technology studio",
  robots: "index, follow"
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth smooth-scroll" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${inter.className} optimize-animations`} suppressHydrationWarning>
        <ScrollToTop />
        <PerformanceMonitor />
        <div id="__next">
          {children}
        </div>
      </body>
    </html>
  )
}
