import React from 'react'
import {connect} from "react-redux";
import {i18nText} from "../i18n/i18nText";

const Intro = props => {
  return (
    <div>
      <div className="jumbotron main-page--intro">
        <h1 className="display-4">{i18nText("introHeading1", props.language)}</h1>
        <hr className="my-4"/>
        <h3>{i18nText("introHeading2", props.language)}</h3>
        <hr className="my-4"/>
        <h3>{i18nText("introHeading3", props.language)}</h3>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    language: state.i18n.language
  }
};

export default connect(mapStateToProps)(Intro);
