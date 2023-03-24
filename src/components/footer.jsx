import React from 'react'
import { BsInstagram, BsTwitter } from "react-icons/bs";
import {  Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { MdFacebook } from "react-icons/md";


function Footer() {
  return (
    <div><section className="footer">
    <div className="footer">
      <Container>
        <Row>
          <Col md="6">
            <h5>EDISONVALLEY</h5>
            <p className="footer-para text-muted">
              2020 © Edisonvalley. Design & Develop by Osperb <br></br> We
              are a bunch of tech enthusiasts determined to uplift the
              society utilising the latest technologies around us
            </p>
          </Col>

          <Col md="6">
            <Row>
              <Col md="4">
                <h5>Resources</h5>
                <p className="footer-right text-muted">Privacy policy</p>
                <p className="footer-right text-muted">
                  Terms and Condition
                </p>
              </Col>
              <Col md="3">
                <h5>Company</h5>
                <p className="footer-right text-muted">About us</p>
                <p className="footer-right text-muted">Features</p>
              </Col>
              <Col md="3">
                <h5>Social Links</h5>
                <Link to="https://www.google.com/" className="icon">
                  <MdFacebook />
                </Link>
                <Link
                  to="https://www.google.com/"
                  className="icon"
                >
                  <BsInstagram />
                </Link>
                <Link
                  to="https://www.google.com/"
                  className="icon"
                >
                  <BsTwitter />
                </Link>
                
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  </section></div>
  )
}

export default Footer