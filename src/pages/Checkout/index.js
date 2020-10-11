import React from "react";
import Subtotal from "../../components/Subtotal";
import CheckoutProduct from "../../components/CheckoutProduct";
import { useStateValue } from "../../utils/StateProvider";
import "./style.css";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12 p-2">
          <img
            width="100%"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2019/img/Amazon_Student/XCM_Manual_1158214_Prime_banners_1500x300_Amazon_Student_XCM_Manual_new_1500x300_1553022696_jpg.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <Subtotal />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Hello, {user?.email || "Guest"}</h3>
            <h2 className="checkout__title">Your shopping Basket</h2>
          </div>
        </div>
        <div className="row">
          {basket.map((item) => (
            <div className="col-md-4 col-sm-6 col-xs-12 mt-2">
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
