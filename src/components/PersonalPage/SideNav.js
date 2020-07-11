import React from 'react';
import Nav from "react-bootstrap/Nav";
import * as actionTypes from "../../store/actions/actionTypes";
import {connect} from "react-redux";

const SideNav = props => (
  <Nav variant="pills" defaultActiveKey="link-0" className="flex-column">
    <Nav.Link eventKey="link-0">Project Initiative</Nav.Link>
    <Nav.Link eventKey="link-1">Time Management</Nav.Link>
    <Nav.Link eventKey="link-2">Coding practice</Nav.Link>
    <Nav.Link eventKey="link-3">Workout routine</Nav.Link>
    <Nav.Link eventKey="link-4">Reading Habit</Nav.Link>
  </Nav>
);

const mapDispatchToProps = dispatch => {
  return {
    clickLink: linkName => dispatch({type: actionTypes.SIDE_NAV_CLICK, payload: linkName}),
  }
};

export default connect(null, mapDispatchToProps)(SideNav);