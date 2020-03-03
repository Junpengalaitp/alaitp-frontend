import React from "react";
import JobDescriptionList from '../JobDescription/JobDescriptionList';
import { Col, Row } from 'react-bootstrap';
import KeywordListGroup from "../Keywords/KeywordList/KeywordListGroup";


class SearchResult extends React.Component {
  
  render() {
    const searchResult = (
      <Row className="justify-content-md-center">
        <Col xs={5}>
          <KeywordListGroup />
        </Col>
        <Col xs={5}>
          <JobDescriptionList />
        </Col>    
      </Row>
    )
    return searchResult
  }
  
}

export default SearchResult;
