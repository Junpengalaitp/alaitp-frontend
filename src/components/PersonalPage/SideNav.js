import React from 'react';
import Nav from "react-bootstrap/Nav";
import * as actionTypes from "../../store/actions/actionTypes";
import {connect} from "react-redux";
import {navItems} from "../../constant/constant";

const SideNav = props => (
  <Nav variant="pills" defaultActiveKey="link-0" className="flex-column">
    {navItems.map((navName, idx) => (
      <Nav.Link eventKey={"link-" + idx} key={idx} onSelect={() => props.clickLink(navName)}>{navName}</Nav.Link>
    ))}
  </Nav>
);

const mapDispatchToProps = dispatch => {
  return {
    clickLink: linkName => dispatch({type: actionTypes.SIDE_NAV_CLICK, payload: linkName}),
  }
};

export default connect(null, mapDispatchToProps)(SideNav);