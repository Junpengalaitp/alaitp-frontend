import React from "react"
import JobDescriptionList from '../../components/JobDescription/JobDescriptionList'
import KeywordCharts from "../../components/Keywords/KeywordChart/KeywordCharts"
import {connect} from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner"


const SearchResult = props => {
  let result = <div />
  if (props.loading) {
    result = <Spinner />
  }
  if (Object.keys(props.keywordIdxByJob).length !== 0) {
    result = (
      <React.Fragment>
        <div className="col-sm-5">
          <KeywordCharts/>
        </div>
        <div className="col-sm-5">
          <JobDescriptionList/>
        </div>
      </React.Fragment>
    )
  }
  return (
    <div>
      <div className="row justify-content-center">
        {result}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.jobDescription.loading,
    keywordIdxByJob: state.jobKeyword.keywordIdxByJob
  };
};

export default connect(mapStateToProps)(SearchResult);
