import { Header } from '@/components/Header/Header'
import { Inter } from 'next/font/google'
import '../styles/global.css'

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
      <body className={inter.className}>
        <>
          <Header />
          {children}
        </>
      </body>
    </html>
  )
}
