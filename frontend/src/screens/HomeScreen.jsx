import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products/");
        const productsWithImages = data.map((product) => ({
          ...product,
          image: product.image
            ? `http://127.0.0.1:8000${product.image}`
            : "/img/placeholder.png",
        }));
        setProducts(productsWithImages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <h3>Loading products...</h3>
      </Container>
    );
  }

  return (
    <Container>
      <div className="text-center">
        <img src="/img/logo.png" alt="Kamir Logo" className="home-logo mb-3" />
        <h1 className="mb-3">KAMIR</h1>
      </div>
      <Row className="g-3">
        {products.map((product) => (
          <Col
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex align-items-stretch"
          >
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeScreen;
