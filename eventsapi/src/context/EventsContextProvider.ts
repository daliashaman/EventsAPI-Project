import { ReactNode, useState } from "react";
import { AnEvent } from "../model/Events";
import EventContext from "./EventContext";

export interface IEventContextProviderProps {
    children: ReactNode
}

const EventContextProvider = ({children}: IEventContextProviderProps) => {
    const [events, setEvents] = useState<AnEvent[]>([]);

    const addEvent = (event:AnEvent) => {
        setEvents([...events, event]);
    }

    const removeEvent = (id: string) => {
        setEvents(events.filter((x) => x.id !== id));
    }
  
    // idk why i'm having issues with this!
    // return (
    //     <EventContext.Provider value={{
    //         event: events,
    //         addEvent: addEvent,
    //         removeEvent: removeEvent
    //     }}>{children}</EventContext.Provider>;
    // )
};

export default EventContextProvider