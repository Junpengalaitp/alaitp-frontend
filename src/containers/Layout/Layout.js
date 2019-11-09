import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { Route } from 'react-router'
import SearchBar from "./../../components/SearchBar";
import Keywords from "./../../components/Keywords"
import { Navbar } from '../../components/UI/Navbar';

const Layout = props => {

  
  return (
    <Fragment>
      <Route path='/' exact component={SearchBar} />
      <Route path='/keywords' component={Navbar} />
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
