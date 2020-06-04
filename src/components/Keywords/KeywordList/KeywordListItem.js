import React from 'react'
import { connect } from 'react-redux'
import { searchCoCoOccurrence } from '../../../store/actions/coOccurrence'
import * as actionTypes from '../../../store/actions/actionTypes'
import { CoOccurrencePopover } from '../CoOccurredWord/CoOccurrencePopover';
import { OverlayTrigger } from 'react-bootstrap';
import { stringLengthToFontSize } from '../../../shared/utility';


class KeywordListItem extends React.Component {

  // state = {
  //   modalShow: false
  // }

  render() {
    if (this.props.keywords === null) return null
    const keywordInCategory = this.props.keywords[this.props.keywordType]
    
    if (keywordInCategory === null || keywordInCategory === undefined) return null
    const keywordListItem = keywordInCategory.slice(0, 8).map((keyword, index) => (
      <li className="list-group--item list-group-item list-group-item-light" key={index} action="true">
        <OverlayTrigger trigger="click" placement="right" overlay={<CoOccurrencePopover>{keyword}</CoOccurrencePopover>} rootClose={true} >
          <p className="list-group--item--text" style={{"fontSize": stringLengthToFontSize(keyword) + "rem"}}>{keyword}</p>
        </OverlayTrigger>
      </li>
    ))
    return keywordListItem
  }
}

const mapStateToProps = state => {
  return {
      keywords: state.keyword.orderedKeywordByCategory,
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onCoOccurrenceSearchStart: () => dispatch({ type: actionTypes.COOCCURRENCE_SEARCH_START }),
//     onCoOccurrenceSearchSuccess: searchInput => dispatch(searchCoCoOccurrence(searchInput))
//   }
// }

export default connect(mapStateToProps, null)(KeywordListItem);

