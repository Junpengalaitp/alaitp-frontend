import React from 'react'
import KeywordListItem from './KeywordListItem'

class KeywordList extends React.Component {

  render() {
    return (
      <ul className="list-group list-group-horizontal" >
        <p className={'list-group--heading list-group-item ' + (this.props.keywordListCSS)}>{this.props.categoryTitle}</p>
        <KeywordListItem keywordType={this.props.keywordType}/>
      </ul>
    )
  }

}

export default KeywordList