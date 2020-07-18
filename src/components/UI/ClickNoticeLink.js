import React from 'react';
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {i18nText} from "../../constant/i18nText";
import {connect} from "react-redux";

/**
 * on search result page, show a click notice for personal page
 */
const ClickNoticeLink = props => {
  let link = <p>{props.text}</p>;
  if (props.show) {
    link =
      <OverlayTrigger
        defaultShow={true}
        trigger={"focus"}
        placement={"top"}
        overlay={
          <Tooltip id={'tooltip-top'}>
            <h6><strong>{i18nText("clickNotice", props.language)}</strong></h6>
          </Tooltip>
        }
      >
        <p className={"text-primary"}>{props.text}</p>
      </OverlayTrigger>
  }
  return link
}

const mapStateToProps = state => {
  return {
    language: state.i18n.language
  }
};

export default connect(mapStateToProps)(ClickNoticeLink);