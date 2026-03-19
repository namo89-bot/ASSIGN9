// src/app/(venueinfo)/venue/[vid]/page.tsx
import Image from "next/image";
import getVenue from "@/libs/getVenue";

export default async function VenueDetailPage({ params }: { params: Promise<{ vid: string }> }) {
    const { vid } = await params;
    const venueJson = await getVenue(vid);

    const venueDetail = venueJson.data;
    if (!venueDetail) {
        return <main className="p-10 text-center">Venue not found</main>;
    }

    return (
        <main className="p-10 md:p-20 text-center">
            <h1 className="text-3xl font-bold mb-5">{venueDetail.name}</h1>
            <div className="flex flex-row justify-center gap-10">
                {venueDetail.picture ? (
                    <Image 
                        src={venueDetail.picture} 
                        alt={venueDetail.name} 
                        width={0} height={0} sizes="100vw"
                        className="rounded-lg w-[40%] h-auto shadow-lg"
                    />
                ) : (
                    <div className="w-[40%] h-[300px] bg-gray-200 flex items-center justify-center rounded-lg">
                        No Image
                    </div>
                )}
                
                <div className="text-left space-y-2">
                    <p className="text-xl font-semibold">Address: {venueDetail.address}</p>
                    <p>Name: {venueDetail.name}</p>
                    <p>Address: {venueDetail.address}</p>
                    <p>District: {venueDetail.district}</p>
                    <p>Postal Code: {venueDetail.postalcode}</p>
                    <p>Tel: {venueDetail.tel}</p>
                    <p>Dailyrate: {venueDetail.dailyrate}</p>
                </div>
            </div>
        </main>
    );
}