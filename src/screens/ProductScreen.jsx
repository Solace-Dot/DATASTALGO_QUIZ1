import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

import productsData from "../products";

function ProductScreen() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productsData.find((p) => p._id === id);

    if (foundProduct) {
      setProduct(foundProduct);
      document.title = foundProduct.name;
    } else {
      console.error(`Product with ID ${id} not found.`);
      setProduct(null);
    }
  }, [id]);

  if (!product) {
    return <div>Loading product details...</div>;
  }

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid rounded />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <p>
                <strong>Description:</strong> {product.description}
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>In Stock</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={false}
                  style={{ backgroundColor: "#f7931e", borderColor: "#f7931e" }}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <style>
        {`
        .btn-light {
          background-color: #fff;
          border-color: #f7931e;
          color: #f7931e;
          font-weight: bold;
        }
        .btn-light:hover {
          background-color: #e08018;
          border-color: #e08018;
          color: #fff;
        }
        `}
      </style>
    </>
  );
}

export default ProductScreen;
