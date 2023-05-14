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
import logo from '../Images/logo.svg'

const MyNav = () => {
  const [isOpen, setOpen] = useState(false)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userUserName, setUserUserName] = useState('')
  const [userConsole, setUserConsole] = useState('')
  const [userGamerTag, setUserGamerTag] = useState('')
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
      name: userName,
      username: userUserName,
      console: userConsole,
      gamertag: userGamerTag,
    }
    const userLogin = {
      email: userEmail,
      password: userPassword,
    }
    console.log(userDetails)

    signUp(userDetails)
    setTimeout(logIn(userLogin), 4000)
    return userDetails
  }
  const signOutUser = () => {
    dispatch(signOut())
  }
  const apiUrl = 'https://classycutzbackend.herokuapp.com'
  //const apiUrl = 'http://localhost:3007'

  const signUp = async (user) => {
    try {
      const res = await axios.post(`${apiUrl}/signup`, user)

      console.log(res.data)

      res.data
        ? dispatch(setter(res.data))
        : console.log('unable to run setter func')

      return res.data
    } catch (err) {
      return err.message
    }
  }
  const logIn = async (user) => {
    if (validated) {
      try {
        const res = await axios.post(`${apiUrl}/user`, user)

        res.data
          ? dispatch(setter(res.data))
          : console.log('unable to run setter func')

        return res.data
      } catch (err) {
        return err.message
      }
    }
  }

  const dispatch = useDispatch()
  const loggedInState = (state) => state.loggedIn
  const statey = useSelector(loggedInState)
  const email = statey.email
  const password = statey.password
  const loggedInBoolean = statey.LoggedIn
  const [validated, setValidated] = useState(false)
  //const fetcher = useSelector(fetcher)

  return (
    <div className=''>
      <Container>
        <Navbar
          expand='lg'
          fixed='top'
          className='text-center navbarPositoning'
        >
          <Container>
            <Navbar.Brand href='/' className=''>
              <div className='displayInline '>
                <img
                  src={logo}
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
                <h1 className='text2 NavLink center'>
                  <strong>Lobby</strong>
                </h1>
              </div>
            </Navbar.Brand>

            <Navbar.Toggle bg={'#613333'} className='buttons1' />
            <Navbar.Collapse className=''>
              <Nav
                className='me-auto my-2 my-lg-0 text-center nav d-flex center'
                style={{ maxHeight: '50%' }}
              >
                <NavItem>
                  <NavLink className='NavLink ' href='/'>
                    <strong>Home</strong>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='NavLink ' href='/service'>
                    <strong>Service</strong>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className='NavLink ' href='/contact'>
                    <strong>Contact</strong>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className='NavLink ' href='/login'>
                    <strong>Log In</strong>
                  </NavLink>
                </NavItem>
              </Nav>
              <div>
                {!statey.email ? (
                  <div>
                    <Button
                      variant=''
                      onClick={handleShow}
                      className='buttons1'
                    >
                      Sign Up
                    </Button>

                    <Modal show={show} onHide={handleClose} className=''>
                      <div className='homeBackground'>
                        <ModalHeader closeButton className='offsetBackground'>
                          <ModalTitle>Sign Up</ModalTitle>
                        </ModalHeader>
                        <ModalBody className='homeBackground text2'>
                          <Container>
                            <Row>
                              <Col />
                              <Col xs={10} lg={8}>
                                <Form noValidate validated={validated}>
                                  <FormGroup className='text-center'>
                                    <FormLabel>
                                      <h1>Full Name</h1>
                                    </FormLabel>
                                    <FormControl
                                      onChange={(e) =>
                                        setUserName(e.target.value)
                                      }
                                      type='text'
                                      placeholder='Type Full Name Here!'
                                      required
                                    />
                                  </FormGroup>

                                  <br />
                                  <FormGroup className='text-center'>
                                    <FormLabel>
                                      <h1>Gamertag</h1>
                                    </FormLabel>
                                    <FormControl
                                      onChange={(e) =>
                                        setUserGamerTag(e.target.value)
                                      }
                                      type='text'
                                      placeholder='Type Gamer Tag Here'
                                      required
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                      Please provide a valid Gamertag.
                                    </Form.Control.Feedback>
                                  </FormGroup>

                                  <br />
                                  <FormGroup className='text-center'>
                                    <FormLabel>
                                      <h1>UserName</h1>
                                    </FormLabel>
                                    <FormControl
                                      onChange={(e) =>
                                        setUserUserName(e.target.value)
                                      }
                                      type='text'
                                      placeholder='Type Username Here'
                                      required
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                      Please provide a valid Username.
                                    </Form.Control.Feedback>
                                  </FormGroup>

                                  <br />
                                  <FormGroup className='text-center'>
                                    <FormLabel>
                                      <h1>Console</h1>
                                    </FormLabel>

                                    <br />

                                    <select
                                      value={userConsole}
                                      onChange={(e) =>
                                        setUserConsole(e.target.value)
                                      }
                                    >
                                      <option value='PSN'>Playstation</option>
                                      <option value='XBOX'>Xbox</option>
                                      <option value='PC'>PC</option>
                                      <option value='mango'>Mango</option>
                                    </select>

                                    <Form.Control.Feedback type='invalid'>
                                      Please provide a valid console.
                                    </Form.Control.Feedback>
                                  </FormGroup>

                                  <br />
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
                                      required
                                    />

                                    <Form.Control.Feedback type='invalid'>
                                      Please provide a valid Email.
                                    </Form.Control.Feedback>
                                  </FormGroup>

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
                                      required
                                    />
                                    <Form.Control.Feedback>
                                      Looks Good
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type='invalid'>
                                      Please provide a valid password.
                                    </Form.Control.Feedback>
                                  </FormGroup>

                                  <br />

                                  <FormGroup>
                                    <Container>
                                      <Row>
                                        <Col>
                                          <Button
                                            variant=''
                                            onClick={handleClose}
                                            className='buttons1'
                                          >
                                            Close
                                          </Button>
                                        </Col>
                                        <Col>
                                          <Button
                                            variant=''
                                            onClick={submitUser}
                                            className='buttons1'
                                          >
                                            Save Changes
                                          </Button>
                                        </Col>
                                      </Row>
                                    </Container>
                                  </FormGroup>
                                </Form>
                              </Col>
                              <Col />
                            </Row>
                          </Container>
                        </ModalBody>
                      </div>
                    </Modal>
                  </div>
                ) : (
                  // <SignUp />
                  <Container>
                    <Row>
                      <Col>
                        <Container>
                          <Row>
                            <Col xs={12} lg={4}>
                              <Button className=' btn btn-light buttons1'>
                                <h6 className=''>{email}</h6>
                              </Button>
                            </Col>
                            <Col xs={0} />
                            <Col xs={12} lg={4}>
                              <Button
                                className=' btn btn-light buttons1'
                                onClick={() => signOutUser()}
                              >
                                <h6 className=''>Sign Out</h6>
                              </Button>
                            </Col>
                          </Row>
                        </Container>
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
