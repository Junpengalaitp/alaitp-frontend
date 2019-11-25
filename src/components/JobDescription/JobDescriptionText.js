import React from 'react'
import { connect } from 'react-redux';

const JobDescriptionText = props => {
  console.log('keyword indices are ' +  JSON.stringify(props.keywordIndex))
  let jobDescriptionText = 'Hello World'
  if (props.keywordSearchComplete) {
    jobDescriptionText = props.jobDescriptionText
  }
  return <React.Fragment>{jobDescriptionText}</React.Fragment>
}

const mapStateToProps = state => {
  return {
    keywordSearchComplete: state.keyword.searchComplete,
    keywordIndex: state.keyword.jobKeywordIndex
  };
}

export default connect(mapStateToProps)(JobDescriptionText)
