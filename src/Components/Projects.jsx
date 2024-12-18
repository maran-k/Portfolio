import React from 'react'
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import codeImage from '../../assets/projects/project.png'
import '../../src/index.css'

const Projects = () => {

    const projects = [
        {
          title: "Employee Management System",
          description: `Developed a full-stack application for managing employees.
                        Implemented CRUD operations to streamline processes.`,
          technologies: ["React", "Java", "MySql"],
          demoLink: "#",
          sourceLink: "https://github.com/maran-k/Employee.mgt",
        },
        {
            title: "Portfolio",
            description: `Created a professional, fully responsive portfolio.
                          Ensured cross-browser compatibility and optimized performance. `,
            technologies: ["React", "Bootstrap"],
            demoLink: "#",
            sourceLink: "",
          }

    ]

    const handleSourceClick = (link) => {
        if (link) {
          window.open(link, "_blank"); 
        } else {
          alert("Demo link is not available for this project.");
        }
      }; 

  return (
    <section id="project" className="bg-black text-light py-5">
      <Container>
        <h3 className="text-center text-warning mb-5">Project : Turning Ideas into Reality with Code and Design</h3>
        <Row className="g-4">
          {projects.map((projects, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <Card className="h-100 text-light bg-warning">
                <Card.Img
                  variant="top"
                  src={codeImage}
                  alt={projects.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className='text-black'>{projects.title}</Card.Title>
                  <Card.Text className='text-dark'>{projects.description}</Card.Text>
                  <div className="mb-3">
                    {projects.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="badge bg-black me-2"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex justify-content-end ">
                    
                    <Button
                      variant="outline-dark"
                      onClick={() => handleSourceClick(projects.sourceLink)}
                      target="_blank"
                    >
                      Source
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Projects