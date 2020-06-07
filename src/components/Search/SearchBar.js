import React from "react";
import { Route } from 'react-router'
import SearchForm from "./SearchForm"

class SearchBar extends React.Component {

  render() {
    return (
      <main className="main-page">
        <div className="main-page--search">
          <h1 className="main-page--search_heading">Search For Most Wanted Technical Skills!</h1>
          <Route path='/alaitp-frontend' exact render={props => <SearchForm {...props} show={false} />} />
          <div className="jumbotron" style={{"margin-top": "100px", "margin-right": "100px"}}>
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">This is a project I build for showing my technical skills, a website for searching technical
              jobs and analysis the job description to get the related technical skills for job requirements.
            </p>
            <hr className="my-4" />
              <p>It uses utility classes for typography and spacing to space content out within the larger
                container.</p>
              <a className="btn btn-primary btn-lg" href="/alaitp-frontend" role="button">About Me</a>
          </div>
        </div>
      </main>
    )
  }
}

export default SearchBar
