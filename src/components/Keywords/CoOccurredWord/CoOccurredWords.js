import React, { Fragment } from 'react'
import CoOccurrenceWordCloud from './CoOccurrenceWordCloud'
import Axios from 'axios'
import { serverUrl } from './../../../config'

class CoOccurredWords extends React.Component {
  state = {
    category: "all",
    count: 10,
    coOccurredWords: null
  }

  requestCoOccurrence() {
    const word = this.props.keyword.replace('#', '%23')
    console.log("requesting with: ", word, this.state.category)
    Axios.get(`${serverUrl}/co_occurrence_matrix/most-correlated-words/${word}/${this.state.count}/${this.state.category}`)
    .then(res => {
      // console.log(res)
      this.setState({coOccurredWords: res.data.words})
    })
  }

  componentDidMount() {
    this.requestCoOccurrence()
  }

  selectCategory = () => {
    console.log("state before: ", this.state.category)
    this.setState({category: "pl"})
    console.log("state after: ", this.state.category)
    this.requestCoOccurrence()
  }

  render() {
    return (
      <Fragment>
        {/* <WordCategories selectCategory={() => this.selectCategory()}/> */}
        <CoOccurrenceWordCloud 
          keyword={this.props.keyword} 
          coOccurredWords={this.state.coOccurredWords} 
          selectCategory={() => this.selectCategory()} />
      </Fragment>
    )
  }
}

export default CoOccurredWords