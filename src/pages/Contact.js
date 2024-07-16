// src/pages/Contact.js
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/App.css"; // Pastikan untuk mengimpor file CSS di sini

const Contact = () => {
  return (
    <div className="contact-page">
      <Container className="mt-4">
        <div className="welcome-header">
          <h2>Contact Us</h2>
          <p className="subtext">
            Get in touch with us for any inquiries or feedback.
          </p>
        </div>
        <Row className="mt-4">
          <Col md={6}>
            <h3>Alamat</h3>
            <p>Semarang, Indonesia</p>
            <h3>Email</h3>
            <p>info@tsunami-website.com</p>
          </Col>
          <Col md={6}>
            <h3>Send Us a Message</h3>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
