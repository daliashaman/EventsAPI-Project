<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> f334675405c28a74ba9dbdc907068ed7b6db5fc8
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
<<<<<<< HEAD
            
            <Button className="ticket" href={card.url}>
              Buy Ticket
            </Button>
            <Button className="bucketbutton" >Add to List</Button>
            <Button className="details">Details</Button>
           
=======
            <Button href={card.url} className="ticket">
              Buy Ticket
            </Button>
>>>>>>> f334675405c28a74ba9dbdc907068ed7b6db5fc8
            <div>
                {card.dates.start.localDate}
            </div>
        </div>
    )
}

export default EventCard;