import React, { useState, Fragment } from "react";
import { connect } from 'react-redux';
import SearchBar from "./../../components/SearchBar";
import Keywords from "./../../components/Keywords";
import * as actionTypes from '../../store/actions/actionTypes'

const Layout = props => {
  
  const [searchInput, setSearchInput] = useState('')


  return (
    <Fragment>
      <SearchBar startSearch={() => props.onSearchStart()} />
      <Keywords show={props.loading || props.searchComplete} input={searchInput} />
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    searchComplete: state.searchComplete,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchStart: () => dispatch({type: actionTypes.SEARCH_START})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout);
