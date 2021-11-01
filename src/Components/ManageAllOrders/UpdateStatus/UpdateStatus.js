import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UpdateStatus = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  useEffect(() => {
    fetch(`https://rocky-harbor-85366.herokuapp.com/orders/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id]);

  const { _id, serviceName, status } = order;

  const handleUpdate = (id) => {
    order.status = "Approved";
    console.log(order);
    const porceed = window.confirm("Are you sure wantn to approve?");
    if (porceed) {
      axios
        .put(`https://rocky-harbor-85366.herokuapp.com/orders/${id}`, order)
        .then((result) => {
          if (result.data?.modifiedCount > 0) {
            //   history.push(redirectUrl);
            alert("Approved");
          }
        });
    }
  };
  return (
    <div>
      <div className="mb-4">
        <h4>{serviceName}</h4>
        <span>{status}</span>
        <br />

        <Button onClick={() => handleUpdate(_id)}>Aprrove</Button>
      </div>
    </div>
  );
};

export default UpdateStatus;
