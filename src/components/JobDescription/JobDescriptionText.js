import React from "react"
import {connect} from "react-redux"
import HighlightKeyword from "./HighlightKeyword";

/**
 * props:
 * jobDescriptionText(str): pain text at beginning, if receives analysed keywords, update the job text with highlighted keywords.
 * jobId(str): the job id.
 * opened(bool): do not render keywords if the text hasn't been opened(mainly for performance improvement).
 */
const JobDescriptionText = props => {
  let jobDescriptionText = props.jobDescriptionText;

  if (!props.opened) {
    return <React.Fragment>{jobDescriptionText}</React.Fragment>
  }

  const jobId = props.jobId;
  // store all keyword objects
  const keywordIndices = [];
  const keywordList = props.keywordIndex[jobId];
  if (keywordList !== undefined && keywordList !== null) {
    for (const keywordObj of keywordList) {
      keywordIndices.push([keywordObj.startIdx, keywordObj.endIdx, keywordObj.keyword, keywordObj.category])
    }
  } else {
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
  jobTextWithKeywordsArray.push(props.jobDescriptionText.substring(0, keywordIndices[0][0]));
  // add the rest keywords and plain text
  for (let i = 0; i < keywordIndices.length - 1; i++) {
    const startIdx = keywordIndices[i][0];
    const endIdx = keywordIndices[i][1];
    const keyword = keywordIndices[i][2];
    const category = keywordIndices[i][3];
    const nextStartIdx = keywordIndices[i + 1][0];

    const keywordBadge = <HighlightKeyword keyword={keyword} category={category} key={startIdx} />;
    const textBetweenBadges = props.jobDescriptionText.substring(endIdx, nextStartIdx);
    jobTextWithKeywordsArray.push(keywordBadge);
    jobTextWithKeywordsArray.push(textBetweenBadges);
  }
  // add the plain text after the last keyword
  jobTextWithKeywordsArray.push(
    jobDescriptionText.substring(keywordIndices[keywordIndices.length - 1][0]
    )
  );
  jobDescriptionText = <p>{jobTextWithKeywordsArray}</p>;
  return <React.Fragment>
          {jobDescriptionText}
         </React.Fragment>
};

const mapStateToProps = state => {
  return {
    keywordIndex: state.jobKeyword.keywordIdxByJob
  }
};

export default connect(mapStateToProps)(JobDescriptionText)
