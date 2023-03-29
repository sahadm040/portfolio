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
            // alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container>
            <Card className="p-3 mt-5" bg="black">
              <h2 style={{ fontWeight: "bolder", textAlign: "center" }}>
                Contact<span style={{ color: "#2fa56e" }}> Me</span>
              </h2>
              <Container>
                <div>
                  <Form>
                    <Row className="pt-4 m-2">
                      <Col md="6" className="mb-1">
                        <Input
                          placeholder="Full Name"
                          style={{ background: "#141414" }}
                        ></Input>
                      </Col>
                      <Col md="6" className="">
                        <Input
                          placeholder="Email Address"
                          style={{ background: "#141414" }}
                        ></Input>
                      </Col>
                    </Row>

                    <Row className="m-2">
                      <Col md="6" className="mb-1">
                        <Input
                          placeholder="Mobile Number"
                          style={{ background: "#141414" }}
                        ></Input>
                      </Col>
                      <Col md="6" className="">
                        <Input
                          placeholder="Email Subject"
                          style={{ background: "#141414" }}
                        ></Input>
                      </Col>
                    </Row>

                    <Row className="m-2">
                      <Col md="12">
                        <textarea
                          className="form-control"
                          placeholder="Your Message"
                          style={{ minHeight: "200px", background: "#141414" }}
                        ></textarea>
                      </Col>
                    </Row>
                    <div
                      className="d-flex"
                      style={{ justifyContent: "center" }}
                    >
                      <Button className="btn btn-success m-2">
                        Sent Message
                      </Button>
                    </div>
                  </Form>
                </div>
              </Container>
            </Card>
          </Container>
        </div>
      </section>
    </div>
  );
}

export default Contact;
