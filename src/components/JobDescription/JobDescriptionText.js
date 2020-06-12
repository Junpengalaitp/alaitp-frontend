import React from "react"
import {connect} from "react-redux"
import HighlightKeyword from "./HighlightKeyword";

/**
 * props:
 * jobDescriptionText: pain text at beginning, if keyword has been analysed, update the keyword with high lighted keywords
 * jobId
 * opened: do not render keywords if the text hasn't been opened
 */
const JobDescriptionText = props => {
  let jobDescriptionText = props.jobDescriptionText;

  if (!props.opened) {
    return <React.Fragment>{jobDescriptionText}</React.Fragment>
  }

  const jobId = props.jobId;
  // store all keyword objects 
  const keywordIndices = [];
  let keywordList;
  try {
    keywordList = props.keywordIndex[jobId];
    for (const keywordObj of keywordList) {
      keywordIndices.push([keywordObj.startIdx, keywordObj.endIdx, keywordObj.keyword, keywordObj.category])
    }
  } catch (error) {
    console.log("error, job id: ", jobId, "keyword list: ", keywordList, error);
    return <React.Fragment>{jobDescriptionText}</React.Fragment>
  }

  // sort the keyword by start index so it can break and combine job text with keywords in order
  keywordIndices.sort((a, b) => a[0] - b[0]);

  if (keywordIndices.length === 0) { // no keywords, return plain text
    return <React.Fragment>{jobDescriptionText}</React.Fragment>;
  }

  // store combined job text (plain text + highlighted words)
  const jobTextWithKeywordsArray = [];
  // the first element in array is the plain text before the first keyword
  jobTextWithKeywordsArray.push(props.jobDescriptionText.substring(0, keywordIndices[0][0]))
  // add the rest
  for (let i = 0; i < keywordIndices.length - 1; i++) {
    const startIdx = keywordIndices[i][0];
    const endIdx = keywordIndices[i][1]
    const keyword = keywordIndices[i][2];
    const category = keywordIndices[i][3];
    const nextStartIdx = keywordIndices[i + 1][0];

    const keywordBadge = <HighlightKeyword startIdx={startIdx} endIdx={endIdx} keyword={keyword} category={category} jobDescriptionText={jobDescriptionText} key={startIdx}/>
    const textBetweenBadges = props.jobDescriptionText.substring(endIdx, nextStartIdx);
    jobTextWithKeywordsArray.push(keywordBadge);
    jobTextWithKeywordsArray.push(textBetweenBadges);
  }
  // add text after the last
  jobTextWithKeywordsArray.push(
    jobDescriptionText.substring(keywordIndices[keywordIndices.length - 1][0]
    )
  );
  jobDescriptionText = <p>{jobTextWithKeywordsArray}</p>;
  return <React.Fragment>
          {jobDescriptionText}
        </React.Fragment>
}

const mapStateToProps = state => {
  return {
    keywordSearchComplete: state.keyword.searchComplete,
    keywordIndex: state.jobKeyword.keywordIdxByJob
  }
};

export default connect(mapStateToProps)(JobDescriptionText)
