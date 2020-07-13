import React from 'react';
import ContentItem from "./ContentItem";
import {navItems} from "../../constant/constant";
import {connect} from "react-redux";


const MediaContent = props => (
  <div>
    {navItems.map((navName, idx) => (
      <ContentItem key={idx} content={navName} show={navName === props.currentPage} />
    ))}
  </div>
);

const mapStateToProps = state => {
  return {
    currentPage: state.personalPage.current
  }
};

export default connect(mapStateToProps)(MediaContent);