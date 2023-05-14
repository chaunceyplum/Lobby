import React from 'react'
import {
  Button,
  Col,
  Container,
  Navbar,
  NavbarBrand,
  Row,
} from 'react-bootstrap'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { NavbarText } from 'reactstrap'
const Footer = () => {
  return (
    <div>
      <Navbar className='footerClass'>
        <Container>
          <Row>
            <NavbarBrand>
              <h1 className=' text-center '>Lobby</h1>
            </NavbarBrand>
          </Row>

          <Row className='centerFooter justify-content-space-evenly '>
            {/* <Col className="d-flex justify-content-center spacer">
                        <Button href='https://www.instagram.com/chaveloper/' className='buttons' size="20em">
                            <FaInstagram />
                        </Button>
                    </Col> */}
            <Col className='d-flex justify-content-center '>
              <Button
                href='https://www.linkedin.com/in/chauncey-plummer-5457361bb/'
                variant='secondary'
                className='buttons'
                size='20em'
              >
                <FaLinkedin />
              </Button>
            </Col>
            {/* <Col className='d-flex justify-content-center '>
              <Button
                href='https://twitter.com/chaunce_dev'
                variant='secondary'
                className='buttons'
                size='20em'
              >
                <FaTwitter />
              </Button>
            </Col> */}
            <Col className='d-flex justify-content-center '>
              <Button
                href='https://github.com/chaunceyplum'
                variant='secondary'
                className='buttons'
              >
                <FaGithub />
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer
