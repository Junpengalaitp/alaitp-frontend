import React, { useState } from "react";
import { connect } from "react-redux";

import Input from "../UI/Input/Input";
import { updateObject } from "../../shared/utility";

import * as actionTypes from "../../store/actions/actionTypes";
import { searchKeywords } from "../../store/actions/search";
import Button from '../UI/Button';

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
    props.onSearchStart();
    props.history.push(`/keywords/${searchForm.value}`);
    props.onSearchSuccess(searchForm.value);
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
)(SearchForm);