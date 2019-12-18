import React from "react";
import { connect } from "react-redux";
import { Badge, OverlayTrigger, Tooltip } from "react-bootstrap";

const JobDescriptionText = props => {
  // console.log('keyword indices are ' +  JSON.stringify(props.keywordIndex))
  let jobDescriptionText = props.jobDescriptionText;
  if (props.keywordSearchComplete) {
    const jobId = props.jobId;
    const keywordObjects = {};
    for (let [key, value] of Object.entries(props.keywordIndex[jobId])) {
      for (let [key2, value2] of Object.entries(value)) {
        // const obj = {}
        // obj[key2] = [value2, key]
        keywordObjects[key2] = [value2, key]
      }
    }
    
    const keywordIndices = [];
    for (const keywordObject of Object.keys(keywordObjects)) {
      keywordIndices.push([keywordObject.split(",")[0], keywordObject.split(",")[1], keywordObjects[keywordObject][1]])
    }

    keywordIndices.sort((a, b) => a[0] - b[0]);

    if (keywordIndices[0] === null || keywordIndices[0] === undefined)
      return <React.Fragment>{jobDescriptionText}</React.Fragment>;
    // init with the start to first keyword
    let jobTextWithKeyword = [
      props.jobDescriptionText.substring(0, keywordIndices[0][0])
    ];
    const badgeColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark']
    for (let i = 0; i < keywordIndices.length - 1; i++) {
      if (keywordIndices[i][3] !== null) {
        const badgeColor = badgeColors[Math.floor(Math.random() * badgeColors.length)];

        const keywordBadge = (
          <OverlayTrigger
            key={keywordIndices[i][0]}
            placement={"top"}
            overlay={
              <Tooltip id={'tooltip-top'}>
                <strong>{keywordIndices[i][2]}</strong>.
              </Tooltip>
            }
          >
            <Badge variant={badgeColor} key={keywordIndices[i][0]}>
              {props.jobDescriptionText.substring(
                keywordIndices[i][0],
                keywordIndices[i][1]
              )}
            </Badge>
          </OverlayTrigger>
          
        );
        const textBetweenBadges = props.jobDescriptionText.substring(
          keywordIndices[i][1],
          keywordIndices[i + 1][0]
        );
        jobTextWithKeyword.push(keywordBadge);
        jobTextWithKeyword.push(textBetweenBadges);
      }
    }
    // add text after the last
    jobTextWithKeyword.push(
      props.jobDescriptionText.substring(
        keywordIndices[keywordIndices.length - 1][0]
      )
    );
    jobDescriptionText = <p>{jobTextWithKeyword}</p>;
  }
  return <React.Fragment>{jobDescriptionText}</React.Fragment>;
};

const mapStateToProps = state => {
  return {
    keywordSearchComplete: state.keyword.searchComplete,
    keywordIndex: state.keyword.jobKeywordIndex
  };
};

export default connect(mapStateToProps)(JobDescriptionText);
