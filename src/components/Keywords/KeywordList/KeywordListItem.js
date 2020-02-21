import React from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'react-bootstrap'

const KeywordListItem = props => {
  if (props.keywords === null) return null
  const keywordInCategory = props.keywords[props.keywordType]
  if (keywordInCategory === null || keywordInCategory === undefined) return null
  
  // sort keywords by its count, DESC
  keywordInCategory.sort((a, b) => {
    return keywordInCategory[b] - keywordInCategory[a]
  })

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

