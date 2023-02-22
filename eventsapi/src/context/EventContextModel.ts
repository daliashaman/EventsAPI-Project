import { AnEvent } from "../model/Events";

export interface EventContextModel  {
    events: AnEvent[],
    addEvent: (event:AnEvent) => void,
    removeEvent: (id: string) => void
}