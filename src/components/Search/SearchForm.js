import React, {useState} from "react";
import {connect} from "react-redux";

import {updateObject} from "../../util/utility";

import * as actionTypes from "../../store/actions/actionTypes";
import {searchJobs} from "../../store/actions/jobSearch";
import {searchResUrl} from "../../constant/url";
import {translate} from "../../containers/i18n/translate";

const uuid = require('uuid/v4');

/**
 * handing search input and submit, on main page and navbar
 */
const SearchForm = props => {
  const [searchForm, setSearchForm] = useState({
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Type job title or skill, eg: Software Engineer/Java",
      placeholderNavBar: "Software Engineer",
    },
    value: "",
  });

  const inputChangedHandler = event => {
    const updatedSearchForm = updateObject(searchForm, {
      value: event.target.value
    });
    setSearchForm(updatedSearchForm)
  };

  const handleSubmit = event => {
    event.preventDefault();
    const requestId = uuid();
    props.connectWs(requestId);
    props.onJobSearchStart();
    props.clearChart();
    props.history.push(`${searchResUrl}/${searchForm.value}`);
    props.onJobSearchSuccess(searchForm.value, requestId)
  };

  const onSearchBar = (
    <form className="main-page--search_searchBar" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-4-of-5">
          <input
            className="form-control form-control-lg"
            type={searchForm.elementType.type}
            value={searchForm.value}
            placeholder={searchForm.elementConfig.placeholder}
            onChange={event => inputChangedHandler(event)}
          />
        </div>
        <div className="col-1-of-5">
          <button type="submit" className="btn btn-outline-primary btn-lg">{translate("Search")}</button>
        </div>
      </div>
    </form>
  );

  const onNavBar = (
    <form onSubmit={handleSubmit} className="form-inline my-lg-0">
      <input className="form-control mr-md-4"
             type={searchForm.elementConfig.type}
             value={searchForm.value}
             onChange={event => inputChangedHandler(event)}
             placeholder={searchForm.elementConfig.placeholderNavBar}
      />
      <button type="submit" className="btn btn-outline-primary">{translate("Search")}</button>
    </form>
  );

  return props.show ? onNavBar : onSearchBar
};

const mapDispatchToProps = dispatch => {
  return {
    onJobSearchStart: () => dispatch({type: actionTypes.JOB_SEARCH_START}),
    connectWs: requestId => dispatch({type: actionTypes.SOCKETS_CONNECT_AND_SEND, requestId: requestId}),
    clearChart: () => dispatch({type: actionTypes.CHART_CLEAR}),
    onJobSearchSuccess: (searchInput, requestId) => dispatch(searchJobs(searchInput, requestId))
  }
};

export default connect(null, mapDispatchToProps)(SearchForm);
