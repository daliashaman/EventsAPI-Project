import { useContext } from "react";
import { Row, Col, Button } from "reactstrap";
import EventContext from "../context/EventContext";
import EventCard from "./EventCard";

export function BucketListRoute() {
    const { events } = useContext(EventContext);
    console.log(events);
    return (
        <div className="bucketListCard">
            
            <Row>
                { events?
                events.map((card, index) => (
                <><Col lg="4" key={index}>
                        <EventCard key={card.id} card={card} />
                    </Col></>
                )) || ""
                : <Col tag="h1">No events found.</Col>
                }
            </Row>
</div>
)
}