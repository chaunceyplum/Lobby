import React from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
  Row,
} from 'react-bootstrap'
import contact from '../Images/contact.jpg'
import { Parallax } from 'react-parallax'

const Contact = () => {
  return (
    <div classN>
      <div className='homeDiv'>
        <h1 className='center homeHalfDiv1 text-center'>Contact</h1>
      </div>
      <Container>
        <Row>
          <Col />

          <Col xs={10} md={8}>
            <div className='text-center '>
              <h2>Leave us your email and we will reach out to you</h2>
              <Container>
                <Form className='homeHalfDiv'>
                  <FormGroup className='formMargin'>
                    <FormLabel>First Name</FormLabel>
                    <FormControl type='email' placeholder='Enter Name Here' />
                    <FormText>
                      We'll <strong>NEVER</strong> share your data with anyone
                    </FormText>
                  </FormGroup>

                  <FormGroup className='formMargin'>
                    <FormLabel>Email</FormLabel>
                    <FormControl type='email' placeholder='Enter email Here' />
                  </FormGroup>
                  <Button variant='secondary' type='submit'>
                    Submit
                  </Button>
                  <br />
                  <br />
                </Form>
              </Container>
            </div>
          </Col>

          <Col />
        </Row>
        <Row>
          <div>
            <br />
            <br />
            <br />
            <br />
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
