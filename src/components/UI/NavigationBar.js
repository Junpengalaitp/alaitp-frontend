import React from 'react'
import {Route} from 'react-router';
import SearchForm from '../Search/SearchForm';
import {Col, Nav, Navbar, Row} from 'react-bootstrap';

const NavBar = () => {
  return (
    <Row className="justify-content-md-center">
      <Col xs={10}>
        <Navbar sticky="top" bg="light" variant="light" expand="lg" className="justify-content-between mb-5">
          <Navbar.Brand href="/alaitp-frontend">ALAITP</Navbar.Brand>
          <Route path='/alaitp-frontend/keywords'
                 render={props => <SearchForm {...props} inputCSS="mr-sm-2" buttonCSS="btn btn-outline-primary"
                                                show/>}/>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/alaitp-frontend">Home</Nav.Link>
              <Nav.Link href="/alaitp-frontend">About</Nav.Link>
              <Nav.Link href="/alaitp-frontend">Services</Nav.Link>
              <Nav.Link href="/alaitp-frontend">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  )
}

export default NavBar
