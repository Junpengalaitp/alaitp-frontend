import React from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'react-bootstrap'
import { searchCoCoOccurrence } from '../../../store/actions/coOccurrence'
import { Dropdown } from 'react-bootstrap';
import { CustomToggle, CustomMenu } from '../CoOccurredWord/CoOccurredWords'
import * as actionTypes from '../../../store/actions/actionTypes';
import Spinner from '../../UI/Spinner/Spinner';


const KeywordListItem = props => {

  if (props.keywords === null) return null
  const keywordInCategory = props.keywords[props.keywordType]
  
  if (keywordInCategory === null || keywordInCategory === undefined) return null

  const getCoOccurredWordsByCategory = (keyword) => {
    props.onCoOccurrenceSearchStart()
    props.onCoOccurrenceSearchSuccess(keyword)
    console.log("search co-occurred words")
  }

  let coOccurredWordDropdown = <Spinner />
  if (!props.loading) {
    const coOccurredWordList = Object.keys(props.coOccurredWords)
    coOccurredWordList.sort((a, b) => props.coOccurredWords[a].count - props.coOccurredWords[b].count);
      coOccurredWordDropdown = coOccurredWordList.map((word, index) => (
      <Dropdown.Item key={index} eventKey={index}>{word}</Dropdown.Item>
    ))
  }

  const keywordListItem = keywordInCategory.slice(0, 8).map((keyword, index) => (
      <ListGroup.Item variant="light" key={index} action onClick={() => getCoOccurredWordsByCategory(keyword)}>
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            {keyword}
          </Dropdown.Toggle>
          <Dropdown.Menu as={CustomMenu}>
            {coOccurredWordDropdown}
          </Dropdown.Menu>
        </Dropdown>
      </ListGroup.Item>
  ))
  return keywordListItem;
}

const mapStateToProps = state => {
  return {
    keywords: state.keyword.orderedKeywordByCategory,
    loading: state.coOccurrence.loading,
    coOccurredWords: state.coOccurrence.coOccurredWords
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCoOccurrenceSearchStart: () => dispatch({ type: actionTypes.COOCCURRENCE_SEARCH_START }),
    onCoOccurrenceSearchSuccess: searchInput => dispatch(searchCoCoOccurrence(searchInput))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeywordListItem);

