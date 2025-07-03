import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import Main from '@/components/Main'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Harsh Vyapari - Home',
  description: 'This is the homepage of my react website'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Main>{children}</Main>
        </ThemeProvider>
      </body>
    </html>
  )
}
