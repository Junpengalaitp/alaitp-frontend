import React from 'react';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Badge from "react-bootstrap/Badge";

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
};

const HighlightKeyword = props => {
  let badgeColor = categoryColorMap[props.category];
  if (badgeColor === undefined) {
    badgeColor = "dark"
  }
  return (
    <OverlayTrigger
      key={props.startIdx}
      placement={"top"}
      overlay={
        <Tooltip id={'tooltip-top'}>
          <strong>{props.keyword}</strong>.
        </Tooltip>
      }
    >
      <Badge variant={badgeColor} key={props.startIdx}>
        {props.jobDescriptionText.substring(props.startIdx, props.endIdx)}
      </Badge>
      {/*<MyVerticallyCenteredModal*/}
      {/*  show={this.state.modalShow}*/}
      {/*  onHide={() => this.setState({modalShow: false})}*/}
      {/*  keyword={this.props.jobDescriptionText.substring(keywordIndices[i][0], keywordIndices[i][1])} />*/}
    </OverlayTrigger>
  );
}

export default HighlightKeyword;