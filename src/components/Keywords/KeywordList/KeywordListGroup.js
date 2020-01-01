import React from 'react'
import { Row } from 'react-bootstrap';
import KeywordList from './KeywordList';
import { connect } from 'react-redux';
import Spinner from '../../UI/Spinner/Spinner';


const KeywordListGroup = props => {

  const categories = [
    {title: "Programming Language", keywordType: "programmingLanguage", keywordListCSS:"list-group-item-warning" },
    {title: "Other Language", keywordType: "otherLanguage", keywordListCSS:"list-group-item-success" },
    {title: "Library", keywordType: "library", keywordListCSS:"list-group-item-primary" },
    {title: "Framework", keywordType: "framework", keywordListCSS:"list-group-item-warning" },
    {title: "Division", keywordType: "division", keywordListCSS:"list-group-item-success" },
    {title: "Position", keywordType: "position", keywordListCSS:"list-group-item-primary" },
    {title: "Platform", keywordType: "platform", keywordListCSS:"list-group-item-warning" },
    {title: "Approach", keywordType: "approach", keywordListCSS:"list-group-item-success" },
    {title: "Data Storage", keywordType: "dataStorage", keywordListCSS:"list-group-item-warning" },
    {title: "Data Transmission", keywordType: "dataTransmission", keywordListCSS:"list-group-item-success" },
    {title: "Server", keywordType: "server", keywordListCSS:"list-group-item-primary" },
    {title: "Software Engineering", keywordType: "softwareEngineering", keywordListCSS:"list-group-item-warning" },
    {title: "Computer Science", keywordType: "computerScience", keywordListCSS:"list-group-item-success" },
    {title: "Architect", keywordType: "architect", keywordListCSS:"list-group-item-primary" },
    {title: "AI", keywordType: "ai", keywordListCSS:"list-group-item-warning" },
    {title: "Quality", keywordType: "quality", keywordListCSS:"list-group-item-success" },
    {title: "Product", keywordType: "softwareProduct", keywordListCSS:"list-group-item-primary" },
    {title: "Work Experienceity", keywordType: "workExperience", keywordListCSS:"list-group-item-warning" },
    {title: "Tool", keywordType: "tool", keywordListCSS:"list-group-item-success" },
    {title: "Soft Skill", keywordType: "softSkill", keywordListCSS:"list-group-item-primary" },
    {title: "Offer", keywordType: "offer", keywordListCSS:"list-group-item-warning" },
    {title: "Team", keywordType: "team", keywordListCSS:"list-group-item-success" },
    {title: "Company", keywordType: "company", keywordListCSS:"list-group-item-primary" },
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
