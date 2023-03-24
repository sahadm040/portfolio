import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Input } from "reactstrap";

function Contact() {
  return (
    <div>
      <section className="contact" id="contact">
        <div
          style={{
            height: "100vh",
            color: "white",
            background: "#141414",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 style={{ fontWeight: "bolder" }}>
            Contact<span style={{ color: "#2fa56e" }}> Me</span>
          </h2>
          <div>
            <Form>
              <Row className="m-1">
                <Col md="5" className="m-1">
                  <Input placeholder="Full Name"></Input>
                </Col>
                <Col md="5" className="m-1">
                  <Input placeholder="Email Address"></Input>
                </Col>
              </Row>

              <Row className="m-1">
                <Col md="5" className="m-1">
                  <Input placeholder="Mobile Number"></Input>
                </Col>
                <Col md="5" className="m-1">
                  <Input placeholder="Email Subject"></Input>
                </Col>
              </Row>

              <Row className="m-1">
                <Col md="10" className="m-1">
                  <Input placeholder="Your Message"></Input>
                </Col>
              </Row>
              <div className="d-flex" style={{ justifyContent: "center" }}>
                <Button className="btn btn-success">Sent Message</Button>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
