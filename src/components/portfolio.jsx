import React from "react";
import {  Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaCode } from "react-icons/fa";

function Portfolio() {
  return (
    <div
      className="p-2"
      style={{
        height: "100vh",
        color: "white",
        background: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 className="my-4" style={{ textAlign: "center" }}>
        Latest<span  style={{ color: "#2fa56e"}}> Project</span>
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Row className="d-flex " style={{ justifyContent: "space-around" }}>
            <Col md="4">
              <Card
                className="m-1 p-2"
                style={{
                  background: "#80808038",
                  alignItems: "center",
                }}
              >
                <FaCode
                  style={{ height: "40px", width: "40px", color: "#2fa56e" }}
                />
                <h3>Web Development</h3>
                <p style={{ textAlign: "center" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard{" "}
                </p>
                <div style={{ alignSelf: "center" }}>
                  <Button className="section-btn">Read More</Button>
                </div>
              </Card>
            </Col>
            <Col md="4">
              <Card
                className="m-1 p-2"
                style={{
                  background: "#80808038",
                  alignItems: "center",
                }}
              >
                <FaCode
                  style={{ height: "40px", width: "40px", color: "#2fa56e" }}
                />
                <h3>Web Development</h3>
                <p style={{ textAlign: "center" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard{" "}
                </p>
                <div style={{ alignSelf: "center" }}>
                  <Button className="section-btn">Read More</Button>
                </div>
              </Card>
            </Col>
            <Col md="4">
              <Card
                className="m-1 p-2"
                style={{
                  background: "#80808038",
                  alignItems: "center",
                }}
              >
                <FaCode
                  style={{ height: "40px", width: "40px", color: "#2fa56e" }}
                />
                <h3>Web Development</h3>
                <p style={{ textAlign: "center" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard{" "}
                </p>
                <div style={{ alignSelf: "center" }}>
                  <Button className="section-btn ">Read More</Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Portfolio;
