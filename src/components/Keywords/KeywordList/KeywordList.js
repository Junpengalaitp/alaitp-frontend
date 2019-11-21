import React from 'react'
import KeywordListItem from './KeywordListItem';
import { ListGroup } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const KeywordList = props => {
  return (
    <Col sm={2} className="align-self-start">
      <ListGroup horizontal>
        <a href='/' className={'list-group-item ' + (props.keywordListCSS)}>{props.title}</a>
        <KeywordListItem keywordType={props.keywordType} />
      </ListGroup>
    </Col>
  )
}

export default KeywordList