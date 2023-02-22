import { useState } from "react";
import { GetAllEvents } from "../services/EventsServices";
import { Header } from "./Header";
import { AnEvent } from "../model/Events";

interface ISearchFormProps {
    EventList: Function;
}
//this is a function - the parent

export function SearchForm(props: ISearchFormProps) {
    const [events] = useState<AnEvent[]>([])
    const [startEndDateTime, setStartEndDateTime] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [keyword, setKeyword] = useState<string>('');

    const onSubmit = (event:any) => {
        event.preventDefault();
        console.log(startEndDateTime);
        GetAllEvents(keyword, postalCode).then((events) => {
            //lifting up state
            props.EventList(events)
            console.log(events);
        })
    }

    return (
        <div className="Homepage">
            <form className="form-container" onSubmit={onSubmit}>
                 <label>
                     Keyword:    
                 <input type="text" name="keyword" placeholder="Enter event name" value={keyword}
                onChange={(e) => setKeyword(e.target.value)} />
                </label>
                
                
                    <label>
                     Postal Code:
                 <input type="text" name="postalCode"  placeholder="Enter postal code" value={postalCode}
                onChange={(e) => setPostalCode(e.target.value.replace(/[^\d{5}]$/, "").substr(0, 5))} />
                </label>
                  
                <label>
                     Date:
                 <input type="date" name="startDate" value={startEndDateTime}
                onChange={(e) => setStartEndDateTime(e.target.value)} />
                </label>
                  
                    <button className="submit" type="submit" value="Submit" onClick={(event) => onSubmit(event)}>Submit</button>
            </form>

            {events.map((event:any) => (
                    /* @ts-ignore */
                    <div key = {event.id}>
                        {event.name}
                    </div>
                ))}

        </div>
        
    )
}

