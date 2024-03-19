import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'],
  weight: ['400', '600', '500', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'KnowTify',
  description: 'Nigga',
  icons: {
    icon: '/assets/images/logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <main className='flex-1'>{children}</main>
    </div>
  )
}