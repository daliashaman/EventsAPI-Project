import { Event } from "../model/Events";

interface IEventCardProps {
    Eventcard: Event
}

export function EventCard(props: IEventCardProps){

    return (
        <div className="EventCard">

            <div>
                {props.Eventcard.images.map((img, index)=> (<img src="{img}"></img>))}
            </div>
            <div>
              {props.Eventcard.name};  
            </div>
            <div>
              {props.Eventcard.locale};  
            </div>
            <div>
              {props.Eventcard.url};  
            </div>
            <div>
                {props.Eventcard.dates.start.localDate};
            </div>

        </div>
    )
}

