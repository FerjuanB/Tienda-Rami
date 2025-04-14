import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  weight: ['200', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Tech Gifts Showcase",
  description: "Browse our collection of technology gifts",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header className="bg-gradient-to-r from-purple-600 to-blue-200 text-white py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">RAMI GONZALEZ</h1>
          </div>
        </header>
        {children}
        <footer className="bg-gray-100 py-6 mt-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Tech Gifts Showcase</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
