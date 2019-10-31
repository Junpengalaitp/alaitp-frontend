import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Keywords from './components/Keywords';

const App = () => {
  return (
    <div className="App">
      <SearchBar />
      <Keywords />
    </div>
  );
}

export default App;
