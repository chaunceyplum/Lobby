import React from 'react'
import { Button, Card, CardImg, Col, Container, Row } from 'react-bootstrap'
import Counter from './Counter'

import comp from '../Images/comp.png'
import {
  CardBody,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap'

const Home = () => {
  return (
    <div style={{ 'background-color': '#613333 !important;' }}>
      <div class='homeBackground'>
        <Container>
          <Row className='changesss'>
            <Col xs={2} />
            <Col xs={8}>
              <div className='text-center'>
                <h3 className='center homeHeaderText text2'>Find A Lobby</h3>
                <Button variant='secondary' className='center1 '>
                  Learn More
                </Button>

                <br />

                <br />
              </div>
            </Col>
            <Col xs={2} />
          </Row>
        </Container>

        <div className=' center'>
          <div className='changesss'>
            <Container>
              <Row>
                <div className='text2'>
                  <h1 className='center text-center headerPadding'>
                    some text
                  </h1>

                  <p className='center text-center textPadding'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    nec vestibulum felis, at ultrices dui. Suspendisse a
                    consequat neque. Nam tortor nisi, lacinia ut urna ut,
                    dignissim molestie ipsum. Vivamus bibendum odio elementum,
                    convallis felis non, condimentum ligula. Vestibulum nisl
                    augue, tincidunt molestie maximus sit amet, blandit sit amet
                    neque. Praesent ante risus, sodales in vulputate aliquet,
                    pretium sit amet lacus. Praesent lacinia placerat dolor eu
                    maximus. Sed pellentesque, turpis eget gravida egestas, nisi
                    nulla egestas est, et rutrum nisl urna a lectus. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus. In tempus
                    malesuada metus vitae rutrum. Integer lacus lorem,
                    sollicitudin vitae lorem at, ornare venenatis velit.
                    Suspendisse eget orci sodales, porttitor tortor tempus,
                    interdum tortor.
                  </p>
                </div>
              </Row>
            </Container>
          </div>
          <div className='changesss'>
            <Container className=''>
              <Row>
                <Col xs={10} sm={8} md={4} className=' center1'>
                  {/* <h6 className='center text-center '>Lobby</h6> */}
                  <img
                    src={comp}
                    alt=''
                    className=''
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      size: '2em',
                    }}
                  />
                </Col>
                <Col md={2} />
                <Col
                  xs={10}
                  sm={8}
                  md={4}
                  className='textPadding center1 text-center '
                  // style={{ margin: '0 auto;' }}
                >
                  <div className='text2'>
                    <p className='center text-center textPadding'>
                      A platform gamers can use to find other gamers to play
                      with.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. In nec vestibulum felis, at ultrices dui.
                      Suspendisse a consequat neque. Nam tortor nisi, lacinia ut
                      urna ut, dignissim molestie ipsum. Vivamus bibendum odio
                      elementum, convallis felis non, condimentum ligula.
                      Vestibulum nisl augue, tincidunt molestie maximus sit
                      amet, blandit sit amet neque.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <br />
          <br />
          <br />
          <div className='changesss'>
            <Container>
              <Row className=''>
                <Col xs={4} className='text-center center'>
                  <Card>
                    <CardHeader>
                      <CardTitle>Playstation</CardTitle>
                      <CardSubtitle>PS4 & PS5</CardSubtitle>
                    </CardHeader>
                    <CardBody>
                      <CardImg></CardImg>
                    </CardBody>
                    <CardFooter>
                      <CardText>blah blah blah</CardText>
                    </CardFooter>
                  </Card>
                </Col>
                <Col xs={4} className='text-center center'>
                  <Card>
                    <CardHeader>
                      <CardTitle>Xbox</CardTitle>
                      <CardSubtitle>Xbox One & Xbox series X|S</CardSubtitle>
                    </CardHeader>
                    <CardBody>
                      <CardImg></CardImg>
                    </CardBody>
                    <CardFooter>
                      <CardText>blah blah blah</CardText>
                    </CardFooter>
                  </Card>
                </Col>
                <Col xs={4} className='text-center center'>
                  <Card>
                    <CardHeader>
                      <CardTitle>PC</CardTitle>
                      {/* <CardSubtitle>PS4 & PS5</CardSubtitle> */}
                    </CardHeader>
                    <CardBody>
                      <CardImg></CardImg>
                    </CardBody>
                    <CardFooter>
                      <CardText>blah blah blah</CardText>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Row>
          <Col>
            <Counter />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Home
