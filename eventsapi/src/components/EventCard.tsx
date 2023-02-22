import { useContext } from "react";
import { Button, CardLink } from "reactstrap";
import EventContext from "../context/EventContext";
import { AnEvent } from "../model/Events";

interface IEventCardProps {
    card: AnEvent
}

export function EventCard(props: IEventCardProps){
    let { card } = props;
    
    const { addEvent } = useContext(EventContext);

    return (
        <div className="EventCard">

            <div>
               <img src= {card.images[0].url} alt="" style={{height: "200px", width: "300px"}}/>
            </div>
            <div>
              {card.name}
            </div>
            <Button href={card.url} className="ticket">
              Buy Ticket
            </Button>
            <div onClick={() => addEvent(card)}>
                {card.dates.start.localDate}
            </div>
        </div>
    )
}

export default EventCard;