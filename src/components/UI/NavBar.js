import React, {useState} from 'react'
import {Route} from 'react-router';
import SearchForm from '../Search/SearchForm';
import {Col, Nav, Navbar, Row} from 'react-bootstrap';
import {contactUrl, mainPageUrl, personalPageUrl, searchResUrl} from "../../constant/url";
import ClickNoticeLink from "./ClickNoticeLink";
import {connect} from "react-redux";
import {i18nText} from "../../constant/i18nText";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import WechatQRModal from "../PersonalPage/WechatQRModal";
import ContactModal from "../PersonalPage/ContactModal";

/**
 * Navbar on top, wraps bootstrap Navbar
 */
const NavBar = props => {
  const homeText = i18nText("navHome", props.language)
  const aboutText = i18nText("navAbout", props.language)
  const contactText = i18nText("navContact", props.language)

  const [modalShow, setModalShow] = useState(false)

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
              <Nav.Link as={Link} className="nav-link" to={mainPageUrl}>{homeText}</Nav.Link>
              <Route path={searchResUrl}
                     render={props => <Nav.Link as={Link} className="nav-link"
                                                to={personalPageUrl}><ClickNoticeLink {...props} show={true}
                                                                                      text={aboutText}/></Nav.Link>}/>
              <Route path={personalPageUrl}
                     render={props => <Nav.Link as={Link} className="nav-link"
                                                to={personalPageUrl}><ClickNoticeLink {...props} show={false}
                                                                                      text={aboutText}/></Nav.Link>}/>
              <Nav.Link onClick={() => setModalShow(true)}>{contactText}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
      <ContactModal
        show={modalShow}
        onHide={() => setModalShow(false)}/>
    </Row>
  )
};

const mapStateToProps = state => {
  return {
    language: state.i18n.language
  }
};

export default connect(mapStateToProps)(NavBar);
