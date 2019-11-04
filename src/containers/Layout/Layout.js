import React, { useState, Fragment } from "react";
import { connect } from 'react-redux';
import SearchBar from "./../../components/SearchBar";
import Keywords from "./../../components/Keywords";
import * as actionTypes from '../../store/actions/actions'

const Layout = props => {
  // const [search, setSearch] = useState(false);
  
  const [searchInput, setSearchInput] = useState('')

  console.log(props.search);

  // const startSearchHandler = () => {
  //   setSearch(!search);
  //   console.log('search is: ' + search)
  //   // setSearchInput('remotive');
  //   // console.log('searchInput: ' + searchInput)
  // };

  // // const SearchingHandler = () => {
  // //   setSearchInput('remotive');
  // //   console.log('searchInput: ' + searchInput)
  // // };

  return (
    <Fragment>
      <SearchBar startSearch={() => props.onSearchStart()} />
      <Keywords show={props.search} input={searchInput} />
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    search: state.searching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchStart: () => dispatch({type: actionTypes.SEARCH_START})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout);
