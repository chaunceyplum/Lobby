import React, { useState } from 'react'
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Modal, ModalBody, ModalFooter, ModalTitle, Row } from 'react-bootstrap'
import { ModalHeader } from 'reactstrap';
const SignUp = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //##VALIDATOR LOGIC####
    const required = val => val && val.length;
    const maxLength = len => val => !val || (val.length <= len);
    const minLength = len => val => val && (val.length >= len);
    const isNumber = val => !isNaN(+val);
    const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
    const validPassword = val => /^(?=.*\d)[a-zA-Z0-9]{8,16}$/






  return (
    <div>
        <Button variant="outline-secondary"  onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle>Sign Up</ModalTitle>
        </ModalHeader>
        <ModalBody>
        <Container className=" ">
                  <Row>
                  <Col />
                  <Col xs={10} sm={8} md={6}>
                    <Form>

                      <FormGroup className='text-center'>
                        <FormLabel >
                          <h1 >Email</h1>
                        </FormLabel>
                        <FormControl type='email' placeholder='Type Email Here' />
                      </FormGroup>
                      <br />
                      <br />

                      <FormGroup className='text-center'>
                        <FormLabel >
                          <h1 >Password</h1>
                        </FormLabel>
                        <FormControl type='password' placeholder='Type Password Here' />
                      </FormGroup>
                      <br />
                      <br />
                      <FormGroup>

                       <Container>
                        <Row>
                          <Col xs={2} />
                          <Col xs={4} className='text-center'>
                            <Button type=''>
                            Clear
                            </Button>
                        
                          </Col>
                          <Col xs={4}>
                            <Button type='Submit'>
                              Submit
                            </Button>
                        
                          </Col>
                          <Col xs={2} />
                        </Row>
                       </Container>
                      </FormGroup>




                    </Form>
                  </Col>
                  <Col />
                  </Row>
                </Container>
        </ModalBody>
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