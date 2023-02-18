import axios from 'axios';
import { GetEventsData } from '../model/Events';

export function GetEvents(reqData:{startDate:string,endDate:string,keyword:string,postalCode:string}) : Promise<Event[]> {
    console.log(reqData);

    const startDate = reqData.startDate === ""? "": `${reqData.startDate}T00:00:00Z`;
    const endDate = reqData.endDate === ""? "": `${reqData.endDate}T23:59:59Z`;
    return axios.get<Event[]>(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=MlsyU0dIeOhOWoaOEVqX3xT9QKxuvX40&keyword=${reqData.keyword}&postalCode=${reqData.postalCode}&startDateTime=${startDate}&endDateTime=${endDate}&size=5`)
    .then((response:any) => response.data._embedded.events);
}
