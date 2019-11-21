import React from "react";
import JobDescriptionList from '../JobDescription/JobDescriptionList';
import { Col, Row } from 'react-bootstrap';
import KeywordListGroup from "../Keywords/KeywordList/KeywordListGroup";


const SearchResult = props => {

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

  console.log("show: " + props.show);
  return <div>{props.show ? searchResult : null}</div>;
};

export default SearchResult;
