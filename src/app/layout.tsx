'use client'
import { Header } from '@/components/Header/Header'
import GlobalStyle from '@/styles/GlobalStyles'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Estudologia',
  description: 'Teste Desenvolvimento Estudologia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body className={inter.className}>
        <>
          <Header />
          {children}
        </>
      </body>
    </html>
  )
}
