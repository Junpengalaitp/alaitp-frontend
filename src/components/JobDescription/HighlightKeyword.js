import React, {useState} from 'react';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Badge from "react-bootstrap/Badge";
import {MyVerticallyCenteredModal} from "../UI/Modal";

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
  const [modalShow, setModalShow] = useState(false);

  let badgeColor = categoryColorMap[props.category];
  if (badgeColor === undefined) {
    badgeColor = "dark"
  }

  const handleClick = () => {
    if (!modalShow) {
      setModalShow(true);
    }
  };
  return (
    <React.Fragment>
      <OverlayTrigger
        key={props.key}
        placement={"top"}
        overlay={
          <Tooltip id={'tooltip-top'} onClick={() => handleClick()}>
            <p>word category: <strong>{props.category}</strong></p>
            <strong>click to see correlated words</strong>.
          </Tooltip>
        }
      >
        <Badge variant={badgeColor} key={props.key} onClick={() => handleClick()}>
          {props.keyword}
        </Badge>
      </OverlayTrigger>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        keyword={props.keyword} />
    </React.Fragment>
  );
};

export default HighlightKeyword;