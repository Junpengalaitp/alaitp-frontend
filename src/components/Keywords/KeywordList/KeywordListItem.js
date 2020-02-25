import React from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'react-bootstrap'
import { searchCoCoOccurrence } from '../../../store/actions/coOccurrence'
import { Dropdown } from 'react-bootstrap';
import { CustomToggle, CustomMenu } from '../CoOccurredWord/CoOccurredWords';

const KeywordListItem = props => {
  if (props.keywords === null) return null
  const keywordInCategory = props.keywords[props.keywordType]
  
  if (keywordInCategory === null || keywordInCategory === undefined) return null

  const keywordListItem = keywordInCategory.slice(0, 8).map((keyword, index) => (
      <ListGroup.Item variant="light" key={index} action onClick={() => props.onCoOccurrenceSearchStart(keyword)}>
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            {keyword}
          </Dropdown.Toggle>

          <Dropdown.Menu as={CustomMenu}>
            <Dropdown.Item eventKey="1">Red</Dropdown.Item>
            <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Orange
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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

