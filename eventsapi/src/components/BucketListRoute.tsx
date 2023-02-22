import { useContext } from "react";
import { Row, Col, Button } from "reactstrap";
import EventContext from "../context/EventContext";
import EventCard from "./EventCard";

export function BucketListRoute() {
    const { removeEvent, events } = useContext(EventContext);
    console.log(events);
    return (
        <div className="bucketListCard">
            
            <Row>
                { events?
                events.map((card, index) => (
                <><Col lg="4" key={index}>
                        <EventCard key={card.id} card={card} />
                        <Button onClick={() => removeEvent(card.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-minus" viewBox="0 0 16 16">
                                <path d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                            </svg>
                        </Button>
                    </Col></>
                )) || ""
                : <Col tag="h1">No events found.</Col>
                }
            </Row>

</div>
)
}