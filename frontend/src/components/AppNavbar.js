import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">Proshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="app-navbar-nav" />
        <Navbar.Collapse id="app-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/cart"><i className="fas fa-shopping-cart px-2" aria-hidden="true"></i>Cart</Nav.Link>
            <Nav.Link href="/login"><i className="fas fa-user px-2" aria-hidden="true"></i>Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
