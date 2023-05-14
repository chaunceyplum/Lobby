import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Parallax } from 'react-parallax'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchPosts,
  getPostsError,
  getPostsStatus,
  selectAllPosts,
  fetched,
} from '../redux/DataSlice'
import GrowExample from './GrowExample'
import RenderServiceCard from './RenderServiceCard'
import contact from '../Images/writing.jpg'
import RenderPostCard from './RenderPostCard'
import MakePost from './MakePost'
import Footer from './Footer'
import ServiceUser from './ServiceUser'

const Service = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  const postsStatus = useSelector(getPostsStatus)
  const error = useSelector(getPostsError)

  const loggedInState = (state) => state.loggedIn
  const statey = useSelector(loggedInState)
  const email = statey.email
  const password = statey.password
  const loggedInBoolean = statey.LoggedIn
  const [validated, setValidated] = useState(false)
  //const fetcher = useSelector(fetcher)
  console.log(statey)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    if (postsStatus !== 'succeded') {
      dispatch(fetchPosts())
    }
  }, [postsStatus, dispatch])

  return (
    <div className='homeBackground'>
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
          <Col>
            <div className=' titleBlock roundedCorners text-center headerPadding1 center'>
              <h3 className=' text2 rem'>Services</h3>
            </div>

            <div>
              <br />
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} lg={4}>
            <div>
              <Container>
                <Row>
                  <ServiceUser data={statey} />
                </Row>
                <br />
                <br />

                <Row>
                  <MakePost />
                </Row>
              </Container>
            </div>
          </Col>

          <Col xs={12} lg={8}>
            <div>
              <Container>
                <div className='center'>
                  {posts.posts
                    ? posts.posts.map((x, i) => {
                        return (
                          <div className='center1' key={i} data={x}>
                            <RenderPostCard data={x} key={i} />
                          </div>
                        )
                      })
                    : () => {
                        return <h1>No posts</h1>
                      }}
                </div>
              </Container>
            </div>
          </Col>
          <Col xs={1} md={2} />
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default Service
