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

const MakePost = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const dispatch = useDispatch()

  const Setter = useSelector(setter)
  const loggedInState = (state) => state.loggedIn.name
  const message = (state) => state.loggedIn.message
  const statey = useSelector(loggedInState)
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userTitle, setUserTitle] = useState('')
  const [userPost, setUserPost] = useState('')
  const [validated, setValidated] = useState(false)
  //const message = statey.message
  // const name = statey.name
  console.log(loggedInState)
  const clearBoth = () => {
    setUserEmail('')
    setUserPassword('')
  }
  const submitUser = (event) => {
    const userDetails = {
      id: mongoose.Types.ObjectId(),
      title: userTitle,
      post: userPost,
      email: statey.email,
      username: statey.username,
      gamertag: statey.gamertag,
      console: statey.console,
      timePosted: new Date(),
      updated: new Date(),
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

  const apiUrl = 'https://classycutzbackend.herokuapp.com/user'

  //const apiUrl = 'http://localhost:3007/posts'

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
      return err
    }
    forceUpdateHandler()
  }

  return (
    <div className=' '>
      <Container className=' '>
        <Row>
          <Col />
          <Col xs={10}>
            <Form noValidate validated={validated}>
              <FormGroup className='text-center'>
                {/* <FormLabel>
                  {/* {statey.loggedIn ? (
                    <h3>Welcome back {name}</h3>
                  ) : (
                    console.log(statey)
                  )} 
                </FormLabel> */}

                {/* {statey.message ? setValidated(true) : <div></div>} */}

                <FormLabel>
                  <h1>Title</h1>
                </FormLabel>
                <FormControl
                  onChange={(e) => setUserTitle(e.target.value)}
                  type='text'
                  placeholder='Type title Here'
                  required
                />

                <Form.Control.Feedback type='invalid'>
                  Please provide a valid Title.
                </Form.Control.Feedback>
              </FormGroup>
              <br />
              <br />

              <FormGroup className='text-center'>
                <FormLabel>
                  <h1>Post</h1>
                </FormLabel>
                <FormControl
                  onChange={(e) => setUserPost(e.target.value)}
                  type='textarea'
                  placeholder='Type Post Here'
                  required
                />
                <Form.Control.Feedback>Looks Good</Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                  Please provide a valid post.
                </Form.Control.Feedback>
              </FormGroup>
              <FormGroup>
                <br />
                <br />
                <Button variant='secondary' onClick={(e) => submitUser(e)}>
                  Submit
                </Button>
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
    </div>
  )
}

export default MakePost
