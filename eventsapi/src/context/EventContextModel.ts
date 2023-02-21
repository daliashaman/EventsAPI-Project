import { AnEvent } from "../model/Events";

export interface EventContextModel  {
    event: Event[],
    addEvent: (event:Event) => void,
    removeEvent: (id: string) => void
}