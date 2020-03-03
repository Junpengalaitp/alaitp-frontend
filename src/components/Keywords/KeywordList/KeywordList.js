import React from 'react'
import KeywordListItem from './KeywordListItem';
import { ListGroup } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class KeywordList extends React.Component {

  render() {
    return (
      <Col sm={2} className="align-self-start">
        <ListGroup horizontal>
          <a href='#' className={'list-group-item ' + (this.props.keywordListCSS)}>{this.props.categoryTitle}</a>
          <KeywordListItem keywordType={this.props.keywordType}/>
        </ListGroup>
      </Col>
    )
  }

}

export default KeywordList