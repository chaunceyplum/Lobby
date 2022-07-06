import React from 'react'
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { Button, Col, Container, Label, Row } from 'reactstrap'


const LogIn = () => {




  const required = val => val && val.length;
  const maxLength = len => val => !val || (val.length <= len);
  const minLength = len => val => val && (val.length >= len);
  const isNumber = val => !isNaN(+val);
  const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
  const validPassword = val => /^(?=.*\d)[a-zA-Z0-9]{8,16}$/

    return (
            <div className=" ">
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
            </div>
    )
}

export default LogIn