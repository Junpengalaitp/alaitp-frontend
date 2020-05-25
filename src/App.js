import React from 'react'
import './App.scss'

import Layout from './containers/Layout/Layout'
import WebSocket from './components/WebSocket'

const App = () => {
  return (
    <div>
      <Layout />
      <WebSocket />
    </div>
  )
}

export default App;
