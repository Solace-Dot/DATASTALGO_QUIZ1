import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function AboutScreen() {
  return (
    <div>
      <div className="about-us-header" style={{ background: "#f7931e" }}>
        <Container>
          <Row>
            <Col className="text-center">
              <h1>Kamir Authentic Shawarma</h1>
              <h2>The Kamir Story: Where Tradition Meets Taste</h2>
              <p style={{ maxWidth: 800, margin: "0.75rem auto 0" }}>
                Welcome to Kamir — the home of handcrafted shawarma. Our name,
                which means "The King," reflects our commitment to delivering a
                truly royal experience: premium ingredients, careful
                preparation, and flavors rooted in tradition.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-4">
        <Row>
          <Col>
            <section className="about-section">
              <h3>Our Mission</h3>
              <p>
                Our mission is simple: bring the authentic, rich flavors of
                traditional Middle Eastern shawarma to our community. We value
                slow, careful cooking methods and never compromise on quality.
              </p>

              <div className="pillars">
                <h3>Our Three Pillars</h3>
                <Row>
                  <Col xs={12} md={4} className="pillar">
                    <h4>1. Marination</h4>
                    <p>
                      Premium chicken and beef are hand-cut and marinated for 24
                      hours in a family blend of spices to achieve deep, lasting
                      flavor.
                    </p>
                  </Col>

                  <Col xs={12} md={4} className="pillar">
                    <h4>2. Spit-Roast</h4>
                    <p>
                      We use a vertical rotisserie to develop a crispy,
                      caramelized exterior while keeping the inside juicy and
                      tender.
                    </p>
                  </Col>

                  <Col xs={12} md={4} className="pillar">
                    <h4>3. Freshness</h4>
                    <p>
                      Everything is made fresh daily — from hummus and tahini to
                      our hand-baked pita — ensuring the best possible taste.
                    </p>
                  </Col>
                </Row>
              </div>

              <div className="cta">
                <h4>Experience the Royal Menu</h4>
                <p>
                  Explore our menu — from the quick Kamir Jr to the satisfying
                  Kamir King, we have sizes and combos for every appetite.
                </p>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutScreen;
