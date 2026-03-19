'use client'
import { useReducer } from "react";
import Card from "./Card";
import Link from "next/link";
export default function CardPanel(){

const ratingReducer = (
    ratingMap: Map<string, number>,
    action:{type:string,venueName:string, rating?:number}
)=>{
    const newMap = new Map(ratingMap)
    switch(action.type){

        case "add":{
            newMap.set(action.venueName, action.rating ?? 0)
            return newMap
        }

        case "remove":{
            newMap.delete(action.venueName)
            return newMap
        }

        default:
            return ratingMap
    }
}

const [venueRatings, dispatchRating] = useReducer(
    ratingReducer,
    new Map<string, number>([
        ["The Bloom Pavilion",0],
        ["Spark Space",0],
        ["The Grand Table",0]
    ])
)
const mockVenueRepo = [
    {vid:"001",name:"The Bloom Pavilion" , image:"/img/bloom.jpg"},
    {vid:"002",name:"Spark Space" , image:"/img/sparkspace.jpg"},
    {vid:"003",name:"The Grand Table" , image:"/img/grandtable.jpg"}

]
    return(
        <div>
            <div className="flex flex-row flex-wrap justify-around p-5">
                   {
                    mockVenueRepo.map((venueItem)=>(
                        <Link href={`/venue/${venueItem.vid}`}  key={venueItem.vid} className="w-1/5">
                         <Card
                         key={venueItem.vid}
                        venueName={venueItem.name}
                        imgSrc={venueItem.image}
                        rating={venueRatings.get(venueItem.name) || 0}
                        onRatingChange={(venue:string,value:number)=>{
                            dispatchRating({type:'add' , venueName:venue,rating:value})
                        }}/>
                        </Link>
                    ))
                   }
           

                      
                    </div>
                    <div className="w-full text-xl font-medium">Venue List with Ratings : {venueRatings.size}</div>
                    {Array.from(venueRatings).map(([venue,rating])=>(
                    <div key={venue} data-testid={venue}
                    onClick={()=>dispatchRating({type:'remove',venueName:venue})}>
                        
                    {venue} Rating : {rating}
                    </div>
                    ))}

        </div>
    );
}