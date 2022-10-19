import React from 'react'
import { useState, useEffect} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, getPostsError, getPostsStatus, selectAllPosts } from '../redux/DataSlice'


const Service = () => {
    const dispatch =useDispatch()
    const posts =useSelector(selectAllPosts)
    const postsStatus =useSelector(getPostsStatus)
    const error =useSelector(getPostsError)
    
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        
        if(postsStatus  === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postsStatus, dispatch]);
  
  return (
    <div>
        <Container>
            <Row className='homeDiv'>
                <Col className='center'>
                    <div className='center1'>
                        <h3 className='center '>
                            
                            Services
                        </h3>
                    </div>
                    <div>
                        <br />
                    </div>
                    <div className='center1'>
                        <Button onClick={handleShow} className='center1'>
                                Learn More
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                {
                    show ?
                    <div>
                        Content
                    </div> 
                    :
                    <div className='center1'>
                        {/* <Button onClick={handleShow} className='center1'>
                            Learn More
                        </Button> */}
                        <div>
                            <br/>
                            
                            <br/>
                        </div>
                    </div>
                }

            </Row>
            <Row>
                {console.log(posts)}
            </Row>
        </Container>
    </div>
  )
}

export default Service