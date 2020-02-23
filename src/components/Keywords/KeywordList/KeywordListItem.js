import React from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'react-bootstrap'
import { searchCoCoOccurrence } from '../../../store/actions/coOccurrence'

const KeywordListItem = props => {
  if (props.keywords === null) return null
  const keywordInCategory = props.keywords[props.keywordType]
  
  if (keywordInCategory === null || keywordInCategory === undefined) return null

  const keywordListItem = keywordInCategory.slice(0, 6).map((keyword, index) => (
      <ListGroup.Item variant="light" key={index} action onClick={() => props.onCoOccurrenceSearchStart(keyword)}>
        {keyword}
      </ListGroup.Item>
  ))
  return keywordListItem;
}

const mapStateToProps = state => {
  return {
    keywords: state.keyword.orderedKeywordByCategory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCoOccurrenceSearchStart: searchInput => dispatch(searchCoCoOccurrence(searchInput))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeywordListItem);

