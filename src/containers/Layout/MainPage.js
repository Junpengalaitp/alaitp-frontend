import React from 'react'
import SearchBar from '../../components/Search/SearchBar'
import {Intro} from './Intro'

export const MainPage = () => {
  return (
    <div>
      <main className="main-page">
        <div className="main-page--search">
          <h1 className="main-page--search_heading">Search For Most Wanted Technical Skills!</h1>
          <SearchBar />
          <Intro />
        </div>
      </main>    
    </div>
  )
}
