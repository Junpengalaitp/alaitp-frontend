import React from "react"
import JobDescriptionList from '../JobDescription/JobDescriptionList'
import KeywordChart from "../KeywordChart"
import { combinedCategories } from "../../config"


class SearchResult extends React.Component {
  render() {
    const searchResult = (
      <div>
        <div className="row justify-content-center">
          <div className="col-sm-5">
            {combinedCategories.split(",").map((category, index) => (
              <KeywordChart category={category} key={index}/>
            ))}
          </div>
          <div className="col-sm-5">
            <JobDescriptionList />
          </div>    
        </div>
      </div>      
    )
    return searchResult
  }
  
}

export default SearchResult;
