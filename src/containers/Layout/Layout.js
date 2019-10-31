import React, { useState, Fragment } from "react";
import SearchBar from "./../../components/SearchBar";
import Keywords from "./../../components/Keywords";

const Layout = props => {
  const [search, setSearch] = useState(false);
  
  const [searchInput, setSearchInput] = useState('')

  console.log(search);

  const startSearchHandler = () => {
    setSearch(!search);
    console.log('search is: ' + search)
    // setSearchInput('remotive');
    // console.log('searchInput: ' + searchInput)
  };

  const SearchingHandler = () => {
    setSearchInput('remotive');
    console.log('searchInput: ' + searchInput)
  };

  return (
    <Fragment>
      <SearchBar startSearch={() => startSearchHandler()} />
      <Keywords show={search} input={searchInput} />
    </Fragment>
  );
};

export default Layout;
