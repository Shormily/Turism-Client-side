import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleOrder = ({ order }) => {
  const { _id, serviceName, status } = order;
  return (
    <div className="mb-4">
      <h4>{serviceName}</h4>
      <span>{status}</span>
      <br />
      <Link to={`/update/${_id}`}>
        <Button>Update</Button>
      </Link>
    </div>
  );
};

export default SingleOrder;
