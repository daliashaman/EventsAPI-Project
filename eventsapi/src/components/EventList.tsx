import { useEffect, useState } from "react"
import { Col, Row } from "reactstrap";
import { GetEventsData } from "../model/Events";
import { GetAllEvents } from "../services/EventsServices";
import { EventCard } from "./EventCard";
import { SearchForm } from "./SearchForm";

//EventList is parent and searchform is child
export function EventList() {

    const [events, setEvents] = useState<GetEventsData>()

    useEffect(() => {
        GetAllEvents().then(data => setEvents(data));
    }, []);

    useEffect(() => {
        console.log(events)
    }, [events])

    function filterEvents(events:GetEventsData) {
        setEvents(events);
    }

    return (
        <div className='EventList'>
        <SearchForm EventList={filterEvents}/>
        <Row>
           { events?._embedded?.events?.length ?
           events?._embedded?.events?.map((affair, index) => (
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