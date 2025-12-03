import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

function HomeScreen() {
  return (
    <Container>
      <div className="text-center">
        <img src="/img/logo.png" alt="Kamir Logo" className="home-logo mb-3" />
        <h1 className="mb-3">KAMIR</h1>
      </div>
      <Row className="g-3">
        {products.map((product, index) => {
          const isLast = index === products.length - 1;
          const needsCenter = isLast && products.length % 4 !== 0;

          if (needsCenter) {
            return (
              <Col
                key={product._id}
                xs={12}
                className="d-flex justify-content-center"
              >
                <div style={{ width: "50%" }}>
                  <Product product={product} />
                </div>
              </Col>
            );
          }

          return (
            <Col
              key={product._id}
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className="d-flex align-items-stretch"
            >
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default HomeScreen;
