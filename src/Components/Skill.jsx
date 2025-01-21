import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import css from "../../assets/skills/css.png";
import html from "../../assets/skills/html.png";
import js from "../../assets/skills/JS.png";
import java from "../../assets/skills/java.png";
import msql from "../../assets/skills/Mysql.png";
import react from "../../assets/skills/react.png";
import spring from "../../assets/tool/spring.png";
import boot from "../../assets/skills/bootstrap.png";
import vs from "../../assets/tool/vscode.png";
import ecl from "../../assets/tool/Eclipse.png";
import sql from "../../assets/tool/mysql work.png";
import redux from"../../assets/skills/redux.png"
import '../../src/index.css';

const Skill = () => {
  const skills = [
    { logo: html, name: "HTML" },
    { logo: css, name: "CSS" },
    { logo: js, name: "JavaScript" },
    { logo: java, name: "Java" },
    { logo: msql, name: "MySQL" }
  ];

  const frame = [
    { logo: react, name: "React.js" },
    { logo: redux, name: "Redux Toolkit" },
    { logo: boot, name: "Bootstrap" },
    { logo: spring, name: "Spring Boot" }
  ];

  const tool = [
    { logo: vs, name: "VS Code" },
    { logo: ecl, name: "Eclipse" },
    { logo: sql, name: "MySQL Workbench" }
  ];

  return (
    <section id="skill" className="bg-warning py-5">
      <Container>
        <div className="text-center">
          <h2 className="text-dark mb-5">
            Proficiencies in Modern Development: Languages, Frameworks, and Tools
          </h2>
        </div>

       
        <Row className="mb-5">
          <h2 className="text-center mb-4">SKILLS</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {skills.map((skill, index) => (
              <Col key={index} xs={6} sm={4} md={3} className="text-center mb-4">
                <div
                  className="rounded-circle bg-black d-flex align-items-center justify-content-center mx-auto"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    style={{ width: "60%", height: "60%" }}
                  />
                </div>
                <p className="mt-2">{skill.name}</p>
              </Col>
            ))}
          </div>
        </Row>

       
        <Row className="mb-5">
          <h2 className="text-center mb-4">FRAMEWORKS/LIBRARIES</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {frame.map((framework, index) => (
              <Col key={index} xs={6} sm={4} md={3} className="text-center mb-4">
                <div
                  className="rounded-circle bg-black d-flex align-items-center justify-content-center mx-auto"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img
                    src={framework.logo}
                    alt={framework.name}
                    style={{ width: "60%", height: "60%" }}
                  />
                </div>
                <p className="mt-2">{framework.name}</p>
              </Col>
            ))}
          </div>
        </Row>

       
        <Row>
          <h2 className="text-center mb-4">TOOLS</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {tool.map((toolItem, index) => (
              <Col key={index} xs={6} sm={4} md={3} className="text-center mb-4">
                <div
                  className="rounded-circle bg-black d-flex align-items-center justify-content-center mx-auto"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img
                    src={toolItem.logo}
                    alt={toolItem.name}
                    style={{ width: "60%", height: "60%" }}
                  />
                </div>
                <p className="mt-2">{toolItem.name}</p>
              </Col>
            ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Skill;
