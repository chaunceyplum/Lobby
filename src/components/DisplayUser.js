import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const DisplayUser = (email) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {/* <a href='#'> */}
            <h6>{email}</h6>
            {/* </a> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DisplayUser
