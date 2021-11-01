import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import SingleOrder from "./SingleOrder/SingleOrder";

const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://rocky-harbor-85366.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  console.log(orders);
  return (
    <div>
      <h3>Manage All Orders</h3>

      {orders.map((order) => (
        <SingleOrder key={order._id} order={order} />
      ))}
    </div>
  );
};

export default ManageAllOrder;
