import { useContext } from "react";
import { Row, Col } from "reactstrap";
import EventContext from "../context/EventContext";
import EventCard from "./EventCard";

export function BucketListRoute() {
    const { removeEvent, events } = useContext(EventContext);
    console.log(events);
    return (
        <div className="">
            
    <Row>
           { events?
           events.map((card, index) => (
      <Col lg="4" key={index}>
        <EventCard key={card.id} card={ card} />
      </Col>
      )) || ""
    : <Col tag="h1">No events found for your search terms, please try again</Col>
    }
    </Row>
    

    {/* onClick{removeEvent}   add button*/}
           

        </div>
    )
}