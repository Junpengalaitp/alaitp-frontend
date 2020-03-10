import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import JobDescription from "./JobDescription";
import Spinner from "./../UI/Spinner/Spinner";

import * as actionTypes from "../../store/actions/actionTypes"
import { getJobKeyword, postJobKeyword } from "../../store/actions/keywordSearch";
import { JobPagination } from "./JobPagination";

const JobDescriptionList = props => {

  const [currentPage, setCurrentPage] = useState(1)
  const [rendered, setRendered] = useState(false)
  const jobsPerPage = 15
  let totalJobs = 0
  let paginationShow = false
  
  // for searching after previous search complete
  useEffect(() => {
    setRendered(false)
  }, [props.jobMap])

  let searchResult = <Spinner />
  if (!props.loading && props.searchComplete) {
    totalJobs = Object.keys(props.jobMap).length

    if (!rendered) {
        props.onKeywordSearchStart()
        props.onJobSearchSuccess(props.jobSearchId)
  
        if (props.cacheError === true) {
          props.onJobCacheFail(props.jobMap)
        }
      setRendered(true)
    }
    
    const lastJobIdx = currentPage * jobsPerPage
    const firstJobIdx = lastJobIdx - jobsPerPage
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
  const paginate = (pageNumber, direction) => {
    if (direction === null) {
      setCurrentPage(pageNumber)
    } else {
      const pageToGo = currentPage + direction
      if (pageToGo < 1 || pageToGo > Math.ceil(totalJobs / jobsPerPage)) {
        return 
      }
      setCurrentPage(pageToGo)
    }
  }
  return (
    <React.Fragment>
      {searchResult}
      <JobPagination jobsPerPage={jobsPerPage} totalJobs={totalJobs} paginate={paginate} paginationShow={paginationShow} />
    </React.Fragment>)
}

const mapStateToProps = state => {
  return {
    jobSearchId: state.jobDescription.jobSearchId,
    jobMap: state.jobDescription.jobMap,
    loading: state.jobDescription.loading,
    searchComplete: state.jobDescription.searchComplete,
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
