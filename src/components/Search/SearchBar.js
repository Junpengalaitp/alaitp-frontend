import React from "react";
import { Route } from 'react-router'
import SearchForm from "./SearchForm"

class SearchBar extends React.Component {

  render() {
    return (
      <main className="main-page">
        <div className="main-page--search">
          <h1 className="main-page--search_heading">Search For Most Wanted Technical Skills!</h1>
          <Route path='/alaitp-frontend' exact render={props => <SearchForm 
            {...props} inputCSS="form-control form-control-lg" buttonCSS="btn btn-outline-primary btn-lg" show={false} />} />
        </div>
      </main>
    )
  }

}

export default SearchBar
