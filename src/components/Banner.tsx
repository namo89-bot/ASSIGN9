'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useSession } from 'next-auth/react'; 

export default function Banner() {
    const router = useRouter();
    const { data: session } = useSession();

    const covers = [
        '/img/cover.jpg',
        '/img/cover2.jpg',
        '/img/cover3.jpg',
        '/img/cover4.jpg'
    ];

    const [index, setIndex] = useState(0);

    const handleBannerClick = () => {
        setIndex((prevIndex) => (prevIndex + 1) % covers.length);
    };

    return (
        <div 
            className="relative w-full h-[500px] overflow-hidden cursor-pointer"
            onClick={handleBannerClick}
        >
            <Image
                src={covers[index]}
                alt="Banner Image"
                fill
                priority
                className="object-cover transition-all duration-500"
            />

            {
                session ? (
                    <div className="absolute top-20 right-10 z-20 text-white text-xl font-semibold drop-shadow-md bg-black/20 px-4 py-2 rounded-lg">
                        Welcome {session.user?.name}
                    </div>
                ) : null
            }

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30 px-4 pointer-events-none">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                    Where Every Event Finds Its Venue
                </h1>
                <p className="text-lg md:text-xl drop-shadow-md">
                    บริการให้เช่าสถานที่จัดเลี้ยงครบวงจร พร้อมสิ่งอำนวยความสะดวกระดับพรีเมียม
                </p>
            </div>

            <button 
                className="absolute bottom-10 right-10 z-20 bg-white text-cyan-700 px-6 py-3 rounded-lg font-bold text-lg hover:bg-cyan-50 shadow-xl transition-colors"
                onClick={(e) => {
                    e.stopPropagation();
                    router.push('/venue');
                }}
            >
                Select Venue
            </button>
        </div>
    );
}