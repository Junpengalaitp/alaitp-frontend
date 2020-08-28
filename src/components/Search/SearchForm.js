import React, {useState} from "react";
import {connect} from "react-redux";

import {updateObject} from "../../util/utility";

import * as actionTypes from "../../store/actions/actionTypes";
import {searchJobs} from "../../store/actions/jobSearch";
import {searchResUrl} from "../../constant/url";
import {i18nText} from "../../constant/i18nText";

const uuid = require('uuid/v4');

/**
 * handing search input and submit, on main page and navbar
 */
const SearchForm = props => {
  const [searchForm, setSearchForm] = useState({
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Software Engineer"
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
    // first, quickly get the 20 jobs for the first job page for better UX
    let requestId = uuid();
    props.onJobSearchComplete(searchForm.value, 20, requestId)
    // then, get the total search result and open ws for receiving keywords
    requestId = uuid();
    props.connectWs(requestId);
    props.onJobSearchStart();
    props.clearChart();
    props.history.push(`${searchResUrl}/${searchForm.value}`);
    props.onJobSearchComplete(searchForm.value, 1000, requestId)
  };

  const buttonText = i18nText("searchButton", props.language);

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
          <button type="submit" className="btn btn-outline-primary btn-lg main-page--btn">{buttonText}</button>
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
             placeholder={searchForm.elementConfig.placeholder}
      />
      <button type="submit" className="btn btn-outline-primary navbar--btn">{buttonText}</button>
    </form>
  );

  return props.show ? onNavBar : onSearchBar
};

const mapStateToProps = state => {
  return {
    language: state.i18n.language
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onJobSearchStart: () => dispatch({type: actionTypes.JOB_SEARCH_START}),
    connectWs: requestId => dispatch({type: actionTypes.SOCKETS_CONNECT_AND_SEND, requestId: requestId}),
    clearChart: () => dispatch({type: actionTypes.CHART_CLEAR}),
    onJobSearchComplete: (searchInput, amount, requestId) => dispatch(searchJobs(searchInput, amount, requestId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
