import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import MySingleOrder from "./MySingleOrder/MySingleOrder";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://rocky-harbor-85366.herokuapp.com/orders?email=${user.email}`)
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
      <h3> My orders</h3>
      <div>
        {orders.map((order) => (
          <MySingleOrder
            key={order._id}
            order={order}
            hanldeDelete={hanldeDelete}
          ></MySingleOrder>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
