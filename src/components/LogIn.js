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
import { ModalHeader } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  loggedInBool,
  loggedInLoading,
  loggedInError,
  loggedInEmail,
  loggedInPassword,
  setter,
} from '../redux/LoggedInSlice'
import axios from 'axios'

const LogIn = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const dispatch = useDispatch()

  const Setter = useSelector(setter)
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const submitUser = () => {
    const userDetails = {
      email: userEmail,
      password: userPassword,
    }
    console.log(userDetails)
    handleClose()
    logIn(userDetails)

    return userDetails
  }
  const user = {
    user: userEmail,
    password: userPassword,
  }
  const apiUrl = 'https://classycutzbackend.herokuapp.com/user'
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

  const required = (val) => val && val.length
  const maxLength = (len) => (val) => !val || val.length <= len
  const minLength = (len) => (val) => val && val.length >= len
  const isNumber = (val) => !isNaN(+val)
  const validEmail = (val) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
  const validPassword = (val) => /^(?=.*\d)[a-zA-Z0-9]{8,16}$/

  return (
    <div className=' '>
      <Container>
        <Row className='homeDiv'>
          <Col className='center'>
            <h3 className='center '>Login</h3>
          </Col>
        </Row>
      </Container>
      <Container className=' '>
        <Row>
          <Col />
          <Col xs={10} sm={8} md={6}>
            <Form>
              <FormGroup className='text-center'>
                <FormLabel>
                  <h1>Email</h1>
                </FormLabel>
                <FormControl
                  onChange={(e) => setUserEmail(e.target.value)}
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
                  onChange={(e) => setUserPassword(e.target.value)}
                  type='password'
                  placeholder='Type Password Here'
                />
              </FormGroup>
              <FormGroup>
                <Button variant='primary' onClick={submitUser}>
                  Submit
                </Button>
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
    </div>
  )
}

export default LogIn
