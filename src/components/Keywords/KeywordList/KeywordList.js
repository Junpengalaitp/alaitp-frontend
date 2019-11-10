import React from 'react'
import KeywordListItem from './KeywordListItem';

export const KeywordList = props => {
  return (
    <div className="col-sm-2 col align-self-start">
      <div className="list-group flex-md-row text-center list-unstyled list-group-flush">
        <a href='/' className={'list-group-item ' + (props.keywordListCSS)}>{props.title}</a>
        <KeywordListItem keywordType={props.keywordType} />
      </div>
    </div>
  )
}
