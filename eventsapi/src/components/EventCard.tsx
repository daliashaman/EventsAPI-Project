import { Event } from "../model/Events";

interface IEventCardProps {
    Eventcard: Event
}

export function EventCard(props: IEventCardProps){
    let { Eventcard } = props;

    return (
        <div className="EventCard">

            <div>
                {Eventcard.images.map((img, index)=> (<img src="{img}"></img>))}
            </div>
            <div>
              {Eventcard.name};  
            </div>
            <div>
              {Eventcard.locale};  
            </div>
            <div>
              {Eventcard.url};  
            </div>
            <div>
                {Eventcard.dates.start.localDate};
            </div>

        </div>
    )
}

export default EventCard;