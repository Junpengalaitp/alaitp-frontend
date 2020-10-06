import React from 'react';
import {i18nText} from "../../constant/i18nText";
import {connect} from "react-redux";

const MobilePage = props => (
  <div>
    <h1 className="text-center">
      {i18nText("mobileAlert", props.language)}
    </h1>
  </div>
);

const mapStateToProps = state => {
  return {
    language: state.i18n.language
  }
};

export default connect(mapStateToProps)(MobilePage);