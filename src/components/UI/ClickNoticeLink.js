import React from 'react';
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

/**
 * on search result page, show a click notice for personal page
 */
const ClickNoticeLink = props => {
  let link = <p>About Me</p>;
  if (props.show) {
    link =
      <OverlayTrigger
        defaultShow={true}
        trigger={"focus"}
        placement={"top"}
        overlay={
          <Tooltip id={'tooltip-top'}>
            <h6><strong>click here to know me!</strong></h6>
          </Tooltip>
        }
      >
        <p className={"text-primary"}>About Me</p>
      </OverlayTrigger>
  }
  return link
}

export default ClickNoticeLink;