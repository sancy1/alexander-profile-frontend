import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ScrollUtils from "@/components/ScrollUtils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alexander S. Cyril - Software Engineer & Data Professional",
  description:
    "Passionate software engineer specializing in full-stack development, machine learning, and data analytics. Building innovative solutions that transform ideas into reality.",
  keywords: "software engineer, full-stack developer, machine learning, data analytics, AI, Python, Next.js, Django",
  authors: [{ name: "Alexander S. Cyril" }],
  openGraph: {
    title: "Alexander S. Cyril - Software Engineer",
    description:
      "Building innovative software solutions with expertise in full-stack development, AI, and data analytics",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ScrollUtils />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
