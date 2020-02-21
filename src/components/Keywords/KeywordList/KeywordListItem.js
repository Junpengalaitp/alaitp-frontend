import React from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'react-bootstrap'

const KeywordListItem = props => {
  if (props.keywords === null) return null
  let keywordInCategory = props.keywords[props.keywordType]
  if (keywordInCategory === null || keywordInCategory === undefined) return null
  
  const keywordFreq = {}
  for (const keyword of keywordInCategory) {
    if (!keywordInCategory.hasOwnProperty) {
      keywordFreq[keyword] = 1
    } else {
      keywordFreq[keyword]++
    }
  }
  keywordInCategory = [...new Set(keywordInCategory)]
  // sort keywords by its count, DESC
  keywordInCategory.sort((a, b) => {
    return keywordFreq[b] - keywordFreq[a]
  })

  console.log("keywordInCategory")
  console.log(keywordInCategory)
  const keywordListItem = keywordInCategory.slice(0, 6).map((keyword, index) => (
      <ListGroup.Item href='/' variant="light" key={index}>{keyword}</ListGroup.Item>
  ))
  return keywordListItem;
}

const mapStateToProps = state => {
  return {
    keywords: state.keyword.keywords
  };
};

export default connect(mapStateToProps)(KeywordListItem);

