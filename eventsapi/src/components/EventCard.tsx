import { useContext, useEffect, useState } from "react";
import { Button } from "reactstrap";
import EventContext from "../context/EventContext";
import { AnEvent } from "../model/Events";
import starfillsvg from "../../src/assets/starfill.svg"
import staremptysvg from "../../src/assets/starempty.svg"

interface IEventCardProps {
    card: AnEvent
}

export function EventCard(props: IEventCardProps){
    let { card } = props;
    
    const [isFavorite, setFavorite] = useState<Boolean>(false);
    const { addEvent } = useContext(EventContext);

    const { removeEvent, events } = useContext(EventContext);
    useEffect(() => {
        if (events.find((event:AnEvent) => event.id === card.id)) {
            setFavorite(true);
        }
    },[])

    console.log(events);

    let button;
    if (isFavorite){
        button= <Button className="Starbutton" style={{padding: 2}} onClick={() => {
            removeEvent(card.id);
            setFavorite(false);
            }}>
        <img style={{height: "30px", width: "30px", backgroundColor: "yellow"}} src={starfillsvg}></img>
    </Button>;
    } else {
        button= <Button className="Starbutton" style={{padding: 2}} onClick={() => {
            addEvent(card);
            setFavorite(true);
            }}>
        <img style={{height: "30px", width: "30px"}} src={staremptysvg}></img>
    </Button>;
    }

    return (
        <div className="EventCard">

            <div>
               <img className= "image" src= {card.images[0].url} alt="Event image" style={{height: "200px", width: "300px"}}/>
            </div>
            <div>
              {card.name}
            </div>
            <div>
                {card.dates.start.localDate}
            </div>
            <Button className="ticket" href={card.url} style={{backgroundColor: "green"}}>
              Buy Ticket
            </Button>
            <Button className="details" href={"/eventdetails/"+ card.id}>Details</Button>
            {button}
        </div>
    )
}

export default EventCard;