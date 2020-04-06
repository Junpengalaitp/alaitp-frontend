import React from "react"
import JobDescriptionList from '../JobDescription/JobDescriptionList'
import KeywordListGroup from "../Keywords/KeywordList/KeywordListGroup"


class SearchResult extends React.Component {
  
  render() {
    const searchResult = (
      <div className="row justify-content-center">
        <div className="col-sm-5">
          <KeywordListGroup />
        </div>
        <div className="col-sm-5">
          <JobDescriptionList />
        </div>    
      </div>
    )
    return searchResult
  }
  
}

export default SearchResult;
