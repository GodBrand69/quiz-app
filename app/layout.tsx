import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({ subsets: ['latin'],
  weight: ['400', '600', '500', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'KnowTify',
  description: 'LIGMA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeProvider
           attribute="class"
           defaultTheme="system"
           enableSystem
           disableTransitionOnChange
          >
            {children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}