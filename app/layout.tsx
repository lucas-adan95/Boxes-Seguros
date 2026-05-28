import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Boxes Seguros - Entrá a Boxes, Cotizá y Salí Tranquilo',
  description: 'Boxes Seguros: cotizá tu seguro de auto en minutos. Coberturas a medida, asistencia 24/7, grúa sin límite. Entrá a Boxes y salí a la pista tranquilo.',
  keywords: 'seguro de auto, cotizar seguro, Boxes Seguros, cobertura vehicular, asistencia 24/7, F1',
  icons: {
    icon: '/favicon.svg',
  },
}

export const viewport = {
  themeColor: '#1F2023',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
