import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import profile from "./images/profile.jpg";

function About() {
  return (
    <div>
      <section className="about" id="about">
        <div
          style={{
            color: "white",
            background: "#000000eb",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container>
            <Row className="d-flex" style={{ justifyContent: "space-evenly" }}>
              <Col md="6" style={{ display: "contents" }}>
                <img
                  src={profile}
                  style={{ width: "25%", height: "25%", margin: "0 40px" }}
                  alt={""}
                />
              </Col>
              <Col md="6" style={{ width: "500px" }}>
                <h1 style={{ fontWeight: "bolder", fontSize: "45px" }}>
                  About <span style={{ color: "#2fa56e" }}>Me</span>
                </h1>
                <h2>Frontend Developer</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s,{" "}
                </p>
                <div>
                  <Button className="section-btn">Read More</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
}

export default About;
