import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useStateValue } from "../../utils/StateProvider";
import "./style.css";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <Card style={{ width: "100%", minHeight: "300px" }}>
      <Card.Img
        variant="top"
        src={image}
        style={{ maxHeight: "200px", width: "100%", objectFit: "contain" }}
      />
      <Card.Body className="d-flex flex-column">
        <ListGroup variant="flush">
          <ListGroup.Item className="p-0 m-0 d-flex flex-row">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐️</p>
              ))}
          </ListGroup.Item>
        </ListGroup>
        <Card.Title>
          <small>$</small>
          <strong>{price}</strong>
        </Card.Title>
        <Card.Text>{title}</Card.Text>
        {!hideButton && (
          <Button
            onClick={removeFromBasket}
            className="mt-auto"
            variant="danger"
          >
            Remove from basket
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CheckoutProduct;
