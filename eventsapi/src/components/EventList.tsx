import { useEffect, useState } from "react"
import { GetEventsData } from "../model/Events";
import { GetEvents } from "../services/EventsServices";


export function EventList() {

    const [events, setEvents] = useState<Event[]>([])

    const onSubmit = (event:any) => {
        event.preventDefault();
        GetEvents(reqData:{startDate:string,endDate:string,keyword:string,postalCode:string}).then((events) => {
            setEvents(events);
            console.log(events);
        })
    }

    // useEffect(() => {
    //     GetEvents().then(data => setEvents(data));
    // }, []);

    // useEffect(() => {console.log(events)
    // }, [events]);
    
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