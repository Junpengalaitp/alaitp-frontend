import React, { Component } from 'react'
import { Fragment } from 'react'
import { Dropdown } from 'react-bootstrap'
import Spinner from './../../UI/Spinner/Spinner'
import { connect } from 'react-redux'
import { searchCoCoOccurrence } from '../../../store/actions/coOccurrence'
import Axios from 'axios'

class CoOccurredWordDropdown extends Component {

  state = {
    coOccurredWords: null
  }

  componentDidMount() {
    const word = "java"
    const count = 10
    const categories = "all"
    Axios.get(`http://127.0.0.1:8888/co_occurrence_matrix/most-correlated-words/${word}/${count}/${categories}`)
    .then(res => {
      console.log("componentDidMount: ", res)
    });
  }

  render() {
    let coOccurredWordDropdown = <Spinner />
    let wordByCategory = {}
    if (this.props.search && Object.keys(wordByCategory).length === 0) {
      const coOccurredWordList = Object.keys(this.props.coOccurredWords)
      coOccurredWordList.sort((a, b) => this.props.coOccurredWords[b].count - this.props.coOccurredWords[a].count);
        const coOccurredWordDropdownItems = coOccurredWordList.map((word, index) => (
        <Dropdown.Item key={index} eventKey={index}>{word}</Dropdown.Item>
      ))
      for (let [key, value] of Object.entries(this.props.coOccurredWords)) {
        if (!(value.category in wordByCategory)) {
          wordByCategory[value.category] = [key]
        } else {
          wordByCategory[value.category].push(key)
        }
      }
      console.log("wordByCategory: ", wordByCategory)
      coOccurredWordDropdown =
        <Fragment>
          {/* <ButtonToolbar>
            {['up', 'down', 'left', 'right'].map(direction => (
              <SplitButton
                drop={direction}
                variant="secondary"
                title={`Drop ${direction}`}
                id={`dropdown-button-drop-${direction}`}
                key={direction}
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </SplitButton>
            ))}
          </ButtonToolbar> */}
        {coOccurredWordDropdownItems}
        </Fragment>
    }
    return coOccurredWordDropdown
  }
}

export default CoOccurredWordDropdown