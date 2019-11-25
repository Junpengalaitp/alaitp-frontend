import React from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'react-bootstrap'

const KeywordListItem = props => {
  if (props.keywords === null) return null
  const keywordJson = props.keywords[props.keywordType]
  if (keywordJson === null || keywordJson === undefined) return null
  const keywords = Object.values(keywordJson)
  // sort keywords by its count, DESC
  // keywords.sort((a, b) => {
  //   return keywordJson[b] - keywordJson[a]
  // })

  const keywordListItem = keywords.slice(0, 6).map((keyword, index) => (
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

