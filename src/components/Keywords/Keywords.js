import React from "react"
import Spinner from "../UI/Spinner/Spinner"
import { connect } from 'react-redux'
import { KeywordList } from "./KeywordList/KeywordList"

const Keywords = props => {

  const KeywordLists = (
    <div className="row">
      <KeywordList title='Programming Language' keywordType='programmingLanguage' keywordListCSS='list-group-item-info' />
      <KeywordList title='Library and Framework' keywordType='libraryOrFramework' keywordListCSS='list-group-item-success' />
      <KeywordList title='Division' keywordType='division' keywordListCSS='list-group-item-danger' />
      <KeywordList title='Platform' keywordType='platform' keywordListCSS='list-group-item-warning' />
      <KeywordList title='Approach' keywordType='approach' keywordListCSS='list-group-item-light' />
      <KeywordList title='Data Storage' keywordType='dataStorage' keywordListCSS='list-group-item-dark' />
    </div>)

  const searchResult = props.loading ? <Spinner /> : KeywordLists;

  console.log("show: " + props.show);
  return <div className="container">{props.show ? searchResult : null}</div>;
};

const mapStateToProps = state => {
  return {
    loading: state.loading
  };
};


export default connect(mapStateToProps)(Keywords);
