import React from 'react'
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, FormText, Row } from 'react-bootstrap'
import contact from '../Images/contact.jpg'
import {Parallax} from 'react-parallax'



const Contact = () => {
  return (
    <div classN>
    
    <div className='homeDiv'>
      <Parallax strength={-400} bgImage={contact} className="content">
        
      </Parallax>
    </div>
    <Container>
    <Row>
      <Col />
      
        
        <Col xs={10} md={8}>
          <div className='text-center '>
            <h2>
              Leave us your email and we will reach out to you
            </h2>
            <Container>
              <Form className="homeHalfDiv">
                <FormGroup className='formMargin'>
                  <FormLabel>
                    First Name
                  </FormLabel>
                  <FormControl type="email" placeholder="Enter Email Here" />
                  <FormText>
                    We'll <strong>NEVER</strong> share your data with anyone
                  </FormText>
                </FormGroup>
                <br />
                <FormGroup className='formMargin'>
                  <FormLabel>
                    Password
                  </FormLabel>
                  <FormControl type="password" placeholder="Enter Password Here" />
                  <br/>

                  
                </FormGroup>
                <Button variant="secondary" type="submit">
                  Submit
                </Button>
              </Form>
            </Container>
          </div>
        </Col>


      <Col />

    </Row>
</Container>
    </div>
  )
}

export default Contact