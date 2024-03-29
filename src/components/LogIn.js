import React, { useState } from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
  Row,
} from 'react-bootstrap'
import { Label, ModalHeader } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  loggedInBool,
  loggedInLoading,
  loggedInError,
  loggedInEmail,
  loggedInPassword,
  setter,
  nameGetter,
} from '../redux/LoggedInSlice'
import axios from 'axios'
import Footer from './Footer'

const LogIn = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const dispatch = useDispatch()

  const Setter = useSelector(setter)
  const loggedInState = (state) => state.loggedIn.name
  const message = useSelector((state) => state.loggedIn.message)
  const statey = useSelector(loggedInState)
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [validated, setValidated] = useState(false)
  const name = statey.name
  //const message = statey.message
  console.log(message)
  const clearBoth = () => {
    setUserEmail('')
    setUserPassword('')
  }
  const submitUser = (event) => {
    const userDetails = {
      email: userEmail,
      password: userPassword,
    }
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)

    logIn(userDetails)

    return userDetails
  }
  const user = {
    user: userEmail,
    password: userPassword,
  }
  const apiUrl = 'https://lobbybackend-39e0b804479e.herokuapp.com/user'

  //const apiUrl = 'http://localhost:3007/user'

  const forceUpdateHandler = () => {
    this.forceUpdate()
  }
  const logIn = async (user) => {
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
    forceUpdateHandler()
  }

  return (
    <div className='homeBackground '>
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
              <h3 className=' text2 rem'>Log In</h3>
            </div>
          </Col>
          <Col xs={2} />
        </Row>
      </Container>
      <Container className=' text2'>
        <Row>
          <Col />
          <Col xs={12} sm={8} md={6}>
            <Form noValidate validated={validated}>
              <FormGroup className='text-center'>
                <FormLabel>
                  {statey ? (
                    <h3 className='text-center'>Welcome back {statey}</h3>
                  ) : (
                    console.log(statey)
                  )}

                  {message ? (
                    <div className='text-center'>
                      {message}
                      <h3 className='text-center'>{statey.message}</h3>
                    </div>
                  ) : (
                    <div>{console.log(message)}</div>
                  )}
                </FormLabel>

                {statey.message ? setValidated(false) : <div></div>}

                <FormLabel>
                  <h1 className='text2 text-center'>Email</h1>
                </FormLabel>
                <FormLabel>
                  <p>EMAIL:dummy@gmail.com</p>
                </FormLabel>
                <FormControl
                  onChange={(e) => setUserEmail(e.target.value)}
                  type='email'
                  placeholder='Type Email Here'
                  required
                  className='text-center'
                />

                <Form.Control.Feedback type='invalid' className='text-center'>
                  Please provide a valid Email.
                </Form.Control.Feedback>
              </FormGroup>
              <br />
              <br />

              <FormGroup className='text-center center'>
                <FormLabel>
                  <h1 className='text2 text-center'>Password</h1>
                </FormLabel>
                <FormLabel>
                  <p>PASSWORD:dummy</p>
                </FormLabel>
                <FormControl
                  onChange={(e) => setUserPassword(e.target.value)}
                  type='password'
                  placeholder='Type Password Here'
                  required
                  className='text-center'
                />
                <Form.Control.Feedback>Looks Good</Form.Control.Feedback>
                <Form.Control.Feedback type='invalid' className='text-center'>
                  Please provide a valid password.
                </Form.Control.Feedback>
              </FormGroup>
              <FormGroup>
                <br />
                <br />
                <div className='center1'>
                  <Button
                    variant='secondary'
                    onClick={(e) => submitUser(e)}
                    className='buttons1 text-center'
                  >
                    Submit
                  </Button>
                </div>
              </FormGroup>
              <br />
              <br />
            </Form>
          </Col>
          <Col />
        </Row>
        <Row>
          <br />
          <br />
        </Row>
      </Container>
    </div>
  )
}

export default LogIn
