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
                    <div className='center1'>
                        <h3 className='center '>
                            
                            Services
                        </h3>
                    </div>
                    <div>
                        <br />
                    </div>
                    <div className='center1'>
                        <Button onClick={handleShow} className='center1'>
                                Learn More
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                {
                    show ?
                    <div>
                        Content
                    </div> 
                    :
                    <div className='center1'>
                        {/* <Button onClick={handleShow} className='center1'>
                            Learn More
                        </Button> */}
                        <div>
                            <br/>
                            
                            <br/>
                        </div>
                    </div>
                }

            </Row>
        </Container>
    </div>
  )
}

export default Service