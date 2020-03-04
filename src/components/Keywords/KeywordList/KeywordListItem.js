import React from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'react-bootstrap'
import { searchCoCoOccurrence } from '../../../store/actions/coOccurrence'
import { Dropdown } from 'react-bootstrap';
import { CustomToggle, CustomMenu } from '../CoOccurredWord/CoOccurredWords'
import * as actionTypes from '../../../store/actions/actionTypes'
import CoOccurredWordDropdown from '../CoOccurredWord/CoOccurredWordDropdown';


class KeywordListItem extends React.Component {

  render() {
    if (this.props.keywords === null) return null
    const keywordInCategory = this.props.keywords[this.props.keywordType]
    
    if (keywordInCategory === null || keywordInCategory === undefined) return null

    const getCoOccurredWordsByCategory = (keyword) => {
      this.props.onCoOccurrenceSearchStart()
      this.props.onCoOccurrenceSearchSuccess(keyword)
      console.log("search co-occurred words")
    }

    const keywordListItem = keywordInCategory.slice(0, 8).map((keyword, index) => (
      <ListGroup.Item variant="light" key={index} action onClick={() => getCoOccurredWordsByCategory(keyword)}>
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            {keyword}
          </Dropdown.Toggle>
          <Dropdown.Menu as={CustomMenu}>
            <CoOccurredWordDropdown />
          </Dropdown.Menu>
        </Dropdown>
      </ListGroup.Item>
    ))
    return keywordListItem
  }
}

const mapStateToProps = state => {
    return {
      keywords: state.keyword.orderedKeywordByCategory,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCoOccurrenceSearchStart: () => dispatch({ type: actionTypes.COOCCURRENCE_SEARCH_START }),
    onCoOccurrenceSearchSuccess: searchInput => dispatch(searchCoCoOccurrence(searchInput))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeywordListItem);

