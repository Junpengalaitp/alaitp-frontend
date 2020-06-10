import React from 'react'
import KeywordListItem from './KeywordListItem'

const KeywordList = props => {
  return (
    <ul className="list-group list-group-horizontal">
      <p className={'list-group--heading list-group-item ' + (props.keywordListCSS)}>{props.categoryTitle}</p>
      <KeywordListItem keywordType={props.keywordType}/>
    </ul>
  )
}

export default KeywordList