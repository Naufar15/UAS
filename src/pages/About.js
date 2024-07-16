// src/pages/About.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/App.css"; // Pastikan untuk mengimpor file CSS di sini

const About = () => {
  return (
    <div className="about-page">
      <Container className="mt-4">
        <div className="about-header">
          <h2>About Us</h2>
          <p className="subtext">Learn more about our mission and goals.</p>
        </div>
        <Row className="mt-4">
          <Col md={6}>
            <Card className="about-card">
              <Card.Body>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  Our mission is to educate and raise awareness about tsunami
                  causes, mitigation strategies, and disaster management in
                  Indonesia. We aim to provide accurate information and empower
                  communities to prepare and respond effectively to tsunami
                  threats.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="about-card">
              <Card.Body>
                <Card.Title>Our Goals</Card.Title>
                <Card.Text>
                  Our goal is to become a trusted resource for tsunami-related
                  information, research, and community engagement. We strive to
                  foster collaboration among stakeholders, advance scientific
                  understanding, and promote sustainable practices to minimize
                  the impact of tsunamis on coastal communities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
