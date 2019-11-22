import React from 'react'
import { Row } from 'react-bootstrap';
import KeywordList from './KeywordList';
import { connect } from 'react-redux';
import Spinner from '../../UI/Spinner/Spinner';


const KeywordListGroup = props => {

  const categories = [
    {title: "Programming Language", keywordType: "programmingLanguage", keywordListCSS:"list-group-item-warning" },
    {title: "Library and Framework", keywordType: "libraryOrFramework", keywordListCSS:"list-group-item-success" },
    {title: "Division", keywordType: "division", keywordListCSS:"list-group-item-primary" },
    {title: "Platform", keywordType: "platform", keywordListCSS:"list-group-item-warning" },
    {title: "Approach", keywordType: "approach", keywordListCSS:"list-group-item-success" },
    {title: "Data Storage", keywordType: "dataStorage", keywordListCSS:"list-group-item-primary" },
  ]

  const KeywordListRows = categories.map((category, index) => (
    <Row key={index}>
      <KeywordList
        title={category.title}
        keywordType={category.keywordType}
        keywordListCSS={category.keywordListCSS}
      />
    </Row>
  ))

  const keywordListGroup = props.keywordsLoading ? <Spinner /> : KeywordListRows;

  return keywordListGroup
}

const mapStateToProps = state => {
  return {
    jobDescriptionLoading: state.jobDescription.loading,
    keywordsLoading: state.keyword.loading
  }
}

export default connect(mapStateToProps)(KeywordListGroup);
