import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Home = () => {
  return (
        <div>
            <Container>
                <Row className='homeDiv'>
                    <Col xs={2} />
                    <Col xs={8}  >

                        <div className='text-center'>

                            <h3 className='center homeHeaderText'>
                                Find A Lobby
                            </h3>

                            <p id='homeSubheaderText'>
                                A platform gamers can use to find other gamers to play with.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec vestibulum felis, at ultrices dui. Suspendisse a consequat neque. Nam tortor nisi, lacinia ut urna ut, dignissim molestie ipsum. Vivamus bibendum odio elementum, convallis felis non, condimentum ligula. Vestibulum nisl augue, tincidunt molestie maximus sit amet, blandit sit amet neque. Praesent ante risus, sodales in vulputate aliquet, pretium sit amet lacus. Praesent lacinia placerat dolor eu maximus. Sed pellentesque, turpis eget gravida egestas, nisi nulla egestas est, et rutrum nisl urna a lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tempus malesuada metus vitae rutrum. Integer lacus lorem, sollicitudin vitae lorem at, ornare venenatis velit. Suspendisse eget orci sodales, porttitor tortor tempus, interdum tortor.
                            </p>
                            <br />
                            <Button variant="secondary" className='center'>
                                Learn More
                            </Button>

                        </div>


                    </Col>
                    <Col xs={2} />

                    
                </Row>
                <Row>
                    
                    <Col xs={5} className=''>
                        <p className='homeHeaderText'>
                            Find A Lobby
                        </p>
                        <Row>
                            <Col>
                                <p>
                                    A platform gamers can use to find other gamers to play with
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant='secondary'>
                                    button1
                                </Button>
                            </Col>
                            <Col>
                                <Button variant='secondary'>
                                    button2
                                </Button>
                            </Col>
                        </Row>
                        
                    </Col>

                    <Col xs={2}/>

                    <Col xs={5} className='text-center'>
                        
                    </Col>
                </Row>
                <Row >
                    <div className='homeHalfDiv'>
                        <h1>
                            some text
                        </h1>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec vestibulum felis, at ultrices dui. Suspendisse a consequat neque. Nam tortor nisi, lacinia ut urna ut, dignissim molestie ipsum. Vivamus bibendum odio elementum, convallis felis non, condimentum ligula. Vestibulum nisl augue, tincidunt molestie maximus sit amet, blandit sit amet neque. Praesent ante risus, sodales in vulputate aliquet, pretium sit amet lacus. Praesent lacinia placerat dolor eu maximus. Sed pellentesque, turpis eget gravida egestas, nisi nulla egestas est, et rutrum nisl urna a lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tempus malesuada metus vitae rutrum. Integer lacus lorem, sollicitudin vitae lorem at, ornare venenatis velit. Suspendisse eget orci sodales, porttitor tortor tempus, interdum tortor.

                        </p>
                    </div>

                </Row>
                <Row>
                    <div className='homeHalfDiv1'>

                        <h1>
                            (PHOTO GOES HERE)
                        </h1>
                    </div>

                </Row>
                <Row>
                    <div className='homeHalfDiv'>
                        <h1>
                            some text
                        </h1>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec vestibulum felis, at ultrices dui. Suspendisse a consequat neque. Nam tortor nisi, lacinia ut urna ut, dignissim molestie ipsum. Vivamus bibendum odio elementum, convallis felis non, condimentum ligula. Vestibulum nisl augue, tincidunt molestie maximus sit amet, blandit sit amet neque. Praesent ante risus, sodales in vulputate aliquet, pretium sit amet lacus. Praesent lacinia placerat dolor eu maximus. Sed pellentesque, turpis eget gravida egestas, nisi nulla egestas est, et rutrum nisl urna a lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tempus malesuada metus vitae rutrum. Integer lacus lorem, sollicitudin vitae lorem at, ornare venenatis velit. Suspendisse eget orci sodales, porttitor tortor tempus, interdum tortor.

                        </p>
                    </div>

                </Row>
                
            </Container>
        </div>
    );
};

export default Home;
