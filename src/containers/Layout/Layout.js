import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { Route } from 'react-router'
import SearchBar from "../../components/Search/SearchBar";
import Keywords from "../../components/Keywords/KeywordsResults"
import { NavBar } from '../../components/UI/NavBar'

const Layout = props => {

  
  return (
    <Fragment>
      <Route path='/' exact component={SearchBar} />
      <Route path='/keywords' component={NavBar} />
      <Route path='/keywords' render={() => <Keywords show={props.loading || props.searchComplete} />} />
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    searchComplete: state.searchComplete,
    loading: state.loading
  }
}



export default connect(mapStateToProps)(Layout);
