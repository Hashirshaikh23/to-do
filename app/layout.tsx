import './globals.css'
import './custom.css'
import { Inter } from 'next/font/google'
import { GrainBackground } from '@/components/grain-background'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'To-Do App',
  description: 'A simple to-do application with grainy styling',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#f7f3f0] relative`}>
        <GrainBackground />
        {children}
      </body>
    </html>
  )
}

