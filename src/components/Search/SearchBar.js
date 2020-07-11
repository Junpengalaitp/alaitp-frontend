import React from "react";
import { Route } from 'react-router'
import SearchForm from "./SearchForm"

/**
 * the search bar on main page
 */
const SearchBar = () => {
  return (
    <Route path='/alaitp-frontend' exact render={props => <SearchForm {...props} show={false} />} />
  )
};

export default SearchBar
