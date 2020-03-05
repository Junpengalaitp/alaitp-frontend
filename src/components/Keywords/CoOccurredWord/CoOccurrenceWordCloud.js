import React, { Component } from 'react'
import { TagCloud } from 'react-tagcloud'
import Spinner from './../../UI/Spinner/Spinner'
import { Container } from 'react-bootstrap';

class CoOccurrenceWordCloud extends Component {
  render() {
    let CoOccurrenceWordCloud = <Spinner />
    if (this.props.coOccurredWords !== null) {
      console.log("coOccurredWords of: ", this.props.keyword, this.props.coOccurredWords)
      const cloudValues = []
      for (let [key, value] of Object.entries(this.props.coOccurredWords)) {
        cloudValues.push({value: key, count: value.count})
      }
      CoOccurrenceWordCloud = (
        <TagCloud
          minSize={12}
          maxSize={35}
          tags={cloudValues}
          style={{ width: 250 }}
        />
      )
    }
  return <Container>{CoOccurrenceWordCloud}</Container> 
  }
}

export default CoOccurrenceWordCloud