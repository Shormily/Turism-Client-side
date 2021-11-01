import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img6 from "../Images/img6.png";
import { useHistory, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import "animate.css";

const Footer = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="bg-light pt-5 shadow bg-dark ">
      <Container className="back w-100%">
        <Row>
          <Col className="animate__animated animate__fadeInLeft ">
            <h3 className="text-primary mb-3 custom-center">Contact US</h3>
            <Row>
              <Col className="text-center text-light">
                <p>
                  <i className="fas fa-phone-alt"></i>
                </p>
                <p>
                  <i className="fas fa-envelope"></i>
                </p>
                <p>
                  <i className="fab fa-telegram-plane"></i>
                </p>
              </Col>
              <Col xs={2} md={10} className="text-light">
                <p>+1 323-913-4688</p>
                <p>travelBangladesh@gmail.com</p>
                <p>+1 864-913-4698</p>
              </Col>
            </Row>
          </Col>
          <Col
            xs={12}
            md={4}
            className="text-center animate__animated animate__zoomIn custom-center"
          >
            <h3 className="text-primary mb-3">Popular News</h3>
            <p className=" w-75 mx-auto text-light">
              To enjoy the various historical places of our country
            </p>
            <p className=" w-75 mx-auto text-light">
              Top historica place: Please visit our country
            </p>
          </Col>
          <Col
            xs={12}
            md={4}
            className="align-items-center col d-flex flex-column animate__animated animate__fadeInRight"
          >
            <Link className="w-75 mb-3 custom-center">
              <img
                src={img6}
                alt=""
                className="img-fluid"
                onClick={handleClick}
              />
            </Link>
          </Col>
        </Row>
      </Container>
      <div className="bg-primary py-3">
        <Container>
          <Row className="text-light">
            <Col xs={8} md={10}>
              <small>© 2021 Travel-Our-Bangladesh. All rights reserved.</small>
            </Col>
            <Col xs={4} md={2}>
              <i className="fab fa-facebook-f px-2"></i>
              <i className="fab fa-google px-2"></i>
              <i className="fab fa-twitter px-2"></i>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
