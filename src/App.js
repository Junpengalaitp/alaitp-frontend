import React, {useEffect} from 'react'
import './App.scss'

import Layout from './containers/Layout/Layout'
import * as actionTypes from "./store/actions/actionTypes";
import {connect} from "react-redux";

const App = props => {
  useEffect(() => {
    props.connectWebsocket();
  }, [props])

  return (
    <div>
      <Layout />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    connectWebsocket: () => dispatch({ type: actionTypes.SOCKETS_CONNECT }),
  }
};

export default connect(null, mapDispatchToProps)(App);
