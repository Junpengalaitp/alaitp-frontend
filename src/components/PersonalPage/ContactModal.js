import React from "react";
import {Button, Modal} from "react-bootstrap";
import {connect} from "react-redux";
import {i18nText} from "../../constant/i18nText";
import wechatQR from "./resource/image/wechatQR.jpg"
import Avatar from "./avatar";
import ContactBar from "./ContactBar";

/**
 * bootstrap modal, contains CoOccurredWords
 */
const ContactModal = props => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" centered={true}>
          {i18nText("contact", props.language)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Avatar location={"modal"}/>
        <ContactBar />
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

export default connect(mapStateToProps)(ContactModal)