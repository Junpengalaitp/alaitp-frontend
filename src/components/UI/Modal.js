import CoOccurredWords from "../Keywords/CoOccurredWord/CoOccurredWords";
import React from "react";
import {Button, Modal} from "react-bootstrap";
import {connect} from "react-redux";
import {i18nText} from "../../constant/i18nText";

/**
 * bootstrap modal, contains CoOccurredWords
 */
const MyVerticallyCenteredModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {i18nText("modelHeadingLeft", props.language)}
          <strong>{props.keyword}</strong> {i18nText("modelHeadingRight", props.language)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CoOccurredWords keyword={props.keyword}/>
      </Modal.Body>
      <Modal.Footer>
        <Button className="modalButton" onClick={props.onHide}>{i18nText("modalButton", props.language)}</Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    language: state.i18n.language
  }
};

export default connect(mapStateToProps)(MyVerticallyCenteredModal)