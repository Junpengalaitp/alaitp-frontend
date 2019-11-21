import React from 'react'
import { Route } from 'react-router';
import SearchForm from '../Search/SearchForm';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="mb-5">
      <Navbar.Brand href="/">ALAITP</Navbar.Brand>
      <Route path='/keywords' render={(props) => <SearchForm {...props} inputCSS="form-control mr-2" buttonCSS="btn btn-outline-primary" />} />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/">Services</Nav.Link>
          <Nav.Link href="/">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
