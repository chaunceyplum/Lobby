import React from 'react'
import {
  Button,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  Row,
} from 'react-bootstrap'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { NavbarText } from 'reactstrap'
import logo from '../Images/logo.svg'
import cloud from '../Images/cloud.svg'
const Footer = () => {
  return (
    <div className='offsetBackground'>
      <Container sticky='bottom' className=''>
        <Row></Row>
        <Row>
          <Col xs={12} md={4}>
            <Container>
              <Row>
                <Col />
                <Col xs={8}>
                  <br />
                  <div className='displayInline '>
                    <img
                      src={cloud}
                      alt=''
                      className=''
                      style={{
                        width: '100px',
                        height: '100px',
                        // display: 'flex',
                        // justifyContent: 'center',
                        //size: '2em',
                      }}
                    />
                    <h1 className='text1 center1'>
                      <strong>Lobby</strong>
                    </h1>
                  </div>
                  <br />
                  <br />
                </Col>
                <Col />
              </Row>
            </Container>

            <Container>
              <Row>
                <Col xs={2} />
                <Col xs={8}>
                  {/* <Form>
                    <FormGroup className='text-center'>
                      <FormLabel className='text-center'>
                        join our newsletter for free stuff
                      </FormLabel>
                      <br />
                      <br />
                      <FormControl
                        size='sm'
                        type='email'
                        placeholder='Enter Your Email Here!'
                      />
                    </FormGroup>
                  </Form> */}
                  <p className='text-center'>©2023 Chaunce.dev inc.</p>
                </Col>
                <Col xs={2} />
              </Row>
            </Container>

            <br />
            <br />
            <br />
          </Col>
          <Col xs={12} md={4} className=' '>
            <br />
            <br />
            <Container>
              <div className=''>
                <h3 className='text-center center'>Useful Links</h3>
              </div>
            </Container>
            <br />
            <Nav className='d-block tdec'>
              <NavItem className='text-center tdec '>
                <NavLink href='/'>
                  <strong className='tdec'>Home</strong>
                </NavLink>
              </NavItem>
              {/* <br /> */}
              <NavItem className='text-center'>
                <NavLink href='/service' className='tdec'>
                  <strong className='tdec'>Service</strong>
                </NavLink>
              </NavItem>
              {/* <br /> */}
              <NavItem className='text-center'>
                <NavLink className='tdec' href='/Contact'>
                  <strong>Contact</strong>
                </NavLink>
              </NavItem>
              {/* <br /> */}

              <NavItem className='text-center'>
                <NavLink className='tdec' href='/LogIn'>
                  <strong>Log In</strong>
                </NavLink>
              </NavItem>
              <br />
            </Nav>
          </Col>
          <Col xs={12} md={4}>
            <br />
            <br />
            <Container>
              <div className=' text-center'>
                <h3 className='text-center center'>Social Media</h3>
              </div>
            </Container>
            <br />
            <Row className='centerFooter justify-content-space-evenly '>
              {/* <Col className="d-flex justify-content-center spacer">
                        <Button href='https://www.instagram.com/chaveloper/' className='buttons' size="20em">
                            <FaInstagram />
                        </Button>
                    </Col> */}
              <Col className='d-flex justify-content-center ' xs={12}>
                <div>
                  <Button
                    href='https://www.linkedin.com/in/chauncey-plummer-5457361bb/'
                    variant='secondary'
                    className='buttons'
                    size='20em'
                  >
                    <FaLinkedin />
                  </Button>
                  <br />
                </div>
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
              <Col xs={12}>
                <br />
              </Col>
              <Col className='d-flex justify-content-center ' xs={12}>
                <div>
                  <Button
                    href='https://github.com/chaunceyplum'
                    variant='secondary'
                    className='buttons'
                  >
                    <FaGithub />
                  </Button>
                  <br />
                </div>
              </Col>
            </Row>
          </Col>
          <br />
          <br />
          <br />
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row>
          <hr />
          <Col xs={12} md={4}></Col>
          <Col xs={12} md={4} />
          <Col xs={12} md={4}>
            <ul className='footerClass'>
              {/* <li className='text-center'>privacy policy</li> */}
              {/* <li className='text-center'>cookie policy</li>
              <li className='text-center'>cookie settigns</li> */}
            </ul>
          </Col>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Row>
      </Container>
    </div>
  )
}

export default Footer
