import Menu from '@/components/Menu';
import { Inter } from 'next/font/google'
import './styles/globals.scss';
import ForYou from '@/components/ForYou';
import HiddenLayer from '@/components/common/HiddenLayer';
import SearchBar from '@/components/SearchBar';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import NotAuthenticated from '@/components/Menu/NotAuthenticated';
import RegisterBar from '@/components/RegisterBar';
import Register from '@/components/Register';
import { NextAuthProvider } from './providers';

const inter = Inter({ subsets: ['latin'],weight:['400','500','700'] })

export const metadata = {
  title: 'Twitter Clone',
  description: 'Generated by create next app',
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode 
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <NextAuthProvider>
          <HiddenLayer />
          <Register />
            {
              !session?.user ? 
              <>
                <RegisterBar />
                <NotAuthenticated />
              </> :
              <Menu />
            }
          <div className='max-w-[650px] min-w-[650px] w-full border_right min-h-screen h-auto'>
            {children}
          </div>
          <div className='max-w-sm w-full pl-2 mt-2 pr-16 min-h-full'>
            <SearchBar />
            <ForYou />
          </div>
        </NextAuthProvider>
      </body>
    </html>
  )
}
