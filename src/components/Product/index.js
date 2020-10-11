import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useStateValue } from "../../utils/StateProvider";
import "./style.css";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <Card style={{ width: "100%", minHeight: "445px" }}>
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
        <Button onClick={addToBasket} className="mt-auto" variant="primary">
          Add to basket
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
