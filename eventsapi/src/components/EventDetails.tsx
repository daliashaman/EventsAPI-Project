import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col,
  Button,
} from "reactstrap";
import { useParams } from "react-router-dom";
import { GetEventById } from "../services/EventsServices";
import { AnEvent } from "../model/Events";

export function EventDetails() {
  const { id } = useParams<{ id: string }>();

  const [detailsRoute, setDetailsRoute] = useState<AnEvent | null>(null);

  useEffect(() => {
    async function fetchEvent() {
      const response = await GetEventById(id ?? "");
      setDetailsRoute(response.data);
    }
    fetchEvent();
  }, [id]);

  return (
    <div className="DetailsRoute">
      {detailsRoute !== null ? (
        <Row>
          <Col>
            <Card>
              {detailsRoute.images[0] && (
                <img
                  src={detailsRoute.images[0].url}
                  alt="Event"
                  style={{
                    height: "300px",
                    width: "40vw",
                  }}
                />
              )}
              <CardBody>
                <CardTitle tag="h5">{detailsRoute.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {detailsRoute.dates.start.localDate}
                </CardSubtitle>
                <CardText>
                  <b>Venue: </b>
                  {detailsRoute?._embedded?.venues[0]?.name}
                </CardText>
              </CardBody>
              <div className="details">
                <p>
                  <b>Genre: </b>
                  {detailsRoute?.classifications[0]?.genre.name}
                </p>
                <p>
                  <b>Address: </b>
                  {detailsRoute?._embedded?.venues[0]?.address?.line1}{" "}
                </p>
                <p>
                  <b>City: </b>
                  {detailsRoute?._embedded?.venues[0]?.city.name}
                </p>
                <p>
                  <b>State: </b>
                  {detailsRoute?._embedded?.venues[0]?.state.name}
                </p>
                <p>
                  <b>Postal Code: </b>
                  {detailsRoute?._embedded?.venues[0]?.postalCode}
                </p>
              </div>
              <Button
                href={detailsRoute.url}
                style={{ width: "40vw", backgroundColor: "green" }}
                target="_blank"
              >
                Buy Tickets
              </Button>
            </Card>
          </Col>
        </Row>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
