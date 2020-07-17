import React, {useState} from 'react';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Badge from "react-bootstrap/Badge";
import MyVerticallyCenteredModal from "../UI/Modal";
import {categoryColorMap} from "../../constant/constant";
import {i18nText} from "../../containers/i18n/i18nText";
import {connect} from "react-redux";

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
          <Tooltip id={'tooltip-top'}>
            <p>{i18nText("wordCategory", props.language)} <strong>{props.category}</strong></p>
            <strong>{i18nText("keywordOverlay", props.language)}</strong>.
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
        keyword={props.keyword}/>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    language: state.i18n.language
  }
};

export default connect(mapStateToProps)(HighlightKeyword);