import { AnEvent } from "../model/Events";

interface IEventCardProps {
    card: AnEvent
}

export function EventCard(props: IEventCardProps){
    let { card } = props;

    return (
        <div className="EventCard">

            <div>
                {card.images.map((img, index)=> (<img src="{img}"></img>))}
            </div>
            <div>
              {card.name};  
            </div>
            <div>
              {card.locale};  
            </div>
            <div>
              {card.url};  
            </div>
            <div>
                {card.dates.start.localDate};
            </div>

        </div>
    )
}

export default EventCard;