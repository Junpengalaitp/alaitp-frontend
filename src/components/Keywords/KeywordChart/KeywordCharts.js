import React from 'react';
import {Button} from "react-bootstrap";
import ShowingCharts from "./ShowingCharts";
import HidingCharts from "./HidingCharts";
import {connect} from "react-redux";

import * as actionTypes from "../../../store/actions/actionTypes";

const KeywordCharts = props => {
  const handleClick = () => {
    if (props.moreChart) {
      props.seeLessResult();
    } else {
      props.seeMoreResult();
    }
  }
  const buttonText = !props.moreChart ? "See More" : "See Less";
  return (
    <div>
      <h4>The Most Wanted Skills in Search Result (Click to See Correlated skills)</h4>
      <ShowingCharts/>
      <HidingCharts hiding={!props.moreChart}/>
      <Button variant={"outline-primary"} onClick={() => handleClick()}>{buttonText}</Button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    moreChart: state.globalParam.moreChart
  }
};

const mapDispatchToProps = dispatch => {
  return {
    seeMoreResult: () => dispatch({type: actionTypes.SEE_MORE}),
    seeLessResult: () => dispatch({type: actionTypes.SEE_LESS}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(KeywordCharts)