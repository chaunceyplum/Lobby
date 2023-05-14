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
import Footer from './Footer'

const Contact = () => {
  return (
    <div className='homeBackground'>
      <Container>
        <Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Row>

        <Row className='changesss'>
          <Col xs={2} />
          <Col xs={8}>
            <div className=' titleBlock roundedCorners text-center headerPadding1 center'>
              <h3 className=' text2 rem'>Contact</h3>
            </div>
          </Col>
          <Col xs={2} />
        </Row>
      </Container>
      <br />
      <br />
      <Container>
        <Row>
          <Col />

          <Col xs={10} md={8}>
            <div className='text-center text2'>
              <h2>Leave us your email and we will reach out to you</h2>
              <Container>
                <Form className='homeHalfDiv'>
                  <FormGroup className='formMargin'>
                    <FormLabel>First Name</FormLabel>
                    <FormControl type='email' placeholder='Enter Name Here' />
                    <FormText className='text1'>
                      We'll <strong>NEVER</strong> share your data with anyone
                    </FormText>
                  </FormGroup>

                  <FormGroup className='formMargin'>
                    <FormLabel>Email</FormLabel>
                    <FormControl type='email' placeholder='Enter email Here' />
                  </FormGroup>
                  <Button
                    variant='secondary'
                    type='submit'
                    className='buttons1'
                  >
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
      <Footer />
    </div>
  )
}

export default Contact
