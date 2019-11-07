import React, { useState } from "react";
import { connect } from "react-redux";

import * as actionTypes from "../store/actions/actionTypes";
import { searchKeywords } from "./../store/actions/search";
import Input from "./UI/Input/Input";
import { updateObject } from "./../shared/utility";

const SearchBar = props => {
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
    props.onSearchStart();
    props.history.push(`/keywords/${searchForm.value}`);
    props.onSearchSuccess(searchForm.value);
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <h1 className="mb-5">Search For Most Wanted Technical Skills!</h1>
          </div>
          <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="col-12 col-md-9 mb-2 mb-md-0">
                  <Input
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
                  <button
                    type="submit"
                    className="btn btn-block btn-lg btn-primary"
                  >
                    See Result
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    search: state.searching,
    keywords: state.keywords
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchStart: () => dispatch({ type: actionTypes.SEARCH_START }),
    onSearchSuccess: searchInput => dispatch(searchKeywords(searchInput))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
