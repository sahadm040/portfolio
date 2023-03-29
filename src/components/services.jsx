import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaCode } from "react-icons/fa";
import { BiPaint } from "react-icons/bi";
function Services() {
  return (
    <div>
      <section className="services" id="services">
        <div
          style={{
            color: "white",
            background: "black",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container>
            <div>
              <h1
                style={{
                  fontWeight: "bolder",
                  color: "#2fa56e",
                  textAlign: "center",
                  marginBottom: "35px",
                }}
              >
                Services
              </h1>
              <Row
                className="d-flex"
                style={{ justifyContent: "space-around" }}
              >
                <Col md="3">
                  <Card
                    style={{
                      width: "320px",
                      background: "#80808038",
                      padding: "20px",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ color: "#2fa56e" }}>
                      <FaCode style={{ height: "40px", width: "40px" }} />
                    </div>
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
                <Col md="3">
                  <Card
                    style={{
                      width: "320px",
                      background: "#80808038",
                      padding: "20px",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ color: "#2fa56e" }}>
                      <BiPaint style={{ height: "40px", width: "40px" }} />
                    </div>
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
                <Col md="3">
                  <Card
                    style={{
                      width: "320px",
                      background: "#80808038",
                      padding: "20px",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ color: "#2fa56e" }}>
                      <BiPaint style={{ height: "40px", width: "40px" }} />
                    </div>
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
              </Row>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
}

export default Services;
