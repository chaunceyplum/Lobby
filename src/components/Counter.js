import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/ValueSlice'

const Counter = () => {
  
    const value =useSelector(state => state.counter.value)
    const dispatch =useDispatch()
    
    return (
    <div>
        <Container>
            <Row>
                <Col>
                 <div>The count is {value}</div>
                   
                </Col>
            </Row>
            <Row>
                <Col class="text-align-center">
                    <Button variant='secondary' onClick={() => dispatch(increment())}> increment </Button>
                    <Button variant='secondary' onClick={() => dispatch(decrement())}> decrement </Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Counter