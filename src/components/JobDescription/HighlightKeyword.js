import React, {useState} from 'react';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Badge from "react-bootstrap/Badge";
import {MyVerticallyCenteredModal} from "../UI/Modal";
import {categoryColorMap} from "../../constant/constant";

/**
 * Highlighted jon keyword in job description text
 */
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
        key={props.startIdx}
        placement={"top"}
        overlay={
          <Tooltip id={'tooltip-top'} onClick={() => handleClick()}>
            <p>word category: <strong>{props.category}</strong></p>
            <strong>click to see correlated words</strong>.
          </Tooltip>
        }
      >
        <Badge variant={badgeColor} key={props.startIdx} onClick={() => handleClick()}>
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