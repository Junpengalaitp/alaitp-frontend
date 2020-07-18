import React from 'react';
import Nav from "react-bootstrap/Nav";
import * as actionTypes from "../../store/actions/actionTypes";
import {connect} from "react-redux";
import {sideNavItems} from "../../constant/constant";
import {i18nText} from "../../constant/i18nText";

const SideNav = props => (
  <Nav variant="pills" defaultActiveKey="link-0" className="flex-column">
    {Object.keys(sideNavItems).map((navName, idx) => (
      <Nav.Link className="side-nav-item" eventKey={"link-" + idx} key={idx} onSelect={() => props.clickLink(navName)}>
        <p className="side-nav-item_text">{i18nText(navName, props.language)}</p>
      </Nav.Link>
    ))}
  </Nav>
);

const mapStateToProps = state => {
  return {
    language: state.i18n.language,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    clickLink: linkName => dispatch({type: actionTypes.SIDE_NAV_CLICK, payload: linkName}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);