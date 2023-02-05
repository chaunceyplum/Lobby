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

const Service = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  const postsStatus = useSelector(getPostsStatus)
  const error = useSelector(getPostsError)

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
        <Row className='changesss'>
          <Col>
            <div className='text-center'>
              <h3 className='center homeHeaderText text2'>Services</h3>
            </div>

            <div>
              <br />
            </div>
          </Col>
        </Row>
        <Row>
          {show ? (
            <div>Content</div>
          ) : (
            <div className='center1'>
              <div>
                <br />

                <br />
              </div>
            </div>
          )}
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <div>
              <Container>
                <MakePost />
              </Container>
            </div>
          </Col>
          <Col xs={12} md={6}>
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
    </div>
  )
}

export default Service
