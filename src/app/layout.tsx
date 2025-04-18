import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: "RG - Tienda",
  description: "Browse our collection of technology gifts",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${roboto.className} bg-secondary-light`}>
        <header className="bg-gradient-to-r from-primary-dark to-primary-light text-white py-4 shadow-lg">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <img src="/logo.png" alt="Logo" className="w-24 h-24 rounded-lg" />
            
            <span className="text-3xl font-semibold text-gray-200 uppercase">Tienda de regalos</span>
          </div>
        </header>
        {children}
        <footer className="bg-primary-dark text-white py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} Hecho por <a href="https://github.com/FerjuanB" className="text-accent-yellow hover:text-accent-orange transition-colors">Fer Batres</a></p>
            <p className="text-sm opacity-75 mt-2">Última actualización: {new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })}</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
