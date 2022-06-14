import React, { useState } from 'react'
import { Button, Col, Container, Modal, ModalBody, ModalFooter, ModalTitle, Row } from 'react-bootstrap'
import { ModalHeader } from 'reactstrap';
const SignUp = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <Button variant="outline-secondary"  onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle>Modal heading</ModalTitle>
        </ModalHeader>
        <ModalBody>Woohoo, you're reading this text in a modal!</ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default SignUp