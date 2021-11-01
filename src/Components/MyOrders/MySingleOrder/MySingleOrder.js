import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";

const MySingleOrder = ({ order, hanldeDelete }) => {
  const { _id, serviceName, status } = order;

  return (
    <div className="mb-4">
      <h4>{serviceName}</h4>
      <span>{status}</span>
      <br />

      <Button onClick={() => hanldeDelete(_id)}>Cancel</Button>
    </div>
  );
};

export default MySingleOrder;
