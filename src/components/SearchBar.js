import React, { useState } from 'react'

const SearchBar = props => {

  const [searchInput, setSearchInput] = useState('')

  const handleSubmit = event => {
    console.log('search input: ')
    event.preventDefault()
    props.startSearch()
    // props.searching(searchInput)
  }

  const inputChangedHandler = (event) => {
    // setSearchInput(event.target.value)
}

  return (
    <div>
      <div className="container mt-5">
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <h1 className="mb-5">Search For Most Wanted Technical Skills!</h1>
        </div>
        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="col-12 col-md-9 mb-2 mb-md-0">
                <input onChange={(event) => inputChangedHandler(event)} type="text" className="form-control form-control-lg" placeholder="Area You Want to Work" />
              </div>
              <div className="col-12 col-md-3">
                <button type='submit' className="btn btn-block btn-lg btn-primary">See Result</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SearchBar
