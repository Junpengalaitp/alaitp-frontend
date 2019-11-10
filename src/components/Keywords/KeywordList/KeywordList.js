import React from 'react'
import KeywordListItem from './KeywordListItem';

export const KeywordList = props => {
  return (
    <div className="col-sm-2">
        <div className="list-group text-center list-unstyled list-group-flush">
          <a href='/' className={'list-group-item ' + (props.keywordListCSS)}>{props.title}</a>
          <KeywordListItem keywordType={props.keywordType} />
        </div>
      </div>
  )
}
