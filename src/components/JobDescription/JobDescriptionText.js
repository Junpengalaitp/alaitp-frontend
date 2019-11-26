import React from 'react'
import { connect } from 'react-redux';
import { Badge } from 'react-bootstrap'

const JobDescriptionText = props => {
  // console.log('keyword indices are ' +  JSON.stringify(props.keywordIndex))
  let jobDescriptionText = props.jobDescriptionText
  if (props.keywordSearchComplete) {
    const jobId = props.jobId
    const keywordObjects = Object.values(props.keywordIndex[jobId])
    const keywordIndices = []
    for (const keywordObject of keywordObjects) {
      const startAndEndIndices = Object.keys(keywordObject)
      for (const indices of startAndEndIndices) {
        keywordIndices.push([indices.split(',')[0], indices.split(',')[1], keywordObject[startAndEndIndices]])
      }
    }

    keywordIndices.sort((a, b) => (a[0] - b[0]))

    console.log(keywordIndices)
    // init with the start to first keyword
    let jobTextWithKeyword = [props.jobDescriptionText.substring(0, keywordIndices[0][0])]
    for (let i = 0; i < keywordIndices.length - 1; i++) {
      if (keywordIndices[i][3] !== null) {
        const keywordBadge = <Badge variant='success'>{props.jobDescriptionText.substring(keywordIndices[i][0], keywordIndices[i][1])}</Badge>
        const textBetweenBadges = props.jobDescriptionText.substring(keywordIndices[i][1], keywordIndices[i+1][0])
        jobTextWithKeyword.push(keywordBadge)
        jobTextWithKeyword.push(textBetweenBadges)
      }
    }
    jobTextWithKeyword.push(props.jobDescriptionText.substring(keywordIndices[keywordIndices.length-1][1]))
    jobDescriptionText = <p>{jobTextWithKeyword}</p>
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
