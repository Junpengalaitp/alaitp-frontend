import React from "react";
import Spinner from "../UI/Spinner/Spinner";
import { connect } from "react-redux"
import JobDescriptionList from '../JobDescription/JobDescriptionList';
import KeywordList from './KeywordList/KeywordList';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


const KeywordsResults = props => {

  const KeywordLists = props.loading ? <Spinner /> : (
    <React.Fragment>
        <Row>
          <KeywordList
            title="Programming Language"
            keywordType="programmingLanguage"
            keywordListCSS="list-group-item-info"
          />
        </Row>
        <Row>
          <KeywordList
            title="Library and Framework"
            keywordType="libraryOrFramework"
            keywordListCSS="list-group-item-success"
          />
        </Row>
        <Row>
          <KeywordList
            title="Division"
            keywordType="division"
            keywordListCSS="list-group-item-danger"
          />
        </Row>
        <Row>
          <KeywordList
            title="Platform"
            keywordType="platform"
            keywordListCSS="list-group-item-warning"
          />
        </Row>
        <Row>
          <KeywordList
            title="Approach"
            keywordType="approach"
            keywordListCSS="list-group-item-light"
          />
        </Row>
        <Row>
          <KeywordList
            title="Data Storage"
            keywordType="dataStorage"
            keywordListCSS="list-group-item-dark"
          />
        </Row>
    </React.Fragment>
  )

  const searchResult = (
    <Row className="mx-auto">
      <Col xs={6}>
        <JobDescriptionList />
      </Col>
      <Col xs={6}>
        {KeywordLists}
      </Col>    
    </Row>
  )

  console.log("show: " + props.show);
  return <div>{props.show ? searchResult : null}</div>;
};

const mapStateToProps = state => {
  return {
    loading: state.keyword.loading
  };
};

export default connect(mapStateToProps)(KeywordsResults);
