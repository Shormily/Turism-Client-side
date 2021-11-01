import axios from "axios";
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
  const hanldeDelete = (id) => {
    const proceed = window.confirm("Are you sure want to cancel?");
    if (proceed) {
      axios
        .delete(`https://rocky-harbor-85366.herokuapp.com/orders/${id}`)
        .then((result) => {
          if (result.data.deletedCount > 0) {
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
            alert("Deleted");
          }
        });
    }
  };
  return (
    <div>
      <h3>Manage All Orders</h3>

      {orders.map((order) => (
        <SingleOrder
          key={order._id}
          order={order}
          hanldeDelete={hanldeDelete}
        />
      ))}
    </div>
  );
};

export default ManageAllOrder;
