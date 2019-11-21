import React from "react";
import { Route } from 'react-router'
import SearchForm from "./SearchForm";
import { Container, Row, Col } from "react-bootstrap";

const SearchBar = () => {

  return (
    <Container className="mt-5">
      <Row className="mt-5">
        <Col xl={9} className="mx-auto" >
          <h1 className="mt-5">Search For Most Wanted Technical Skills!</h1>
        </Col>
        <Col xl={7} lg={8} md={10} className="mx-auto mt-5" >
          <Route path='/' exact render={(props) => <SearchForm {...props} inputCSS="form-control form-control-lg" buttonCSS="btn btn-outline-primary btn-lg" show={false} />} />
        </Col>
      </Row>
    </Container>
  )
}

export default SearchBar
