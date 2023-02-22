import { Link } from "react-router-dom";
import { Button, CardLink } from "reactstrap";
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
              {card.name}
            </div>
            
            <Button className="ticket" href={card.url}>
              Buy Ticket
            </Button>
            <Button className="bucketbutton" >Add to List</Button>
            <Button className="details" href="/eventdetails">Details</Button>
           
            <div>
                {card.dates.start.localDate}
            </div>
        </div>
    )
}

export default EventCard;