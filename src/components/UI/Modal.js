import CoOccurredWords from "../Keywords/CoOccurredWord/CoOccurredWords";
import React from "react";
import {Button, Modal} from "react-bootstrap";

export const MyVerticallyCenteredModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Most correlated technologies with <strong>{props.keyword}</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CoOccurredWords keyword={props.keyword}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};