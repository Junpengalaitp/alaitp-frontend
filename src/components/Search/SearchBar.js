import React from "react";
import { Route } from 'react-router'
import SearchForm from "./SearchForm";

const SearchBar = () => {

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <h1 className="mb-5">Search For Most Wanted Technical Skills!</h1>
          </div>
          <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <Route path='/' exact render={(props) => <SearchForm {...props} inputCSS="form-control form-control-lg" buttonCSS="btn btn-outline-primary btn-lg" />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar
