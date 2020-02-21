import React from "react";
import { connect } from "react-redux";

import JobDescription from "./JobDescription";
import Spinner from "./../UI/Spinner/Spinner";

import * as actionTypes from "../../store/actions/actionTypes"
import { searchKeywords } from "../../store/actions/keywordSearch";

class JobDescriptionList extends React.Component {

  render() {
    let searchResult = <Spinner />;
    if (!this.props.loading) {

      this.props.onKeywordSearchStart()
      this.props.onKeywordSearchSuccess(this.props.jobMap)

      searchResult = Object.keys(this.props.jobMap)
        .map((jobId) => (
          <JobDescription
            jobId={jobId}
            key={jobId}
            title={this.props.jobMap[jobId].jobTitle}
            company={this.props.jobMap[jobId].company}
            tags={this.props.jobMap[jobId].tags}
            jobDescriptionText={this.props.jobMap[jobId].jobDescriptionText}
          />
        ));
    }

    return <React.Fragment>{searchResult}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    jobMap: state.jobDescription.jobMap,
    loading: state.jobDescription.loading
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onKeywordSearchStart: () => dispatch({ type: actionTypes.KEYWORD_SEARCH_START }),
    onKeywordSearchSuccess: jobDescriptionList => dispatch(searchKeywords(jobDescriptionList))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobDescriptionList);
