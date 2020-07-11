import React from "react";
import {Route} from 'react-router'
import SearchForm from "./SearchForm"
import {mainPageUrl} from "../../constant/url";

/**
 * the search bar on main page
 */
const SearchBar = () => {
  return (
    <Route path={mainPageUrl} exact render={props => <SearchForm {...props} show={false}/>}/>
  )
};

export default SearchBar
