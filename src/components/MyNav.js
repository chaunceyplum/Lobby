import React, { useState } from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem,
  Collapse,
  Row,
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
  FormLabel,
  FormGroup,
  ModalHeader,
} from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'
import { NavbarToggler } from 'reactstrap'
import LogIn from './LogIn'
import SignUp from './SignUp'
import { useDispatch, useSelector, useRef } from 'react-redux'
import {
  loggedInBool,
  loggedInLoading,
  loggedInError,
  loggedInEmail,
  loggedInPassword,
  fetcher,
  emailGetter,
  signOut,
  setter,
} from '../redux/LoggedInSlice'
import axios from 'axios'
import DisplayUser from './DisplayUser'

const MyNav = () => {
  const [isOpen, setOpen] = useState(false)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const toggle = () => {
    setOpen(!isOpen)
    console.log(isOpen)
  }
  const displayUser = (statey) => {
    return <DisplayUser email={statey.email} />
  }

  const loggedInChecker = (loggedIn, statey) => {
    loggedIn ? displayUser(statey) : signUp()
  }
  const submitUser = () => {
    const userDetails = {
      email: userEmail,
      password: userPassword,
    }
    console.log(userDetails)
    handleClose()
    signUp(userDetails)

    return userDetails
  }
  const signOutUser = () => {
    dispatch(signOut())
  }
  const apiUrl = 'https://classycutzbackend.herokuapp.com/user'

  const signUp = async (user) => {
    try {
      const res = await axios.post(`${apiUrl}`, user)

      console.log(res.data)

      res.data
        ? dispatch(setter(res.data))
        : console.log('unable to run setter func')

      return res.data
    } catch (err) {
      return err.message
    }
  }

  const dispatch = useDispatch()
  const loggedInState = (state) => state.loggedIn
  const statey = useSelector(loggedInState)
  const email = statey.email
  const password = statey.password
  const loggedInBoolean = statey.LoggedIn
  //const fetcher = useSelector(fetcher)
  return (
    <div className=''>
      {/* <Container>
        <Navbar fixed='top' className='text-center navbarPositoning'>
          <Col xs={6} lg={4}>
            <NavbarBrand href='/' className='text-secondary'>
              (logo)Lobby
            </NavbarBrand>
          </Col>
          <NavbarToggler onClick={toggle} className='navbar-toggler' />

          <Col
            xs={0}
            md={6}
            lg={4}
            className='text-center display-flex ms-auto'
          >
            {isOpen ? (
              <div className='navlinks'>
                <Nav className='ms-auto nav text-center '>
                  <NavItem>
                    <NavLink href='/'>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='/service'>Service</NavLink>
                  </NavItem>
                  {/* <NavItem>
                    <NavLink href='/about'>About Us</NavLink>
                  </NavItem> 
                  <NavItem>
                    <NavLink href='/contact'>Contact</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href='/login'>Log In</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink>
                      <SignUp />
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            ) : (
              <div></div>
            )}
          </Col>

          <Col xs={6} md={3} lg={4}>
            <div>
              <Button onClick={toggle} variant='outline-secondary'>
                menu
              </Button>
            </div>
          </Col>
        </Navbar>
      </Container> */}
      <Container>
        <Navbar
          expand='lg'
          fixed='top'
          className='text-center navbarPositoning'
        >
          <Container>
            <Button className=' btn btn-light'>
              <Navbar.Brand href='/' className='text-dark bg-light'>
                (logo)Lobby
              </Navbar.Brand>
            </Button>
            <Navbar.Toggle bg={'darkgrey'} />
            <Navbar.Collapse>
              <Nav
                className='me-auto my-2 my-lg-0 text-center nav d-flex center'
                style={{ maxHeight: '50%' }}
              >
                <NavItem>
                  <NavLink className='NavLink text-white' href='/'>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='NavLink text-white' href='/service'>
                    Service
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink className='NavLink' href='/about'>
                    About Us
                  </NavLink>
                </NavItem> */}

                <NavItem>
                  <NavLink className='NavLink text-white' href='/contact'>
                    Contact
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className='NavLink text-white' href='/login'>
                    Log In
                  </NavLink>
                </NavItem>
              </Nav>
              <div>
                {/* {loggedInBoolean ? (
                  <DisplayUser email={JSON.stringify(email)} />
                ) : (
                  //displayUser()
                  //<SignUp />
                  signUp()
                )} */}

                {!loggedInBoolean ? (
                  <div>
                    <Button variant='light' onClick={handleShow}>
                      Sign Up
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <ModalHeader closeButton>
                        <ModalTitle>Sign Up</ModalTitle>
                      </ModalHeader>
                      <ModalBody>
                        <Container className=' '>
                          <Row>
                            <Col />
                            <Col xs={10} lg={8}>
                              <Form>
                                <FormGroup className='text-center'>
                                  <FormLabel>
                                    <h1>Email</h1>
                                  </FormLabel>
                                  <FormControl
                                    onChange={(e) =>
                                      setUserEmail(e.target.value)
                                    }
                                    type='email'
                                    placeholder='Type Email Here'
                                  />

                                  {/* <input
                          type='text'
                          onChange={(e) => setUserEmail(e.target.value)}
                        ></input> */}
                                </FormGroup>
                                <br />
                                <br />

                                <FormGroup className='text-center'>
                                  <FormLabel>
                                    <h1>Password</h1>
                                  </FormLabel>
                                  <FormControl
                                    onChange={(e) =>
                                      setUserPassword(e.target.value)
                                    }
                                    type='password'
                                    placeholder='Type Password Here'
                                  />
                                </FormGroup>
                                <br />
                                <br />
                                {/* <FormGroup>
                        <Container>
                          <Row>
                            <Col xs={1} />
                            <Col xs={4} className='text-center'>
                              <Button type='cancel'>Clear</Button>
                            </Col>
                            <Col xs={2} />
                            <Col xs={4} className='text-center'>
                              <Button type='Submit'>Submit</Button>
                            </Col>
                            <Col xs={1} />
                          </Row>
                        </Container>
                      </FormGroup> */}
                              </Form>
                            </Col>
                            <Col />
                          </Row>
                        </Container>
                      </ModalBody>
                      <ModalFooter>
                        <Button variant='secondary' onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant='primary' onClick={submitUser}>
                          Save Changes
                        </Button>
                        {/* {user
                ? (state, action) => {
                    Setter(state, action, user)
                    console.log(user)
                  }
                : console.log('user state is empty')} */}
                      </ModalFooter>
                    </Modal>
                  </div>
                ) : (
                  <Container>
                    <Row>
                      <Col>
                        {/* <a href='#'> */}
                        <Container>
                          <Row>
                            <Col xs={12} lg={4}>
                              <Button className=' btn btn-light'>
                                <h6 className=''>{email}</h6>
                              </Button>
                            </Col>
                            <Col xs={0} />
                            <Col xs={12} lg={4}>
                              <Button
                                className=' btn btn-light'
                                onClick={() => signOutUser()}
                              >
                                <h6 className=''>Sign Out</h6>
                              </Button>
                            </Col>
                          </Row>
                        </Container>
                        {/* </a> */}
                      </Col>
                    </Row>
                  </Container>
                )}
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  )
}

export default MyNav
