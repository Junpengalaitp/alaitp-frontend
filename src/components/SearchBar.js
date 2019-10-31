import React from 'react'

const SearchBar = () => {
  return (
    <div mt-5>
      <div class="container mt-5">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <h1 class="mb-5">Search For Most Wanted Technical Skills!</h1>
        </div>
        <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <form>
            <div class="form-row">
              <div class="col-12 col-md-9 mb-2 mb-md-0">
                <input type="email" class="form-control form-control-lg" placeholder="Area You Want to Work" />
              </div>
              <div class="col-12 col-md-3">
                <button type="submit" class="btn btn-block btn-lg btn-primary">See Result</button>
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
