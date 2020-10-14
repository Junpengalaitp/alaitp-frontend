import React from "react";
import {Button, Modal} from "react-bootstrap";
import {connect} from "react-redux";
import {i18nText} from "../../constant/i18nText";
import Avatar from "./avatar";
import ContactBar from "./ContactBar";
import {personalPageUrl} from "../../constant/url";
import {Link} from "react-router-dom";

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
          <Link to={personalPageUrl}>{i18nText("personal page link", props.language)}</Link>
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