import React from "react"
import JobDescriptionList from '../../components/JobDescription/JobDescriptionList'
import KeywordCharts from "../../components/Keywords/KeywordChart/KeywordCharts";


const SearchResult = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-sm-5">
          <KeywordCharts/>
        </div>
        <div className="col-sm-5">
          <JobDescriptionList/>
        </div>
      </div>
    </div>
  )
}

export default SearchResult;
