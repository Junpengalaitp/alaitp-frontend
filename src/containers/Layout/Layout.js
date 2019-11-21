import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { Route } from 'react-router'
import SearchBar from "../../components/Search/SearchBar";
import KeywordResults from "../../components/Keywords/KeywordResults"
import NavBar from '../../components/UI/NavBar'

const Layout = props => {

  
  return (
    <Fragment>
      <Route path='/' exact component={SearchBar} />
      <Route path='/keywords' component={NavBar} />
      <Route path='/keywords' render={() => <KeywordResults show={props.loading || props.searchComplete} />} />
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
