import React, { Fragment } from "react";
import { connect } from 'react-redux';
import SearchBar from "./../../components/SearchBar";
import Keywords from "./../../components/Keywords"

const Layout = props => {
  
  return (
    <Fragment>
      <SearchBar />
      <Keywords show={props.loading || props.searchComplete} />
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
