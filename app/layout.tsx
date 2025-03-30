import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// import logo from "../public/Researchableads_logo.png"
import Head from "next/head"
import Link from "next/link"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Web3 Dashboard",
  description: "Crypto dashboard",
    generator: 'Armanya'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
     <Head>
        {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/Researchableads_logo.png" />
        {/* <title>Web3 Dashboard</title> */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'