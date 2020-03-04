import React, { Component } from 'react'
import { Fragment } from 'react'
import { Dropdown, ButtonToolbar, SplitButton } from 'react-bootstrap'
import Spinner from './../../UI/Spinner/Spinner'
import Axios from 'axios'

class CoOccurredWordDropdown extends Component {

  state = {
    coOccurredWords: null
  }

  componentDidMount() {
    const word = this.props.keyword
    const count = 10
    const categories = "all"
    Axios.get(`http://127.0.0.1:8888/co_occurrence_matrix/most-correlated-words/${word}/${count}/${categories}`)
    .then(res => {
      this.setState({coOccurredWords: res.data.words})
    })
  }

  render() {
    const type = "radio"
    const categoryList = ['pl', 'ol', 'lb', 'fw', 'cs', 'ai', 'pt', 'ds', 'dt', 'dv', 'ps', 'we', 'os', 'sv', 'ap', 'se', 'pf', 'ge', 'sf', 'tl', 'at', 'pd', 'ql', 'of', 'tm', 'cp']
    const categoryMap = {pl: "programming language", ol: "other language", lb: "library", fw: "framework", cs: "computer science", ai: "artificial intelligence", pt: "protocol",
                         ds: "data storage", dt: "data transmission", dv: "division", ps: "position", we: "work experience", os_: "operating system", sv: "server", ap: "approach", 
                         se: "software engineering", pf: "platform", ge: "general", sf: "soft skills", tl: "tool", at: "architect", pd: "product", ql: "quality", of: "offer", tm: "team", cp: "company"}

    let coOccurredWordDropdown = <Spinner />
    let wordByCategory = {}
    if (this.state.coOccurredWords !== null) {
      const coOccurredWordList = Object.keys(this.state.coOccurredWords)
      coOccurredWordList.sort((a, b) => this.state.coOccurredWords[b].count - this.state.coOccurredWords[a].count);
        const coOccurredWordDropdownItems = coOccurredWordList.map((word, index) => (
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
      coOccurredWordDropdown =
        <Fragment>
          <ButtonToolbar>
            <SplitButton
              drop={"right"}
              variant="secondary"
              title={"select category"}
              id={`dropdown-button-drop-${"right"}`}
              key={"right"}
            >
              {categoryList.map(category => (
                <Dropdown.Item eventKey={`inline-${type}-${category}`}>{categoryMap[category]}</Dropdown.Item>
              ))}
            </SplitButton>
            
          </ButtonToolbar>
        {coOccurredWordDropdownItems}
        </Fragment>
    }
    return coOccurredWordDropdown
  }
}

export default CoOccurredWordDropdown