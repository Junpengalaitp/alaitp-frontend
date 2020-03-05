import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { Route } from 'react-router'
import SearchBar from "../../components/Search/SearchBar";
import SearchResults from "../../components/Search/SearchResults"
import NavBar from '../../components/UI/NavigationBar'

const Layout = () => {

  
  return (
    <Fragment>
      <Route path='/alaitp-frontend' exact component={SearchBar} />
      <Route path='/alaitp-frontend/keywords' component={NavBar} />
      <Route path='/alaitp-frontend/keywords' render={() => <SearchResults />} />
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    searchComplete: state.keyword.searchComplete,
    loading: state.keyword.loading
  }
}



export default connect(mapStateToProps)(Layout);
