import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import '../../src/index.css'

function AppNavbar() {
  return (
    <Navbar bg='black' expand='lg'>
      <Container >
        <Navbar.Brand>
         <img src={logo} alt="logo" width="150" height="150" className="d-inline-block  align-text-top"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav ' className=" bg-warning border-dark  "></Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav' className="justify-content-end ">
          <Nav >
            <Nav.Link href='#home' className="text-warning fw-bold">HOME</Nav.Link>
            <Nav.Link href='#about'className="text-warning fw-bold">ABOUT</Nav.Link>
            <Nav.Link href='#skill'className="text-warning fw-bold">SKILL</Nav.Link>
            <Nav.Link href='#project' className="text-warning fw-bold">PROJECT</Nav.Link>
            <Nav.Link href='#Contact'className="text-warning fw-bold">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    
    
  )
}

export default AppNavbar