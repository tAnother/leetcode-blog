import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Leetcode Log',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen'>
          <header className='bg-sky-100 mb-8 p-4'>
            <div className='container mx-auto flex justify-center'>
              <Link href="/"> 🏡 </Link>
              <span className='mx-auto'>Daily Coding Log</span>{' '}
            </div>
          </header>

          <main className='container mx-auto flex-1 p-4'>{children}</main>
          
          <footer className='bg-sky-100 mt-8 p-4'>
            <div className='container mx-auto flex justify-center text-center'>
              🎵 麦[mak6]当[dong1]劳[lou4]薯[syu4]条[tiu2]好[hou2]好[hou2]好[hou2] 🎵
            </div>
          </footer>
        </div>  
      </body>
    </html>
  )
}