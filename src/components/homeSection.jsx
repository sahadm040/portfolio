import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import profile from "./images/profile.jpg";
import { GrFacebookOption } from "react-icons/gr";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
function HomeSection() {
  return (
    <div>
      <section id="home">
        <div
          style={{
            minHeight: "100vh",
            background: "black",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container style={{ color: "white", background: "#000000eb" }}>
            <Row className="d-flex" style={{ justifyContent: "space-evenly" }}>
              <Col md="6">
                <h2>Hello,It's Me</h2>
                <h1 style={{ fontSize: "48px" }}>
                  SA<span style={{ color: "#2fa56e" }}>HA</span><span>D</span> M
                </h1>
                <h2>
                  And I'm a <span style={{ color: "#2fa56e" }}>Frontend </span>
                  Developer
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{" "}
                </p>
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
                <div>
                  <Button className="section-btn">Download CV</Button>
                </div>
              </Col>

              <Col style={{ display: "contents" }}>
                <img
                  src={profile}
                  style={{ width: "25%", height: "25%" }}
                  alt={""}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
}

export default HomeSection;
