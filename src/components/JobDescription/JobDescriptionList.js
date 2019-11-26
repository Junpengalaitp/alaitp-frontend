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
      this.props.onKeywordSearchSuccess(this.props.jobList)

      searchResult = this.props.jobList
        .slice(0, 6)
        .map(jobDescription => (
          <JobDescription
            title={jobDescription.jobTitle}
            company={jobDescription.company}
            tags={jobDescription.tags}
            jobId={jobDescription.jobId}
            key={jobDescription.jobId}
            jobDescriptionText={jobDescription.jobDescriptionText}
          />
        ));
    }

    return <React.Fragment>{searchResult}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    jobList: state.jobDescription.jobList,
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
