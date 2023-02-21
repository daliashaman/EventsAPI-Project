import { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardDeck, CardLink, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap";
import EventContext from "../context/EventContext";
import { GetEventsData, AnEvent } from "../model/Events";

// export function BucketList() {
//     const { event } = useContext(EventContext);
//     const { removeEvent } = useContext(EventContext);

//     return (
//         <div className="BucketList">
//           <Row>
//             {(event || [])?.map((event, index) => (
//               <Col lg="4" key={`${event.name}_${index}`}>
//                 <CardDeck>
//           <div className="EventItem">
//             <Card>
//               {event.images[0] && (
//                 <img
//                   src={event.images[0].url}
//                   alt="Event"
//                   style={{ height: "200px" }}
//                 />
//               )}
//               <CardBody>
//                 <CardTitle tag="h5">{event.name}</CardTitle>
//                 <CardSubtitle className="mb-2 text-muted" tag="h6">
//                   {event.dates.start.localDate}
//                 </CardSubtitle>
//                 <CardLink href={event.url} target="_blank">
//                   Buy Tickets
//                 </CardLink>
//                 <CardText>{
//                   !!event?._embedded?.venues?.length 
//                     ? event._embedded.venues[0]?.name 
//                     : "No Venue"
//                     }
//                   </CardText>
//                 <Link to={`/detailsroute/${event.id}`}>Details</Link>
//                 <Button className="RemoveEvent" onClick={() => removeEvent(event.id)}>
//                   Remove From BucketList
//                 </Button>
//               </CardBody>
//             </Card>
//           </div>
//         </CardDeck>
//               </Col>
//             )) || ""}
//             </Row>
//         </div>
//       );
//     }