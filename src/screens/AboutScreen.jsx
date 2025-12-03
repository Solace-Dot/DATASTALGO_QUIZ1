import React from "react";
import { Row, Col, Container } from "react-bootstrap";
function AboutScreen() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <section class="about-us-header">
              <h1>Kamir Authentic Shawarma</h1>
              <br></br>
              <br></br>
              <h2>The Kamir Story: Where Tradition Meets Taste</h2>
              <br></br>
              <br></br>
              <h4>
                Welcome to Kamir, the home of authentic, handcrafted shawarma.
                Our name, which means 'The King,' reflects our commitment to
                delivering a truly royal experience—from the quality of our
                ingredients to the precision of our preparation.
              </h4>
              <br></br>
              <br></br>
            </section>

            <section class="mission">
              <h2>Our Mission: Redefining Authentic</h2>
              <br></br>
              <br></br>
              <h4>
                Our mission is simple: to bring the authentic, rich flavors of
                traditional Middle Eastern Shawarma to our community. We believe
                the best food is made with passion, respect for tradition, and
                absolutely no compromise on quality. Forget fast food; this is
                Slow Food, perfected over centuries.
              </h4>

              <br></br>
              <br></br>
            </section>

            <section class="pillars">
              <h2>Our Three Royal Pillars of Quality</h2>
              <br></br>
              <br></br>
              <article class="pillar-marination">
                <h2>1. The Art of Marination</h2>\<br></br>
                <h4>
                  Our premium Chicken and Beef are carefully hand-cut and bathed
                  for a full 24 hours in a secret, family-crafted blend of over
                  a dozen spices. This slow, deep infusion is the secret to the
                  incredibly tender and flavorful core of every Kamir dish.
                </h4>
                <br></br>
                <br></br>
              </article>

              <article class="pillar-roast">
                <h2>2. The Spit-Roast Tradition</h2>
                <br></br>
                <h4>
                  We use the classic vertical rotisserie spit—the only way to
                  achieve true shawarma texture. The meat is slowly roasted
                  throughout the day, ensuring a crispy, caramelized outer layer
                  and a tender, juicy interior that is sliced fresh to order.
                </h4>
                <br></br>
                <br></br>
              </article>

              <article class="pillar-freshness">
                <h3>3. Handcrafted Freshness</h3>
                <br></br>
                <h4>
                  Everything is made fresh, in-house, daily: from our signature
                  creamy, garlicky Hummus and tangy Tahini, to our freshly baked
                  pita bread.
                </h4>
                <br></br>
                <br></br>
              </article>
            </section>

            <section class="cta">
              <h2>Experience The Royal Menu</h2>
              <br></br>
              <h4>
                We invite you to explore our menu, featuring wraps scaled for
                every appetite, from the quick Kamir Jr to our satisfying Kamir
                King.
              </h4>
              <br></br>
              <br></br>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutScreen;
