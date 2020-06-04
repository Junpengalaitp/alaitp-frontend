import React, { Fragment } from 'react'
import CoOccurrenceWordCloud from './CoOccurrenceWordCloud'
import Axios from 'axios'
import { serverUrl } from './../../../config'

// max total number of keywords in cloud
const wordNum = 30

class CoOccurredWords extends React.Component {
  state = {
    category: "all",
    coOccurredWords: []
  }

  requestCoOccurrence() {
    const word = this.props.keyword.replace('#', '%23')
    console.log("requesting with: ", word, this.state.category)
    Axios.get(`${serverUrl}/co_occurrence_matrix/most-correlated-words/${word}/${wordNum}/${this.state.category}`)
    .then(res => {
      // console.log(res)
      this.setState({coOccurredWords: res.data.words})
    })
  }

  componentDidMount() {
    this.requestCoOccurrence()
  }

  requestCategoryCoOccurrence(category) {
    const word = this.props.keyword.replace('#', '%23')
    Axios.get(`${serverUrl}/co_occurrence_matrix/most-correlated-words/${word}/${wordNum}/${category}`)
      .then(res => {
        console.log("words: ", res.data.words)
        this.setState({
          category: category,
          coOccurredWords: res.data.words,
        })
      })
  }

  render() {
    return (
      <Fragment>
        <CoOccurrenceWordCloud 
          keyword={this.props.keyword} 
          coOccurredWords={this.state.coOccurredWords} 
          selectCategory={(category) => this.requestCategoryCoOccurrence(category)} />
      </Fragment>
    )
  }
}

export default CoOccurredWords