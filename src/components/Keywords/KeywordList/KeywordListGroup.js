import React from 'react'
import { Row } from 'react-bootstrap';
import KeywordList from './KeywordList';
import { connect } from 'react-redux';
import Spinner from '../../UI/Spinner/Spinner';


const KeywordListGroup = props => {

  const categories = [
    {categoryTitle: "Programming Language", keywordType: "programmingLanguage", keywordListCSS:"list-group-item-warning" },
    {categoryTitle: "Other Language", keywordType: "otherLanguage", keywordListCSS:"list-group-item-success" },
    {categoryTitle: "Library", keywordType: "library", keywordListCSS:"list-group-item-primary" },
    {categoryTitle: "Framework", keywordType: "framework", keywordListCSS:"list-group-item-warning" },
    {categoryTitle: "Division", keywordType: "division", keywordListCSS:"list-group-item-success" },
    {categoryTitle: "Position", keywordType: "position", keywordListCSS:"list-group-item-primary" },
    {categoryTitle: "Platform", keywordType: "platform", keywordListCSS:"list-group-item-warning" },
    {categoryTitle: "Approach", keywordType: "approach", keywordListCSS:"list-group-item-success" },
    {categoryTitle: "Data Storage", keywordType: "dataStorage", keywordListCSS:"list-group-item-warning" },
    {categoryTitle: "Data Transmission", keywordType: "dataTransmission", keywordListCSS:"list-group-item-success" },
    {categoryTitle: "Server", keywordType: "server", keywordListCSS:"list-group-item-primary" },
    {categoryTitle: "Software Engineering", keywordType: "softwareEngineering", keywordListCSS:"list-group-item-warning" },
    {categoryTitle: "Computer Science", keywordType: "computerScience", keywordListCSS:"list-group-item-success" },
    {categoryTitle: "Architect", keywordType: "architect", keywordListCSS:"list-group-item-primary" },
    {categoryTitle: "AI", keywordType: "ai", keywordListCSS:"list-group-item-warning" },
    {categoryTitle: "Quality", keywordType: "quality", keywordListCSS:"list-group-item-success" },
    {categoryTitle: "Product", keywordType: "softwareProduct", keywordListCSS:"list-group-item-primary" },
    {categoryTitle: "Work Experience", keywordType: "workExperience", keywordListCSS:"list-group-item-warning" },
    {categoryTitle: "Tool", keywordType: "tool", keywordListCSS:"list-group-item-success" },
    {categoryTitle: "Soft Skill", keywordType: "softSkill", keywordListCSS:"list-group-item-primary" },
    {categoryTitle: "Offer", keywordType: "offer", keywordListCSS:"list-group-item-warning" },
    {categoryTitle: "Team", keywordType: "team", keywordListCSS:"list-group-item-success" },
    {categoryTitle: "Company", keywordType: "company", keywordListCSS:"list-group-item-primary" },
  ]

  const KeywordListRows = categories.map((category, index) => (
    <Row key={index}>
      <KeywordList
        categoryTitle={category.categoryTitle}
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
