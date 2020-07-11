import React from 'react'
import {Route} from 'react-router';
import SearchForm from '../Search/SearchForm';
import {Col, Nav, Navbar, Row} from 'react-bootstrap';
import {contactUrl, mainPageUrl, personalPageUrl, searchResUrl} from "../../constant/url";

/**
 * Navbar on top, wraps bootstrap Navbar
 */
const NavBar = () => {
  return (
    <Row className="justify-content-md-center">
      <Col xs={10}>
        <Navbar sticky="top" bg="light" variant="light" expand="lg" className="justify-content-between mb-5">
          <Navbar.Brand href={mainPageUrl}>ALAITP</Navbar.Brand>
          <Route path={[searchResUrl, personalPageUrl]}
                 render={props => <SearchForm {...props} inputCSS="mr-sm-2" buttonCSS="btn btn-outline-primary"
                                              show/>}/>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href={mainPageUrl}>Home</Nav.Link>
              <Nav.Link href={personalPageUrl}>About Me</Nav.Link>
              <Nav.Link href={contactUrl}>Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  )
};

export default NavBar
