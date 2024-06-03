import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalComponent = ({ openModal, setOpenModal, title, children }) => {
  return (
    <Modal
      show={openModal}
      onHide={() => setOpenModal(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        <Button
          variant=""
          className="btn btn-close"
          onClick={() => setOpenModal(false)}
        >
          x
        </Button>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
