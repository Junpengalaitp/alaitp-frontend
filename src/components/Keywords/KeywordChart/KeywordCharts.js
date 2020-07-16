import React from 'react';
import {Button} from "react-bootstrap";
import ShowingCharts from "./ShowingCharts";
import HidingCharts from "./HidingCharts";
import {connect} from "react-redux";

import * as actionTypes from "../../../store/actions/actionTypes";
import {i18nText} from "../../../containers/i18n/i18nText";

const KeywordCharts = props => {
  const handleClick = () => {
    if (props.moreChart) {
      props.seeLessResult();
    } else {
      props.seeMoreResult();
    }
  }
  const buttonText = !props.moreChart ? i18nText("seeMoreButton", props.language) : i18nText("seeLessButton", props.language);
  return (
    <div>
      <h4>{i18nText("chartGroupHeading1", props.language)}</h4>
      <h5>{i18nText("chartGroupHeading2", props.language)}</h5>
      <ShowingCharts/>
      <HidingCharts hiding={!props.moreChart}/>
      <Button variant={"outline-primary"} onClick={() => handleClick()}>{buttonText}</Button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    moreChart: state.globalParam.moreChart,
    language: state.i18n.language
  }
};

const mapDispatchToProps = dispatch => {
  return {
    seeMoreResult: () => dispatch({type: actionTypes.SEE_MORE}),
    seeLessResult: () => dispatch({type: actionTypes.SEE_LESS}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(KeywordCharts)