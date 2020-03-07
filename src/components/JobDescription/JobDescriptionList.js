import React, { useState } from "react";
import { connect } from "react-redux";

import JobDescription from "./JobDescription";
import Spinner from "./../UI/Spinner/Spinner";

import * as actionTypes from "../../store/actions/actionTypes"
import { getJobKeyword, postJobKeyword } from "../../store/actions/keywordSearch";
import { JobPagination } from "./JobPagination";

const JobDescriptionList = props => {

  const [currentPage, setCurrentPage] = useState(1)
  const jobPerPage = 15
  let totalJobs = 0
  let paginationShow = false

  let searchResult = <Spinner />;
  if (!props.loading) {
    totalJobs = Object.keys(props.jobMap).length

    props.onKeywordSearchStart()
    props.onJobSearchSuccess(props.jobSearchId)

    if (props.cacheError === true) {
      props.onJobCacheFail(props.jobMap)
    }

    const lastJobIdx = currentPage * jobPerPage
    const firstJobIdx = lastJobIdx - jobPerPage
    const currentJobs = Object.keys(props.jobMap).slice(firstJobIdx, lastJobIdx)

    searchResult = currentJobs.map((jobId) => (
        <JobDescription
          jobId={jobId}
          key={jobId}
          title={props.jobMap[jobId].jobTitle}
          company={props.jobMap[jobId].company}
          tags={props.jobMap[jobId].tags}
          jobDescriptionText={props.jobMap[jobId].jobDescriptionText}
        />
      ))
    
    paginationShow = true
  }
  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }
  return (
    <React.Fragment>
      {searchResult}
      <JobPagination jobsPerPage={jobPerPage} totalJobs={totalJobs} paginate={paginate} paginationShow={paginationShow} />
    </React.Fragment>)
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
