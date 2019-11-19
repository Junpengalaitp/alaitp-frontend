import React from "react";
import Spinner from "../UI/Spinner/Spinner";
import { connect } from "react-redux";
import { KeywordList } from "./KeywordList/KeywordList"
import { JobDescriptionList } from "../JobDescription/JobDescriptionList";

const KeywordsResults = props => {

  const KeywordLists = props.loading ? <Spinner /> : (
    <React.Fragment>
      <div className="row">
          <KeywordList
            title="Programming Language"
            keywordType="programmingLanguage"
            keywordListCSS="list-group-item-info"
          />
        </div>
        <div className="row">
          <KeywordList
            title="Library and Framework"
            keywordType="libraryOrFramework"
            keywordListCSS="list-group-item-success"
          />
        </div>
        <div className="row">
          <KeywordList
            title="Division"
            keywordType="division"
            keywordListCSS="list-group-item-danger"
          />
        </div>
        <div className="row">
          <KeywordList
            title="Platform"
            keywordType="platform"
            keywordListCSS="list-group-item-warning"
          />
        </div>
        <div className="row">
          <KeywordList
            title="Approach"
            keywordType="approach"
            keywordListCSS="list-group-item-light"
          />
        </div>
        <div className="row">
          <KeywordList
            title="Data Storage"
            keywordType="dataStorage"
            keywordListCSS="list-group-item-dark"
          />
        </div>
    </React.Fragment>
  )

  const searchResult = (
    <div className='row'>
      <div className='col-6'>
        <JobDescriptionList />
      </div>
      <div className='col-6'>
        {KeywordLists}
      </div>    
    </div>
  )

  console.log("show: " + props.show);
  return <div className="container">{props.show ? searchResult : null}</div>;
};

const mapStateToProps = state => {
  return {
    loading: state.keyword.loading
  };
};

export default connect(mapStateToProps)(KeywordsResults);
