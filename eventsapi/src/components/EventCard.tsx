import { AnEvent } from "../model/Events";

interface IEventCardProps {
    card: AnEvent
}

export function EventCard(props: IEventCardProps){
    let { card } = props;

    return (
        <div className="EventCard">

            <div>
               <img src= {card.images[0].url} alt="" />
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