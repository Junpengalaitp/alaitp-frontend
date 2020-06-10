import React from 'react'
import {connect} from 'react-redux'
import {CoOccurrencePopover} from '../CoOccurredWord/CoOccurrencePopover';
import {OverlayTrigger} from 'react-bootstrap';
import {stringLengthToFontSize} from '../../../shared/utility';


const KeywordListItem = props => {
  if (props.keywords === null) return null;
  const keywordInCategory = props.keywords[props.keywordType];

  if (keywordInCategory === null || keywordInCategory === undefined) return null;
  return keywordInCategory.slice(0, 8).map((keyword, index) => (
    <li className="list-group--item list-group-item list-group-item-light" key={index} action="true">
      <OverlayTrigger trigger="click" placement="right" overlay={<CoOccurrencePopover>{keyword}</CoOccurrencePopover>}
                      rootClose={true}>
        <p className="list-group--item--text"
           style={{"fontSize": stringLengthToFontSize(keyword) + "rem"}}>{keyword}</p>
      </OverlayTrigger>
    </li>
  ))
};

const mapStateToProps = state => {
  return {
    keywords: state.keyword.orderedKeywordByCategory,
  }
};

export default connect(mapStateToProps, null)(KeywordListItem);

