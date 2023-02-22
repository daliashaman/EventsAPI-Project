import { CardLink } from "reactstrap";
import { AnEvent } from "../model/Events";

interface IEventCardProps {
    card: AnEvent
}

export function EventCard(props: IEventCardProps){
    let { card } = props;

    return (
        <div className="EventCard">

            <div>
               <img src= {card.images[0].url} alt="" style={{height: "200px", width: "300px"}}/>
            </div>
            <div>
              {card.name};
            </div>
            <CardLink href={card.url}>
              Buy Ticket
            </CardLink>
            <div>
                {card.dates.start.localDate};
            </div>
        </div>
    )
}

export default EventCard;