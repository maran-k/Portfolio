

import React from "react";
import contact from "../../assets/contact/lastcover.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import '../../src/index.css'; 

const Contact = () => {
  return (
    <section id="Contact" className="bg-warning">
      <Container className="p-4">
      <h3 className="text-center text-black mb-5">I’m here to turn your concepts into reality. </h3>
        <Row>
          <Col md={4}>
            <Image
              src={contact}
              roundedCircle
              alt="Profile"
              style={{ width: "300px", height: "300px" }}
              
            />
          </Col>
          <Col md={8} className="text-end ">
            <div className="m-0 ">
              <h3 className="text-black fw-bold fs-1">MANIMARAN K</h3>
              <h5 className="text-muted">Java Full Stack Developer</h5>
            </div>

            <ul className="list-unstyled text-center py-5">
              <div className="text-center">
                <li className="d-flex align-items-center justify-content-end mb-2">
                  <a
                    href="mailto:marank3110@gmail.com"
                    className="text-decoration-none text-black fs-5"
                  >
                     marank3110@gmail.com <i className="bi bi-envelope-fill"></i>
                  </a>
                </li>
                <li className="d-flex align-items-center justify-content-end mb-2">
                  <a
                    href="https://www.linkedin.com/in/manimaran-k-ba7815341/"
                    className="text-decoration-none text-black fs-5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                     LinkedIn <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li className="d-flex align-items-center justify-content-end mb-2">
                  <a
                    href="https://github.com/maran-k"
                    className="text-decoration-none text-black fs-5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <i className="bi bi-github"></i> 
                  </a>
                </li>
              </div>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact; 