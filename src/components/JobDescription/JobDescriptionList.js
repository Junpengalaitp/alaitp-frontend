import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import JobDescription from "./JobDescription";
import Spinner from "./../UI/Spinner/Spinner";

import * as actionTypes from "../../store/actions/actionTypes"
import {JobPagination} from "./JobPagination";

/**
 * contains job description, paginated
 */
const JobDescriptionList = props => {

  const [currentPage, setCurrentPage] = useState(1);
  const [rendered, setRendered] = useState(false);
  let totalJobs = 0;
  let paginationShow = false;
  
  // for searching after previous search complete
  useEffect(() => {
    setRendered(false);
    setCurrentPage(1)
  }, [props.jobMap]);

  let searchResult = <Spinner />;
  if (!props.loading && props.searchComplete) {
    totalJobs = Object.keys(props.jobMap).length;

    if (!rendered) {
      props.onKeywordSearchStart();
      setRendered(true)
    }

    const lastJobIdx = currentPage * props.jobsPerPage;
    const firstJobIdx = lastJobIdx - props.jobsPerPage;
    const currentJobs = Object.keys(props.jobMap).slice(firstJobIdx, lastJobIdx);

    searchResult = currentJobs.map((jobId) => (
      <JobDescription
        jobId={jobId}
        key={jobId}
        title={props.jobMap[jobId].jobTitle}
        company={props.jobMap[jobId].company}
        tags={props.jobMap[jobId].tags}
        jobDescriptionText={props.jobMap[jobId].jobDescriptionText}
        />
      ));
    paginationShow = true
  }
  const paginate = (pageNumber, direction) => {
    if (direction === null) {
      setCurrentPage(pageNumber)
    } else {
      const pageToGo = currentPage + direction;
      if (pageToGo < 1 || pageToGo > Math.ceil(totalJobs / props.jobsPerPage)) {
        return
      }
      setCurrentPage(pageToGo)
    }
    window.scroll(0, 0)
  };
  return (
    <React.Fragment>
      <JobPagination currentPage={currentPage} jobsPerPage={props.jobsPerPage} totalJobs={totalJobs} paginate={paginate}
                     paginationShow={paginationShow}/>
        {searchResult}
      <JobPagination currentPage={currentPage} jobsPerPage={props.jobsPerPage} totalJobs={totalJobs} paginate={paginate}
                     paginationShow={paginationShow}/>
    </React.Fragment>)
};

const mapStateToProps = state => {
  return {
    jobSearchId: state.jobDescription.jobSearchId,
    jobMap: state.jobDescription.jobMap,
    loading: state.jobDescription.loading,
    searchComplete: state.jobDescription.searchComplete,
    jobsPerPage: state.globalParam.jobsPerPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onKeywordSearchStart: () => dispatch({ type: actionTypes.KEYWORD_SEARCH_START }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobDescriptionList);
