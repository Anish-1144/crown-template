import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

const customFont = localFont({
  src: [
    {
      path: '../fonts/font4.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/font5.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/font6.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/font1.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/font2.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/font3.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-custom',
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
})

const font4 = localFont({
  src: [
    {
      path: '../fonts/font4.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-font4',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Crown Banker - Banking Platform',
  description: 'Modern banking platform for financial management',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${customFont.variable} ${font4.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
