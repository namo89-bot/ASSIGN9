// src/app/(venueinfo)/venue/page.tsx
import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";
import { Suspense } from "react";
import CardPanel from "@/components/CardPanel";

export default function VenuePage() {
    const venues = getVenues()

    return (
        <main className="text-center p-20">
            <h1 className="text-xl font-medium">Select Your Dream Place</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <VenueCatalog venuesJson={venues} />
            </Suspense>
        </main>
    )
}