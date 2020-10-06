import React from 'react';
import {connect} from "react-redux";
import * as actionTypes from "../../store/actions/actionTypes";

const I18NSwitch = props => {
  const text = props.language === "en" ? "中文" : "English"
  const width = window.innerWidth;
  return (
    <div className={width < 992 ? "midBottom" : "leftMid"}>
      <button type="button" className="btn btn-info btn-lg btn-circle"
              onClick={() => props.switchLang()}>{text}</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    language: state.i18n.language
  }
};

const mapDispatchToProps = dispatch => {
  return {
    switchLang: () => {
      dispatch({type: actionTypes.SWITCH_LANGUAGE})
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(I18NSwitch);