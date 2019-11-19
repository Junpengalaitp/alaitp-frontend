import React from 'react'
import { connect } from 'react-redux'

const KeywordListItem = props => {
  console.log("keyword List Item: " + props.keywords)
  if (props.keywords === null) return null
  const keywordListItem = props.keywords[props.keywordType].slice(0, 6).map((keyword, index) => (
      <a href='/' className="list-group-item list-group-item-primary" key={index}>{keyword}</a>
  ))
  return keywordListItem;
}

const mapStateToProps = state => {
  return {
    keywords: state.keyword.keywords
  };
};


export default connect(mapStateToProps)(KeywordListItem);

