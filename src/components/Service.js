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

              {/* <Button
                onClick={handleShow}
                className='center1'
                variant='secondary'
              >
                Learn More
              </Button> */}
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
              {/* <Button onClick={handleShow} className='center1'>
                            Learn More
                        </Button> */}
              <div>
                <br />

                <br />
              </div>
            </div>
          )}
        </Row>
        <Row>
          <Col xs={3} md={4}>
            <div>
              <Container></Container>
            </div>
          </Col>
          <Col xs={8} md={7}>
            <div>
              <Container>
                {/* {console.log(posts)} */}
                {/* {posts.map(i => {
            <RenderServiceCard data={i} />
          })} */}

                {postsStatus ? (
                  posts.posts.map((x, i) => {
                    return <RenderServiceCard data={x} key={i} />
                  })
                ) : (
                  <GrowExample />
                )}
                {console.log(posts.posts)}
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
