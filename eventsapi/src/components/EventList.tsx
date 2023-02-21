import { useEffect, useState } from "react"
import { GetEventsData } from "../model/Events";

//EventList is parent and searchform is child
export function EventList() {

    const [events, setEvents] = useState<Event[]>([])

    return (
        <div className="EventList">
         {events.map((event:any) => (
                <div className="Event" key={event.id}>
                    {event.name}
                </div>  
            ))};  

            
        </div>
    )
}