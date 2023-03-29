import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Sfooter() {
  return (
    <div
      style={{
        color: "white",
        background: "#141414",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row style={{ textAlign: "center" }}>
          <Col md="4"><h5>sahad</h5><h5>sahad</h5></Col>
          <Col md="4"><h5>sahad</h5><h5>sahad</h5></Col>
          <Col md="4"><h5>sahad</h5><h5>sahad</h5></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sfooter;
