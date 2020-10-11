import React from "react";
import CurrencyFormat from "react-currency-format";
import moment from "moment";
import "./style.css";

function Order({ order }) {
  return (
    <div className="container bg-white p-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h4>Order #{order.id.substring(0, 10)}</h4>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Rating</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {order.data.basket?.map((item) => (
                <tr>
                  <td>{item.title}</td>
                  <td className="d-flex flex-row">
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <p>⭐️</p>
                      ))}
                  </td>
                  <td>
                    <small>$</small>
                    <strong>{item.price}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <CurrencyFormat
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => <h3>Order Total: {value}</h3>}
      />
    </div>
  );
}

export default Order;
