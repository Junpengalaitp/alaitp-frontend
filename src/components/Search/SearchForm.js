import React, { useState } from "react";
import { connect } from "react-redux";

import Input from "../UI/Input/Input";
import { updateObject } from "../../shared/utility";

import * as actionTypes from "../../store/actions/actionTypes";
import Button from "../UI/Button";
import { searchJobs } from "../../store/actions/jobSearch";
import { Form, FormControl } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const SearchForm = props => {
  const [searchForm, setSearchForm] = useState({
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Software Engineer"
    },
    value: "",
    validation: {
      required: true
    },
    valid: true,
    touched: false
  });

  const inputChangedHandler = event => {
    const updatedSearchForm = updateObject(searchForm, {
      value: event.target.value,
      touched: true
    });
    setSearchForm(updatedSearchForm)
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.onJobSearchStart()
    props.history.push(`/alaitp-frontend/keywords/${searchForm.value}`)
    props.onJobSearchSuccess(searchForm.value)
  }

  const onSearchBar = (
    <form className="main-page--searchBar" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-4-of-5">
          <Input
            className={props.inputCSS}
            elementType={searchForm.elementType}
            elementConfig={searchForm.elementConfig}
            value={searchForm.value}
            invalid={!searchForm.valid}
            shouldValidate={searchForm.validation}
            touched={searchForm.touched}
            changed={event => inputChangedHandler(event)}
          />
        </div>
        <div className="col-1-of-5">
          <Button type="submit" className={props.buttonCSS}>
            Search
          </Button>
        </div>
      </div>
    </form>
  )

  const onNavBar = (
    <Form onSubmit={handleSubmit} inline>
      <FormControl
        className={props.inputCSS}
        type={searchForm.elementConfig.type}
        value={searchForm.value}
        onChange={event => inputChangedHandler(event)}
        placeholder={searchForm.elementConfig.placeholder}
      />
      <Button type="submit" className={props.buttonCSS}>
        Search
      </Button>
    </Form>
  )

  return props.show ? onNavBar: onSearchBar
};

const mapDispatchToProps = dispatch => {
  return {
    onJobSearchStart: () => dispatch({ type: actionTypes.JOB_SEARCH_START }),
    onJobSearchSuccess: searchInput => dispatch(searchJobs(searchInput))
  }
}

export default connect(null, mapDispatchToProps)(SearchForm);
