import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Head from "next/head"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Open In WhatsApp",
  description: "Open WhatsApp chat without saving the number",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
