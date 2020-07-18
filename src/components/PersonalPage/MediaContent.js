import React from 'react';
import ContentItem from "./ContentItem";
import {sideNavItems} from "../../constant/constant";
import {connect} from "react-redux";


const MediaContent = props => (
  <div>
    {Object.keys(sideNavItems).map((navName, idx) => (
      <ContentItem key={idx} content={navName} show={navName === props.currentPage}/>
    ))}
  </div>
);

const mapStateToProps = state => {
  return {
    currentPage: state.personalPage.current,
  }
};

export default connect(mapStateToProps)(MediaContent);