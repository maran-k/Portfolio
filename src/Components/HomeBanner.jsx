import React from 'react'
import { Col, Container,  Row ,Image } from 'react-bootstrap'
import profile from '../../assets/photo.jpg'
import resume from '../../assets/Manimaran_K_JFSD.pdf'


function HomeBanner() {
  return (
    <section id="home" className="bg-warning">
    <div className='bg-warning' style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container>
        <Row className="align-items-center justify-content-center">
        <Col md={6 } className="text-center pb-3 pb-sm-4">
            <Image
              src={profile}
              roundedCircle
              alt="Profile"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </Col>


        
          <Col md={6} className="text-center text-md-start pb-3 pb-sm-4">
            <h1 className="fw-bold ">Hi, I’m Manimaran K</h1>
            <p className="text-muted">
              I’m a <span className="fw-bold">Full Stack Developer</span> <br />
              & Software Engineer From India
            </p>
            <div >
                <a
                  href={resume}
                  download="Manimaran_K_JFSD_Resume.pdf" 
                  className="btn btn-black text-warning fw-bold "
                  style={{
                    backgroundColor: 'black',
                    padding: '10px 20px',
                    textDecoration: 'none',
                  }}
                >
                  RESUME <i className="bi bi-download ms-2"></i>
                </a>
              </div>
          </Col>
          
          
        </Row>
      </Container>
    </div>
    </section>
  )
}

export default HomeBanner