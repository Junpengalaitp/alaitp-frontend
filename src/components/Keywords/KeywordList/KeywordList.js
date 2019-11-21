import React from 'react'
import KeywordListItem from './KeywordListItem';
import { ListGroup } from 'react-bootstrap';

const KeywordList = props => {
  return (
    <div className="col-sm-2 col align-self-start">
      <ListGroup horizontal>
        <a href='/' className={'list-group-item ' + (props.keywordListCSS)}>{props.title}</a>
        <KeywordListItem keywordType={props.keywordType} />
      </ListGroup>
    </div>
  )
}

export default KeywordList