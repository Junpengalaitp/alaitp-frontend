import React from "react";
import {Button, Modal} from "react-bootstrap";
import {connect} from "react-redux";
import {i18nText} from "../../constant/i18nText";

/**
 * bootstrap modal, contains CoOccurredWords
 */
const WechatQRModal = props => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {i18nText("wechatQR", props.language)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={"https://frontend-image-bucket-1258989137.cos.ap-nanjing.myqcloud.com/wechatQR.jpg"} alt="" />
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

export default connect(mapStateToProps)(WechatQRModal)