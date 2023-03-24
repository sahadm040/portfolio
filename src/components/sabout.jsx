import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import profile from "./images/profile.jpg";

function Sabout() {
  return (
    <div
      style={{
        height: "100vh",
        color: "white",
        background: "#141414",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col
            md="6"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={profile}
              style={{ width: "250px", height: "250px" }}
              alt={""}
            />
          </Col>
          <Col md="6" className="mt-4">
            <h2 style={{ fontWeight: "bolder" }}>
              About<span style={{ color: "#2fa56e" }}> Me</span>
            </h2>
            <h3>Frontend Developer</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,{" "}
            </p>
            <div className="d-flex" style={{ alignSelf: "center" }}>
              <Button className="section-btn">Read More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sabout;
