import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Моя семья - мой космос | Семейный праздник в Калуге",
  description:
    "Присоединяйтесь к семейному празднику с космической тематикой в Калуге. Конкурсы, развлечения и незабываемые моменты для всей семьи.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} space-bg`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
