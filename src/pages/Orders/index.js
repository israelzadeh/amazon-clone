import React, { useEffect, useState } from "react";
import Order from "../../components/Order";
import { useStateValue } from "../../utils/StateProvider";
import { db } from "../../utils/firebase";
import "./style.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h1>Your Orders</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {orders?.map((order) => (
            <Order order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
