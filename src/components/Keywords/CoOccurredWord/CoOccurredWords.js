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

  componentDidMount() {
    const word = this.props.keyword.replace('#', '%23')
    Axios.get(`${serverUrl}/co_occurrence_matrix/most-correlated-words/${word}/${this.state.count}/${this.state.category}`)
    .then(res => {
      this.setState({coOccurredWords: res.data.words})
    })
  }

  selectCategory = () => {
    this.setState({category: "pl"})
  }

  render() {
    return (
      <Fragment>
        {/* <WordCategories selectCategory={() => this.selectCategory()}/> */}
        <CoOccurrenceWordCloud keyword={this.props.keyword} coOccurredWords={this.state.coOccurredWords} />
      </Fragment>
    )
  }
}

export default CoOccurredWords