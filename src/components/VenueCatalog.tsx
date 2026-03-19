// src/components/VenueCatalog.tsx
import Card from "./Card"
import Link from "next/link"

export default async function VenueCatalog({ venuesJson }: { venuesJson: Promise<VenueJson> }) {
    const venuesReady = await venuesJson
    
    return (
        <div className="flex flex-row flex-wrap justify-around p-5">
            {
                venuesReady.data.map((venueItem: VenueItem) => (
                    <Link href={`/venue/${venueItem.id}`} key={venueItem.id} className="w-1/5">
                        <Card 
                            venueName={venueItem.name} 
                            imgSrc={venueItem.picture}
                        />
                    </Link>
                ))
            }
        </div>
    )
}