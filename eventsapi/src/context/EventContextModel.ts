import { AnEvent } from "../model/Events";

export interface EventContextModel  {
    event: AnEvent[],
    addEvent: (event:AnEvent) => void,
    removeEvent: (id: string) => void
}