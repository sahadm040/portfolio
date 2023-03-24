import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { GrFacebookOption } from "react-icons/gr";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import profile from "./images/profile.jpg";

function ShomeSection() {
  return (
    <div
      style={{
        height: "100vh",
        color: "white",
        background: "black",
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
          <Col md="6">
            <h2>Hello,It's Me</h2>
            <h1>SAHAD M</h1>
            <h2>And I'm a Frontend Developer</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div>
              <div className="d-flex" style={{ gap: "15px" }}>
                <div className="section-icon">
                  <GrFacebookOption />
                </div>
                <div className="section-icon">
                  <BsTwitter />
                </div>
                <div className="section-icon">
                  <BsGithub />
                </div>
                <div className="section-icon">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
            <div
              className="my-4"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button className="section-btn">Download CV</Button>
            </div>
          </Col>
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
        </Row>
      </Container>
    </div>
  );
}

export default ShomeSection;
