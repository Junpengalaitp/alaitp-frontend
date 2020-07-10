import CoOccurredWords from "../Keywords/CoOccurredWord/CoOccurredWords";
import React from "react";
import {Button, Modal} from "react-bootstrap";

/**
 * bootstrap modal, contains CoOccurredWords
 */
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
          Employers who hires people with <strong>{props.keyword}</strong> skill are also looking for these skills:
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