import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import Spinner from './../../UI/Spinner/Spinner'
import Axios from 'axios'
import { serverUrl } from '../../../config'

class CoOccurredWordDropdown extends Component {

  state = {
    coOccurredWords: null
  }

  componentDidMount() {
    const word = this.props.keyword
    const count = 10
    const categories = "all"
    Axios.get(`https://${serverUrl}/co_occurrence_matrix/most-correlated-words/${word}/${count}/${categories}`)
    .then(res => {
      this.setState({coOccurredWords: res.data.words})
    })
  }

  render() {
    
    let coOccurredWordDropdown = <Spinner />
    let wordByCategory = {}
    if (this.state.coOccurredWords !== null) {
      const coOccurredWordList = Object.keys(this.state.coOccurredWords)
      coOccurredWordList.sort((a, b) => this.state.coOccurredWords[b].count - this.state.coOccurredWords[a].count);
        coOccurredWordDropdown = coOccurredWordList.map((word, index) => (
        <Dropdown.Item key={index} eventKey={index}>{word}</Dropdown.Item>
      ))
      for (let [key, value] of Object.entries(this.state.coOccurredWords)) {
        if (!(value.category in wordByCategory)) {
          wordByCategory[value.category] = [key]
        } else {
          wordByCategory[value.category].push(key)
        }
      }
      console.log("wordByCategory: ", wordByCategory)
    }
    return coOccurredWordDropdown
  }
}

export default CoOccurredWordDropdown