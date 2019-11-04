import React, { useState } from "react"
import { connect } from "react-redux"

import * as actionTypes from "../store/actions/actions"
import { setKeywords, searchKeywords } from './../store/actions/search'

const SearchBar = props => {
  const [searchInput, setSearchInput] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    props.onSearchStart()
    props.onSearchSuccess()
    props.onSearchEnd()
  }

  // const getKeywords = () => {
  //   // const source = props.input === null ? 'remotive' : props.input
  //   Axios.get(`http://127.0.0.1:5000/keywords/remotive`)
  //     .then(res => {
  //       console.log(res.data)
  //       setKeywords({
  //         programmingLanguage: Object.keys(res.data.PROGRAMMING_LANGUAGE),
  //         libraryOrFramework: Object.keys(res.data.LIBRARY_OR_FRAMEWORK),
  //         division: Object.keys(res.data.DIVISION),
  //         dataStorage: Object.keys(res.data.DATA_STORAGE),
  //         platform: Object.keys(res.data.PLATFORM),
  //         approach: Object.keys(res.data.APPROACH)
  //       })
  //     })
  //     .catch(err => console.log(err))
  // }

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
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Area You Want to Work"
                  />
                </div>
                <div className="col-12 col-md-3">
                  <button
                    type="submit"
                    className="btn btn-block btn-lg btn-primary"
                  >
                    See Result
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    search: state.searching,
    keywords: state.keywords
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchStart: () => dispatch({ type: actionTypes.SEARCH_START }),
    onSearchSuccess: () => dispatch(searchKeywords()),
    onSearchEnd: () => dispatch({ type: actionTypes.SEARCH_END })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
