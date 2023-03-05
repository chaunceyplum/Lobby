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
  //const message = statey.message
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
    // console.log(userDetails)
    logIn(userDetails)

    return userDetails
  }
  const user = {
    user: userEmail,
    password: userPassword,
  }
  const apiUrl = 'https://classycutzbackend.herokuapp.com/user'

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

  // const required = (val) => val && val.length
  // const maxLength = (len) => (val) => !val || val.length <= len
  // const minLength = (len) => (val) => val && val.length >= len
  // const isNumber = (val) => !isNaN(+val)
  // const validEmail = (val) =>
  //   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
  // const validPassword = (val) => /^(?=.*\d)[a-zA-Z0-9]{8,16}$/

  return (
    <div className='homeBackground '>
      <Container>
        <Row className='changesss'>
          <Col xs={2} />
          <Col xs={8}>
            <div className='text-center'>
              <h3 className='center homeHeaderText text2'>Login</h3>

              <br />

              <br />
              <br />

              <br />
            </div>
          </Col>
          <Col xs={2} />
        </Row>
      </Container>
      <Container className=' text2'>
        <Row>
          <Col />
          <Col xs={10} sm={8} md={6}>
            <Form noValidate validated={validated}>
              <FormGroup className='text-center'>
                <FormLabel>
                  {statey ? (
                    <h3>Welcome back {statey}</h3>
                  ) : (
                    console.log(statey)
                  )}

                  {message ? (
                    <div>
                      {message}
                      <h3>{statey.message}</h3>
                    </div>
                  ) : (
                    <div>{console.log(message)}</div>
                  )}
                </FormLabel>

                {statey.message ? setValidated(false) : <div></div>}

                <FormLabel>
                  <h1 className='text2'>Email</h1>
                </FormLabel>
                <FormControl
                  onChange={(e) => setUserEmail(e.target.value)}
                  type='email'
                  placeholder='Type Email Here'
                  required
                />

                <Form.Control.Feedback type='invalid'>
                  Please provide a valid Email.
                </Form.Control.Feedback>
              </FormGroup>
              <br />
              <br />

              <FormGroup className='text-center center'>
                <FormLabel>
                  <h1 className='text2'>Password</h1>
                </FormLabel>
                <FormControl
                  onChange={(e) => setUserPassword(e.target.value)}
                  type='password'
                  placeholder='Type Password Here'
                  required
                />
                <Form.Control.Feedback>Looks Good</Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
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
                    className='buttons1'
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default LogIn
