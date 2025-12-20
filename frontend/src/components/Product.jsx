import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded h-100 product-card" border="light">
      <Link to={`/product/${product.id}`}>
        <Card.Img
          src={product.image}
          variant="top"
          className="card-img-top"
          style={{ height: 200, objectFit: "cover" }}
        />
      </Link>
      <Card.Body className="d-flex flex-column">
        <Link to={`/product/${product.id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <div className="mt-auto">
          <Card.Text as="h3">₱{product.price}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Product;
