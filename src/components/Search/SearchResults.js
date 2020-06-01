import React from "react"
import JobDescriptionList from '../JobDescription/JobDescriptionList'
import KeywordListGroup from "../Keywords/KeywordList/KeywordListGroup"
import KeywordChart from "../KeywordChart"


class SearchResult extends React.Component {
  
  render() {
    const searchResult = (
      <div>
        <div className="row justify-content-center">
          <div className="col-sm-5">
            <KeywordListGroup />
          </div>
          <div className="col-sm-5">
            <JobDescriptionList />
          </div>    
        </div>
        <KeywordChart category={"PROGRAMMING_LANGUAGE"} />
      </div>
      

    )
    return searchResult
  }
  
}

export default SearchResult;
