import React from 'react';
import {i18nText} from "../../constant/i18nText";
import {connect} from "react-redux";

const MobilePage = props => (
  <div>
    <div>
      <div className="jumbotron main-page--intro">
        <h1 className="display-4">
          {i18nText("mobileAlert", props.language)}
        </h1>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    language: state.i18n.language
  }
};

export default connect(mapStateToProps)(MobilePage);