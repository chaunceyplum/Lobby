import React from 'react'
import { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Service = () => {
  
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div>
        <Container>
            <Row className='homeDiv'>
                <Col className='center'>
                    <h3 className='center '>
                        Services
                    </h3>
                </Col>
            </Row>
            <Row>
                {
                    show ?
                    <div>
                        Content
                    </div> 
                    :
                    <Button onClick={handleShow}>
                        Learn More
                    </Button>
                }

            </Row>
        </Container>
    </div>
  )
}

export default Service