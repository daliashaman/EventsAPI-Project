import axios from 'axios';

import { Event } from '../model/Events';

export function GetEvents(reqData:{startDate:string,endDate:string,keyword:string,postalCode:string}) : Promise<Event[]> {
    const startDate = reqData.startDate === "" ? "" : `${reqData.startDate}T00:00:00Z`;
    const endDate = reqData.endDate === "" ? "" : `${reqData.endDate}T23.59.59Z`;

    return axios.get<Event[]>(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=MlsyU0dIeOhOWoaOEVqX3xT9QKxuvX40&keyword=${reqData.keyword}&postalCode=${reqData.postalCode}&startDateTime=${startDate}&endDateTime=${endDate}&size=10`)

    .then((response:any) => response.data._embedded.events);
}
