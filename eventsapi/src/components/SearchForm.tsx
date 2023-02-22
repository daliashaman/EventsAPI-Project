import { useState } from "react";
import { GetAllEvents } from "../services/EventsServices";
import { AnEvent } from "../model/Events";

interface ISearchFormProps {
    EventList: Function;
}
//this is a function - the parent

export function SearchForm(props: ISearchFormProps) {
    const [events] = useState<AnEvent[]>([])
    const [startDateTime, setStartDateTime] = useState<string>('');
    const [endDateTime, setEndDateTime] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [keyword, setKeyword] = useState<string>('');

    const onSubmit = (event:any) => {
        event.preventDefault();
        console.log(startDateTime, endDateTime);
        GetAllEvents(keyword, postalCode, startDateTime, endDateTime).then((events) => {
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
                     StartDate/EndDate:
                 <input type="date" name="startDate" value={startDateTime}
                onChange={(e) => setStartDateTime(e.target.value)} />
                 <input type="date" name="endDate" value={endDateTime}
                onChange={(e) => setEndDateTime(e.target.value)} />
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

