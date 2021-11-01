import React from "react";
import AboutUS from "./AboutUS/AboutUS";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";
import img4 from "./Images/img4.jpg";
import "./Home.css";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="First slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="Second slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img4} alt="Third slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <h1 className="design">Travel Our Bangladesh</h1>
      </div>
      <Services></Services>
      <AboutUS></AboutUS>
    </div>
  );
};

export default Home;
