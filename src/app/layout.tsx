import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopMenu from '@/components/TopMenu'
import NextAuthProvider from '@/providers/NextAuthProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Venue Explorer',
  description: 'Book your perfect venue',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider session={session}>
          <TopMenu />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}