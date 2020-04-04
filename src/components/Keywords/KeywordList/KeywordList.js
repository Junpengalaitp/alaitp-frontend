import React from 'react'
import KeywordListItem from './KeywordListItem'

class KeywordList extends React.Component {

  render() {
    return (
      <div className="col-sm-2 align-self-start">
        <ul className="list-group list-group-horizontal" >
          <p className={'list-group-item ' + (this.props.keywordListCSS)}>{this.props.categoryTitle}</p>
          <KeywordListItem keywordType={this.props.keywordType}/>
        </ul>
      </div>
    )
  }

}

export default KeywordList