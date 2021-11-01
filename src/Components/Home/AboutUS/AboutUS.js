import React from "react";
import img5 from "../Images/img5.jpg";
import "./AboutUS.css";
import "animate.css";

const AboutUS = () => {
  return (
    <div>
      <h1>
        Why <span className="text-primary">do visit our</span> Country{" "}
      </h1>
      <div className="animate__fadeInLeft color">
        <div className="display col-lg-12 col-md-12 col-sm-6 ">
          <p className="text">
            Bangladesh, the 8th largest country in the world with its population
            of 166,208,175, is located to the south of Asia. The tourist
            attractions of Bangladesh include history and monuments, holiday
            villages, beaches, picnic spots, forests and tribal people, wildlife
            of various species. Bangladesh, the 8th largest country in the world
            with its population of 166,208,175, is located to the south of Asia.
            It is the capital and largest city of Dhaka, Bangladesh, which is
            adjacent to countries like India, Nepal, Bhutan and Myanmar. The
            tourist attractions of Bangladesh include history and monuments,
            holiday villages, beaches, picnic spots, forests and tribal people,
            wildlife of various species.
          </p>
          <img className="img" src={img5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
