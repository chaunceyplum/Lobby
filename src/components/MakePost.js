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
import validatePost from '../redux/DataSlice'
import axios from 'axios'
import { ObjectId } from 'bson'
//import mongoose from 'mongoose'

const MakePost = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const dispatch = useDispatch()

  const Setter = useSelector(setter)
  const loggedInState = (state) => state.loggedIn
  const message = (state) => state.loggedIn.message
  const statey = useSelector(loggedInState)
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userTitle, setUserTitle] = useState('')
  const [userPost, setUserPost] = useState('')
  const [validated, setValidated] = useState(false)
  //const message = statey.message
  // const name = statey.name
  //console.log(statey.likedBy.filter())
  const clearBoth = () => {
    setUserEmail('')
    setUserPassword('')
  }
  const submitUser = (event) => {
    const userDetails = {
      id: new ObjectId(32),
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
    //validatePost(userDetails)

    return userDetails
  }

  const apiUrl = 'https://classycutzbackend.herokuapp.com/posts'

  //const apiUrl = 'http://localhost:3007/posts'

  const forceUpdateHandler = () => {
    this.forceUpdate()
  }
  const logIn = async (user) => {
    if (statey.email || statey.name || statey.gamertag || statey.username) {
      try {
        const res = await axios.post(`${apiUrl}`, user)

        console.log(res.data)

        res.data
          ? dispatch(validatePost(res.data))
          : console.log('unable to run setter func')

        return res.data
      } catch (err) {
        return err
      }
      forceUpdateHandler()
    } else {
      console.log('unable to make post due to incorrect credentials')
    }
  }

  return (
    <div className=' offsetBackground roundedCorners'>
      <Container className=' '>
        <Row>
          <Col />
          <Col xs={12} md={8}>
            <Form noValidate validated={validated}>
              <FormGroup className='text-center'>
                <FormLabel>
                  <h1 className='makePostFormTextPadding'>Title</h1>
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

              <FormGroup className='text-center'>
                <FormLabel>
                  <h1 className='makePostFormTextPadding'>Post</h1>
                </FormLabel>
                <FormControl
                  onChange={(e) => setUserPost(e.target.value)}
                  as='textarea'
                  rows={3}
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
                <div className='center1'>
                  <Button
                    className='buttons center'
                    variant='secondary'
                    onClick={(e) => submitUser(e)}
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
        <Row></Row>
      </Container>
      <br />
      <br />
    </div>
  )
}

export default MakePost
