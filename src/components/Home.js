import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Counter from './Counter'
import { Parallax } from 'react-parallax'
import stars from '../Images/gameControllers.jpg'
import child from '../Images/child.jpg'
const Home = () => {
  return (
    <div>
      <Parallax strength={-400} bgImage={stars} className='content'>
        <Container>
          <Row className='homeDiv'>
            <Col xs={2} />
            <Col xs={8}>
              <div className='text-center'>
                <h3 className='center homeHeaderText'>Find A Lobby</h3>

                {/* <p id='homeSubheaderText' >
                                A platform gamers can use to find other gamers to play with.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec vestibulum felis, at ultrices dui. Suspendisse a consequat neque. Nam tortor nisi, lacinia ut urna ut, dignissim molestie ipsum. Vivamus bibendum odio elementum, convallis felis non, condimentum ligula. Vestibulum nisl augue, tincidunt molestie maximus sit amet, blandit sit amet neque. Praesent ante risus, sodales in vulputate aliquet, pretium sit amet lacus. Praesent lacinia placerat dolor eu maximus. Sed pellentesque, turpis eget gravida egestas, nisi nulla egestas est, et rutrum nisl urna a lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tempus malesuada metus vitae rutrum. Integer lacus lorem, sollicitudin vitae lorem at, ornare venenatis velit. Suspendisse eget orci sodales, porttitor tortor tempus, interdum tortor.
                            </p> */}
                <br />
                <Button variant='secondary' className='center'>
                  Learn More
                </Button>
              </div>
            </Col>
            <Col xs={2} />
          </Row>
        </Container>
      </Parallax>
      {/* <Parallax strength={-100} bgImage={child} blur={1}>
                    <Container>
                    <Row className="homeDiv">
                    <div className='content'>
                        <h1 className="homeHeaderText">
                            some text
                        </h1>

                        <p id="HomeSubheaderText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec vestibulum felis, at ultrices dui. Suspendisse a consequat neque. Nam tortor nisi, lacinia ut urna ut, dignissim molestie ipsum. Vivamus bibendum odio elementum, convallis felis non, condimentum ligula. Vestibulum nisl augue, tincidunt molestie maximus sit amet, blandit sit amet neque. Praesent ante risus, sodales in vulputate aliquet, pretium sit amet lacus. Praesent lacinia placerat dolor eu maximus. Sed pellentesque, turpis eget gravida egestas, nisi nulla egestas est, et rutrum nisl urna a lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tempus malesuada metus vitae rutrum. Integer lacus lorem, sollicitudin vitae lorem at, ornare venenatis velit. Suspendisse eget orci sodales, porttitor tortor tempus, interdum tortor.

                        </p>
                    </div>

                </Row>


               
                </Container>
            </Parallax> */}

      <Parallax strength={400} blur={10}>
        <Container>
          <Row>
            <div className='content'>
              <h1 className='homeHeaderText'>some text</h1>

              <p id='HomeSubheaderText'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
                vestibulum felis, at ultrices dui. Suspendisse a consequat
                neque. Nam tortor nisi, lacinia ut urna ut, dignissim molestie
                ipsum. Vivamus bibendum odio elementum, convallis felis non,
                condimentum ligula. Vestibulum nisl augue, tincidunt molestie
                maximus sit amet, blandit sit amet neque. Praesent ante risus,
                sodales in vulputate aliquet, pretium sit amet lacus. Praesent
                lacinia placerat dolor eu maximus. Sed pellentesque, turpis eget
                gravida egestas, nisi nulla egestas est, et rutrum nisl urna a
                lectus. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. In tempus malesuada metus vitae rutrum. Integer lacus
                lorem, sollicitudin vitae lorem at, ornare venenatis velit.
                Suspendisse eget orci sodales, porttitor tortor tempus, interdum
                tortor.
              </p>
            </div>
          </Row>
        </Container>
      </Parallax>

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
