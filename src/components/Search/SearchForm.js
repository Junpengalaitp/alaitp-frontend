import React, { useState } from "react";
import { connect } from "react-redux";

import Input from "../UI/Input/Input";
import { updateObject } from "../../shared/utility";

import * as actionTypes from "../../store/actions/actionTypes";
import { searchKeywords } from "../../store/actions/keywordSearch";
import Button from "../UI/Button";
import { searchJobs } from "../../store/actions/jobSearch";

const SearchForm = props => {
  const [searchForm, setSearchForm] = useState({
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Place You Want To Work"
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
    setSearchForm(updatedSearchForm);
    console.log(searchForm.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.onKeywordSearchStart();
    props.onJobSearchStart()
    props.history.push(`/keywords/${searchForm.value}`);
    props.onKeywordSearchSuccess(searchForm.value);
    props.onJobSearchSuccess("Software Engineer")
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-12 col-md-9 mb-2 mb-md-0">
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
          <div className="col-12 col-md-3">
            <Button type="submit" className={props.buttonCSS}>
              Search
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onKeywordSearchStart: () =>
      dispatch({ type: actionTypes.KEYWORD_SEARCH_START }),
    onKeywordSearchSuccess: searchInput => dispatch(searchKeywords(searchInput)),
    onJobSearchStart: () => dispatch({ type: actionTypes.JOB_SEARCH_START }),
    onJobSearchSuccess: searchInput => dispatch(searchJobs(searchInput)),
  };
};

export default connect(null, mapDispatchToProps)(SearchForm);
