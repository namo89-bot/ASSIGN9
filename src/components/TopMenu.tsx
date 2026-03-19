import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export default async function TopMenu() {
    
    const session = await getServerSession(authOptions);

    return (
        <nav className="fixed top-0 left-0 right-0 z-30 h-[50px] w-full bg-white border-b border-gray-200 flex items-center justify-between px-5">
            <div className="flex items-center h-full">
                {
                    session ? (
                        <TopMenuItem title='Sign-Out' pageRef='/api/auth/signout?callbackUrl=/' />
                    ) : (
                        <TopMenuItem title='Sign-In' pageRef='/api/auth/signin?callbackUrl=/' />
                    )
                }
            </div>
            <div className="flex flex-row items-center h-full space-x-2">
                <TopMenuItem title='Booking' pageRef='/booking' />
                
                <div className="flex items-center h-full ml-2">
                    <Image 
                        src={'/img/logo.png'} 
                        alt='logo'
                        width={0} 
                        height={0} 
                        sizes='100vh'
                        className="h-[35px] w-auto object-contain"
                    />
                </div>
            </div>

        </nav>
    );
}