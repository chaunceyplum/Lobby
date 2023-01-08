import React from 'react'
import { Button, Card, CardImg, Col, Container, Row } from 'react-bootstrap'
import Counter from './Counter'
import { Parallax } from 'react-parallax'
import stars from '../Images/gameControllers.jpg'
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
    <div>
      <Parallax strength={-400} bgImage={stars} className='content'>
        <Container>
          <Row className='homeDiv'>
            <Col xs={2} />
            <Col xs={8}>
              <div className='text-center homeHeaderText'>
                <h3 className='center text-white'>Find A Lobby</h3>
                <Button variant='secondary' className='center1 text-white'>
                  Learn More
                </Button>

                {/* <p id='homeSubheaderText' >
                                A platform gamers can use to find other gamers to play with.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec vestibulum felis, at ultrices dui. Suspendisse a consequat neque. Nam tortor nisi, lacinia ut urna ut, dignissim molestie ipsum. Vivamus bibendum odio elementum, convallis felis non, condimentum ligula. Vestibulum nisl augue, tincidunt molestie maximus sit amet, blandit sit amet neque. Praesent ante risus, sodales in vulputate aliquet, pretium sit amet lacus. Praesent lacinia placerat dolor eu maximus. Sed pellentesque, turpis eget gravida egestas, nisi nulla egestas est, et rutrum nisl urna a lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tempus malesuada metus vitae rutrum. Integer lacus lorem, sollicitudin vitae lorem at, ornare venenatis velit. Suspendisse eget orci sodales, porttitor tortor tempus, interdum tortor.
                            </p> */}
                <br />

                <br />
              </div>
            </Col>
            <Col xs={2} />
          </Row>
        </Container>
      </Parallax>

      <Container>
        <Row>
          <div className=' center'>
            <Container>
              <Row>
                <div className='homeHalfDiv1'>
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
            <Container className='homeHalfDiv1'>
              <Row>
                <Col xs={4}>
                  <h6 className='center text-center'>Lobby</h6>
                  <img src='#' alt='logo' className='center text-center' />
                </Col>
                <Col xs={2} />
                <Col xs={4}>
                  <p>
                    A platform gamers can use to find other gamers to play
                    with.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. In nec vestibulum felis, at ultrices dui. Suspendisse
                    a consequat neque. Nam tortor nisi, lacinia ut urna ut,
                    dignissim molestie ipsum. Vivamus bibendum odio elementum,
                    convallis felis non, condimentum ligula. Vestibulum nisl
                    augue, tincidunt molestie maximus sit amet, blandit sit amet
                    neque. Praesent ante risus, sodales in vulputate aliquet,
                    pretium sit amet lacus. Praesent lacinia placerat dolor eu
                    maximus. Sed pellentesque, turpis eget gravida egestas, nisi
                    nulla egestas est, et rutrum nisl urna a lectus. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus. In tempus
                    malesuada metus vitae rutrum.
                  </p>
                </Col>
              </Row>
            </Container>
            <br />
            <br />
            <br />
            <Container>
              <Row>
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
        </Row>
      </Container>

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
  )
}

export default Home
