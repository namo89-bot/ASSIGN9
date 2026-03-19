import Link from 'next/link';

export default function TopMenuItem({ title, pageRef }: { title: string, pageRef: string }) {
    return (
        <Link href={pageRef} 
            className="h-full flex items-center px-4 text-sm font-medium text-gray-600 
                       hover:text-cyan-600 hover:bg-gray-50 transition-all duration-300 
                       border-b-2 border-transparent hover:border-cyan-600 no-underline">
            {title}
        </Link>
    );
}