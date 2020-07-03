import React, { useState } from "react";
import { connect } from "react-redux";

import Input from "../UI/Input/Input";
import { updateObject } from "../../shared/utility";

import * as actionTypes from "../../store/actions/actionTypes";
import { searchJobs } from "../../store/actions/jobSearch";

const uuid = require('uuid/v4');

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
  };

  const handleSubmit = event => {
    event.preventDefault();
    const requestId = uuid();
    props.sendWsMsg(requestId);
    props.onJobSearchStart();
    props.clearChart();
    props.history.push(`/alaitp-frontend/keywords/${searchForm.value}`);
    props.onJobSearchSuccess(searchForm.value, requestId)
  };

  const onSearchBar = (
    <form className="main-page--search_searchBar" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-4-of-5">
          <Input
            className="form-control form-control-lg"
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
        <button type="submit" className="btn btn-outline-primary btn-lg">Search</button>
        </div>
      </div>
    </form>
  );

  const onNavBar = (
    <form onSubmit={handleSubmit} className="form-inline my-lg-0">
      <input className="form-control mr-sm-2"
        type={searchForm.elementConfig.type}
        value={searchForm.value}
        onChange={event => inputChangedHandler(event)}
        placeholder={searchForm.elementConfig.placeholder}
      />
      <button type="submit" className="btn btn-outline-primary">Search</button>
    </form>
  );

  return props.show ? onNavBar : onSearchBar
};

const mapDispatchToProps = dispatch => {
  return {
    onJobSearchStart: () => dispatch({ type: actionTypes.JOB_SEARCH_START }),
    sendWsMsg: requestId => dispatch({type: actionTypes.SOCKETS_CONNECT, requestId: requestId}),
    clearChart: () => dispatch({ type: actionTypes.CHART_CLEAR }),
    onJobSearchSuccess: (searchInput, requestId) => dispatch(searchJobs(searchInput, requestId))
  }
};

export default connect(null, mapDispatchToProps)(SearchForm);
