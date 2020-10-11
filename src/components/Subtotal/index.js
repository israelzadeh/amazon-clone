import React from "react";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../utils/StateProvider";
import { getBasketTotal } from "../../utils/reducer";
import "./style.css";
import { Card, Button } from "react-bootstrap";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <Card style={{ width: "100%" }}>
      <Card.Header>
        <CurrencyFormat
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value) => (
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
          )}
        />
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains gift
          </small>
        </Card.Text>
        <Button onClick={(e) => history.push("/payment")} variant="success">
          Proceed to checkout
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Subtotal;
