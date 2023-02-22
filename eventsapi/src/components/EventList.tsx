import { useEffect, useState } from "react"
import { Col, Row } from "reactstrap";
import { AnEvent } from "../model/Events";
import { GetAllEvents } from "../services/EventsServices";
import { EventCard } from "./EventCard";
import { SearchForm } from "./SearchForm";

//EventList is parent and searchform is child
export function EventList() {

    const [events, setEvents] = useState<AnEvent[]>([])

    useEffect(() => {
        GetAllEvents().then(data => setEvents(data));
    }, []);

    useEffect(() => {
        console.log(events)
    }, [events])

    function filterEvents(events:AnEvent[]) {
        setEvents(events);
    }

    return (
        <div className='EventList'>
        <SearchForm EventList={filterEvents}/>
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
      </div>
    );
  }