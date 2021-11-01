import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SingleService.css";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import axios from "axios";

const SingleService = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`https://rocky-harbor-85366.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  console.log(service);
  const { _id, name, img, description } = service;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.status = "pending";
    axios
      .post("https://rocky-harbor-85366.herokuapp.com/orders", data)
      .then((result) => {
        console.log(result);
        if (result.data?.insertedId) {
          alert("order submited");
        }
      });
  };
  console.log(errors);
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col>
          <div className="d-flex justify-content-around ">
            <Card className="margin card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img} />
              <Card.Body className="color">
                <Card.Title>{name}</Card.Title>
                {/* <Button variant="warning">Book now</Button> */}

                <Card.Text>{description}</Card.Text>
                {/* <Link to={`/services/${_id}`}>
                  <Button variant="warning">Book now</Button>
                </Link>
                <Link to={`/services/${_id}`}>
                  <Button className="gap" variant="warning">
                    Cancel
                  </Button>
                </Link> */}
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="userName"
                value={user?.displayName}
                className="form-control mb-2"
                {...register("userName", { required: true })}
              />
              <input
                type="email"
                placeholder="userEmail"
                value={user?.email}
                className="form-control mb-2 "
                {...register("userEmail", { required: true })}
              />
              <input
                type="text"
                placeholder="serviceName"
                value={name}
                className="form-control mb-2 "
                {...register("serviceName", { required: true })}
              />
              <input
                type="text"
                placeholder="address"
                className="form-control mb-2"
                {...register("address", { required: true })}
              />
              <input
                type="text"
                placeholder="city"
                className="form-control mb-2"
                {...register("city", { required: true })}
              />

              <input className="btn btn-primary" type="submit" />
            </form>
          </div>
        </Col>
      </Row>
      {/* <div className=" col-lg-4  pb-3 ">
        <Card className="background animate__jello" style={{ width: "18rem" }}>
          <Card.Img className="animate__headShake" variant="top" src={img} />
          <Card.Body>
            <Card.Title className=" ">{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Link to={`/services/${_id}`}>
              <Button variant="warning">Book now</Button>
            </Link>
          </Card.Body>
        </Card>
      </div> */}
    </Container>
  );
};

export default SingleService;
