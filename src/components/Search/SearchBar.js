import React from "react";
import { Route } from 'react-router'
import SearchForm from "./SearchForm";
import { Container, Row, Col } from "react-bootstrap";

const SearchBar = () => {

  return (
    <Container className="mt-5">
      <Row>
        <Col className="col-xl-9 mx-auto">
          <h1 className="mb-5">Search For Most Wanted Technical Skills!</h1>
        </Col>
        <Col className="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <Route path='/' exact render={(props) => <SearchForm {...props} inputCSS="form-control form-control-lg" buttonCSS="btn btn-outline-primary btn-lg" />} />
        </Col>
      </Row>
    </Container>
  )
}

export default SearchBar
