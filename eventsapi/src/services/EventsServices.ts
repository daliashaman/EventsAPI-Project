import axios from 'axios';

import { AnEvent } from '../model/Events';

// export function GetEvents(reqData:{startDate:string,endDate:string,keyword:string,postalCode:string}) : Promise<AnEvent[]> {
//     const startDate = reqData.startDate === "" ? "" : `${reqData.startDate}T00:00:00Z`;
//     const endDate = reqData.endDate === "" ? "" : `${reqData.endDate}T23.59.59Z`;

//     return axios.get<AnEvent[]>(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=MlsyU0dIeOhOWoaOEVqX3xT9QKxuvX40&keyword=${reqData.keyword}&postalCode=${reqData.postalCode}&startDateTime=${startDate}&endDateTime=${endDate}&size=10`)

//     .then((response:any) => response.data._embedded.events);
// }

export function GetAllEvents(keyword?: string, postalCode?: string) {

    return axios.get<AnEvent[]>(`https://app.ticketmaster.com/discovery/v2/events.json`, {params:{apikey:'MlsyU0dIeOhOWoaOEVqX3xT9QKxuvX40', keyword, postalCode}})

    .then((response:any) => response.data._embedded.events);
}