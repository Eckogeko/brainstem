import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ConvexClientProvider } from '@/components/providers/convex-providers'

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

export default function RootLayout({ 
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={inter.className}>
          <ConvexClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </ConvexClientProvider>
        </body>
      </html>
  )
}

