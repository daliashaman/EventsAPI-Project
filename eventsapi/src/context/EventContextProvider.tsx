import { ReactNode, useState } from "react";
import { AnEvent } from "../model/Events";
import EventContext from "./EventContext";

export interface IEventContextProviderProps {
    children: ReactNode
}

const EventContextProvider = ({children}: IEventContextProviderProps) => {
    const [events, setEvents] = useState<AnEvent[]>([]);

    const addEvent = (event:AnEvent) => {
        console.log(event);
        setEvents([...events, event]);
    }

    const removeEvent = (id: string) => {
        setEvents(events.filter((x) => x.id !== id));
    }
  
    
    return (<EventContext.Provider value={{
        events: events,
        addEvent: addEvent,
        removeEvent: removeEvent
    }}>{children}</EventContext.Provider>);
};


export default EventContextProvider;


