import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BrainStem',
  description: 'The connected workspace to organize your thoughts and ideas',
  icons:{
    icon: [
      {
        media: "(prefers-colors-scheme: light)",
        url: "/logo-black.svg",
        href: "/logo-black.svg"
      },
      {
        media: "(prefers-colors-scheme: dark)",
        url: "/logo-white.svg",
        href: "/logo-white.svg"
      }
    ]
  }
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

