import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export default async function TopMenu(){
    
    const session = await getServerSession(authOptions);

    return(
        <div className={styles.menucontainer}>
            {
                session ? (
                    <TopMenuItem title='Sign-Out' pageRef='/api/auth/signout?callbackUrl=/' />
                ) : (
                    <TopMenuItem title='Sign-In' pageRef='/api/auth/signin?callbackUrl=/' />
                )
            }

            <TopMenuItem title='Booking' pageRef='/booking' />
            
            <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo'
                width={0} height={0} sizes='100vh'
            />
        </div>
    );
}