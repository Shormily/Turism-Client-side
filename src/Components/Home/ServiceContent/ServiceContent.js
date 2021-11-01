import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import "./ServiceContent.css";

const ServiceContent = ({ service }) => {
  const { name, img, description } = service || {};
  return (
    <div className=" col-lg-4  pb-3 ">
      <Card className="background animate__jello" style={{ width: "18rem" }}>
        <Card.Img className="animate__headShake" variant="top" src={img} />
        <Card.Body>
          <Card.Title className=" ">{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="warning">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceContent;
