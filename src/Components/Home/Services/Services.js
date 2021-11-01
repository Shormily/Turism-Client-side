import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServiceContent from "../ServiceContent/ServiceContent";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/travel.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container">
      <div className="row container">
        {services.map((service) => (
          <ServiceContent key={services.id} service={service}></ServiceContent>
        ))}
      </div>
    </div>
  );
};

export default Services;
