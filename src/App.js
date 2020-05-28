import React from 'react'
import './App.scss'

import Layout from './containers/Layout/Layout'
import WebSocket from './components/WebSocket'
import LineMarkerEcharts from './components/ReactEcharts';

const App = () => {
  return (
    <div>
      <Layout />
      <WebSocket />
      <LineMarkerEcharts/>
    </div>
  )
}

export default App;
