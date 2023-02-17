import axios from 'axios';
import { GetEvents } from '../model/Events';

export function GetEventDetails() : Promise<GetEvents> {
    return axios.get<GetEvents>("https://app.ticketmaster.com/discovery/v2/events.json?apikey=MlsyU0dIeOhOWoaOEVqX3xT9QKxuvX40")
    .then(response => response.data);
}
