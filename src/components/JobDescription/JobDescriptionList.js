import React from "react";
import { connect } from "react-redux";

import JobDescription from "./JobDescription";
import Spinner from "./../UI/Spinner/Spinner";

import * as actionTypes from "../../store/actions/actionTypes"
import { getJobKeyword, postJobKeyword } from "../../store/actions/keywordSearch";

class JobDescriptionList extends React.Component {

  render() {
    let searchResult = <Spinner />;
    if (!this.props.loading) {

      this.props.onKeywordSearchStart()
      this.props.onJobSearchSuccess(this.props.jobSearchId)

      if (this.props.cacheError === true) {
        this.props.onJobCacheFail(this.props.jobMap)
      }

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
    jobSearchId: state.jobDescription.jobSearchId,
    jobMap: state.jobDescription.jobMap,
    loading: state.jobDescription.loading,
    cacheError: state.keyword.cacheError
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onKeywordSearchStart: () => dispatch({ type: actionTypes.KEYWORD_SEARCH_START }),
    onJobSearchSuccess: jobSearchId => dispatch(getJobKeyword(jobSearchId)),
    onJobCacheFail: jobMap => dispatch(postJobKeyword(jobMap)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobDescriptionList);
