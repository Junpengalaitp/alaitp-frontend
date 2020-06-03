import React from "react"
import { connect } from "react-redux"
import { Badge, OverlayTrigger, Tooltip } from "react-bootstrap"

/**
 * props:
 * jobDescriptionText: pain text at beginning, if keyword has been analysed, update the keyword with high lighted keywords
 * jobId
 * opened: do not render keywords if the text hasn't been opened
 */
class JobDescriptionText extends React.Component {
  render() {
    let jobDescriptionText = this.props.jobDescriptionText
    if (!this.props.opened) {
      return <React.Fragment>{jobDescriptionText}</React.Fragment>
    }

    const jobId = this.props.jobId
    const keywordIndices = []
    let keywordList
    try {
      keywordList = this.props.keywordIndex[jobId]
      for (const keywordObj of keywordList) {
        keywordIndices.push([keywordObj.startIdx, keywordObj.endIdx, keywordObj.keyword, keywordObj.category])
      }
    } catch (error) {
      console.log("error, job id: ", jobId, "keyword list: ", keywordList, error)
      return <React.Fragment>{jobDescriptionText}</React.Fragment>
    }
    
    // sort the keyword indices so it can break and combine job text with keywords in order
    keywordIndices.sort((a, b) => a[0] - b[0]);

    if (keywordIndices[0] === null || keywordIndices[0] === undefined) // no keywords
      return <React.Fragment>{jobDescriptionText}</React.Fragment>
    
      // init with the start to first keyword
    let jobTextWithKeywordsArray = [this.props.jobDescriptionText.substring(0, keywordIndices[0][0])]
    const categoryColorMap = {
      "PROGRAMMING_LANGUAGE": "primary",
      "OTHER_LANGUAGE": "primary",
      "LIBRARY": "info",
      "FRAMEWORK": "info",
      "DATA_STORAGE": "warning",
      "DATA_TRANSMISSION": "warning",
      "PLATFORM": "success",
      "SERVER": "success",
      "OS": "success",
      "APPROACH": "secondary",
      "SOFTWARE_ENGINEERING": "secondary",
      "POSITION": "danger",
      "DIVISION": "danger",
      "WORK_EXPERIENCE": "danger"
    }
    for (let i = 0; i < keywordIndices.length - 1; i++) {
      if (keywordIndices[i][3] !== null) {
        
        let badgeColor = categoryColorMap[keywordIndices[i][3]]
        if (badgeColor === undefined) {
          badgeColor = "dark"
        }
        const keywordBadge = (
          <OverlayTrigger
            key={keywordIndices[i][0]}
            placement={"top"}
            overlay={
              <Tooltip id={'tooltip-top'}>
                <strong>{keywordIndices[i][3]}</strong>.
              </Tooltip>
            }
          >
            <Badge variant={badgeColor} key={keywordIndices[i][0]}>
              {this.props.jobDescriptionText.substring(
                keywordIndices[i][0],
                keywordIndices[i][1]
              )}
            </Badge>
          </OverlayTrigger>
          
        );
        const textBetweenBadges = this.props.jobDescriptionText.substring(
          keywordIndices[i][1],
          keywordIndices[i + 1][0]
        )
        jobTextWithKeywordsArray.push(keywordBadge);
        jobTextWithKeywordsArray.push(textBetweenBadges);
      }
    }
    // add text after the last
    jobTextWithKeywordsArray.push(
      this.props.jobDescriptionText.substring(
        keywordIndices[keywordIndices.length - 1][0]
      )
    )
    jobDescriptionText = <p>{jobTextWithKeywordsArray}</p>
    return <React.Fragment>{jobDescriptionText}</React.Fragment>
  }
}

const mapStateToProps = state => {
  return {
    keywordSearchComplete: state.keyword.searchComplete,
    keywordIndex: state.jobKeyword.keywordIdxByJob
  }
}

export default connect(mapStateToProps)(JobDescriptionText)
