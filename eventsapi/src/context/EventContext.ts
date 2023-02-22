import { createContext } from "react";
import { EventContextModel } from "../context/EventContextModel";

const defaultValue:EventContextModel = {
    events: [],
    addEvent: () => {},
    removeEvent: () => {}
}

const EventContext = createContext(defaultValue)

export default EventContext;