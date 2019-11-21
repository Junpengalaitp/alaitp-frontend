import React from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'react-bootstrap'

const KeywordListItem = props => {
  console.log("keyword List Item: " + props.keywords)
  if (props.keywords === null) return null
  const keywordListItem = props.keywords[props.keywordType].slice(0, 6).map((keyword, index) => (
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

