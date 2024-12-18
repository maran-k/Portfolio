import React from 'react'
import '../../src/index.css'
import about from '../../assets/about.png'



function About() {
  return (
    <section id="about" className="bg-black text-warning py-5">
      <div className="container">
        <h1 className="text-center mb-4">ABOUT</h1>
        <div className="d-flex flex-column flex-lg-row align-items-center">
          
          <div className="text-center me-lg-5 mb-4 mb-lg-0">
            <img
              src={about}
              alt="Avatar"
              className="rounded-circle mb-3"
              style={{ width: '500px', height: '500px' }}
            />
          </div>

          
          <div className="w-100">
           
            <div className="card bg-warning text-muted mb-3 hover-effect">
              <div className="card-body">
                <h5 className="card-title text-black">Full Stack Developer</h5>
                <ul className="card-text list-unstyled">
                  <li>Passionate about building seamless user experiences and efficient server-side systems.</li>
                  <li>Skilled in designing responsive front-end interfaces and scalable back-end architectures.</li>
                  <li>Familiar with creating optimized, secure APIs and integrating databases.</li>
                </ul>
              </div>
            </div>

            
            <div className="card bg-warning text-muted mb-3 hover-effect">
              <div className="card-body">
                <h5 className="card-title text-black">Frontend Developer</h5>
                <ul className="card-text list-unstyled">
                  <li>Aspiring front-end developer skilled in creating responsive and user-friendly web interfaces.</li>
                  <li>Fresh front-end developer passionate about designing visually appealing and functional websites.</li>
                  <li>Entry-level front-end developer experienced in building clean, optimized, and mobile-friendly web designs.</li>
                </ul>
              </div>
            </div>

            
            <div className="card bg-warning text-muted mb-3 hover-effect">
              <div className="card-body">
                <h5 className="card-title text-black">Backend Developer</h5>
                <ul className="card-text list-unstyled">
                  <li>Eager back-end developer with hands-on experience in building efficient APIs and scalable server-side systems.</li>
                  <li>Entry-level backend developer experienced in developing optimized database-driven applications and APIs.</li>
                </ul>
              </div>
            </div>

            
          
            <div className="mt-4">
              <a
                href="/resume.pdf"
                download
                className="btn btn-warning text-black fw-bold"
              >
                RESUME <i className="bi bi-download ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About