import React from "react";
import {Modal} from "react-bootstrap";
import {connect} from "react-redux";

/**
 * bootstrap modal, contains CoOccurredWords
 */
const ImageModal = props => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      dialogClassName={"image-modal"}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
    >
      <Modal.Body>
        <img src={props.img} alt="" />
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    language: state.i18n.language
  }
};

export default connect(mapStateToProps)(ImageModal)