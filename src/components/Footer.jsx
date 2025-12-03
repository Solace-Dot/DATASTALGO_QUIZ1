import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="site-footer mt-auto">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            &copy; 2022 Kamir
          </Col>

          <Col xs={12} md={4}>
            Follow us on our Facebook Page www.facebook.com/KamirPh
          </Col>

          <Col xs={12} md={4}>
            <strong>Visit us at:</strong>
            <br />
            SM CITY CLARK
            <br />
            THE INFINITY
            <br />
            SAN AGUSTIN, CSFP
            <br />
            NEWPOINT MALL, ANGELES CITY.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
