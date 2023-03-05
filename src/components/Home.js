import React from 'react'
import { Button, CardImg, Col, Container, Row } from 'react-bootstrap'
import Counter from './Counter'
import Footer from './Footer.js'
import comp from '../Images/comp.svg'
// import {
//   CardBody,
//   CardFooter,
//   CardHeader,
//   CardSubtitle,
//   CardText,
//   CardTitle,
// } from 'reactstrap'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { brown, red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { animated, useSpring } from '@react-spring/web'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
const Home = () => {
  return (
    <div className='homeBackground'>
      <div className='homeBackground'>
        <Parallax pages={6} className='homeBackground' >
          <ParallaxLayer speed={1} offset={0} >
            <div className="pageLayout">
            <Container>
              <Row>
                <Col xs={2} />
                <Col xs={8}>
                  <div className='text-center homeHeaderText'>
                    <h3 className='center  text2'>Find A Lobby</h3>
                    <Button variant='secondary' className='center1 buttons1'>
                      Learn More
                    </Button>

                    <br />

                    <br />
                  </div>
                </Col>

                <Col xs={2} />
              </Row>
            </Container>
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={1} offset={1} >
            <div className='PageLayout'>
              <Container>
                <Row>
                  <div className='text2'>
                    <h1 className='center text-center headerPadding1'>
                      Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </h1>

                    <p className='center text-center textPadding'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In nec vestibulum felis, at ultrices dui. Suspendisse a
                      consequat neque. Nam tortor nisi, lacinia ut urna ut,
                      dignissim molestie ipsum. Vivamus bibendum odio elementum,
                      convallis felis non, condimentum ligula. Vestibulum nisl
                      augue, tincidunt molestie maximus sit amet, blandit sit
                      amet neque. Praesent ante risus, sodales in vulputate
                      aliquet, pretium sit amet lacus. Praesent lacinia placerat
                      dolor eu maximus. 
                      
                    </p>
                  </div>
                </Row>
              </Container>
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={1} offset={2} >
            <div className='PageLayout'>
              <Container className='homeCard'>
                <Row>
                  <Col xs={12} sm={10} md={8} className=' center1'>
                    {/* <h6 className='center text-center '>Lobby</h6> */}
                    <div
                      style={{
                        // width: '350px',
                        // height: '350px',
                        justtifyContent: 'center',
                        display: 'flex',
                      }}
                    >
                      <img
                        src={comp}
                        alt=''
                        className=''
                        style={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                          //size: '2em',
                        }}
                      />
                    </div>
                  </Col>
                  {/* <Col md={2} /> */}
                  <Col
                    xs={12}
                    sm={10}
                    md={4}
                    className='textPadding center1 text-center '
                    // style={{ margin: '0 auto;' }}
                  >
                    <div className='text2'>
                      <p className='center text-center textPadding'>
                        A platform gamers can use to find other gamers to play
                        with.Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. In nec vestibulum felis, at ultrices dui.
                        Suspendisse a consequat neque. Nam tortor nisi, lacinia
                        ut urna ut, dignissim molestie ipsum. Vivamus bibendum
                        odio elementum, convallis felis non, condimentum ligula.
                        Vestibulum nisl augue, tincidunt molestie maximus sit
                        amet, blandit sit amet neque.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </ParallaxLayer>

          <ParallaxLayer speed={1} offset={3} >
            <div className='PageLayout'>
              <Container className=''>
                <Row className=''>
                  <Col xs={12} md={4} className='text-center center'>
                    <br />
                    <Card
                      sx={{ maxWidth: 600, height: 500 }}
                      className='offsetBackground'
                    >
                      <CardHeader title='Playstation' subheader='PS4 & PS5' />
                      <CardContent>
                        <CardImg></CardImg>

                        <Typography variant='body2' color='text.secondary'>
                          A platform gamers can use to find other gamers to play
                          with.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. In nec vestibulum felis, at ultrices
                          dui. Suspendisse a consequat neque. Nam tortor nisi,
                          lacinia ut urna ut, dignissim molestie ipsum. Vivamus
                          bibendum odio elementum, convallis felis non,
                          condimentum ligula. Vestibulum nisl augue, tincidunt
                          molestie maximus sit amet, blandit sit amet neque.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Col>
                  <br />
                  <Col xs={12} md={4} className='text-center center'>
                    <br />
                    <Card
                      sx={{ maxWidth: 600, height: 500 }}
                      className='offsetBackground'
                    >
                      <CardHeader
                        title='Xbox'
                        subheader='Xbox One & Xbox X|S'
                      />
                      <CardContent>
                        <CardImg></CardImg>

                        <Typography variant='body2' color='text.secondary'>
                          A platform gamers can use to find other gamers to play
                          with.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. In nec vestibulum felis, at ultrices
                          dui. Suspendisse a consequat neque. Nam tortor nisi,
                          lacinia ut urna ut, dignissim molestie ipsum. Vivamus
                          bibendum odio elementum, convallis felis non,
                          condimentum ligula. Vestibulum nisl augue, tincidunt
                          molestie maximus sit amet, blandit sit amet neque.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Col>
                  <br />
                  <Col xs={12} md={4} className='text-center center'>
                    <br />
                    <Card
                      sx={{ maxWidth: 600, height: 500 }}
                      className='offsetBackground '
                    >
                      <CardHeader title='PC' />
                      <CardContent>
                        <CardImg></CardImg>

                        <Typography variant='body2' color='text.secondary'>
                          A platform gamers can use to find other gamers to play
                          with.Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. In nec vestibulum felis, at ultrices
                          dui. Suspendisse a consequat neque. Nam tortor nisi,
                          lacinia ut urna ut, dignissim molestie ipsum. Vivamus
                          bibendum odio elementum, convallis felis non,
                          condimentum ligula. Vestibulum nisl augue, tincidunt
                          molestie maximus sit amet, blandit sit amet neque.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
            <br />
          </ParallaxLayer>

          {/* <ParallaxLayer speed={1} offset={4} >
            <div className='changess'>
              <Container>
                <Row>
                  <Col>new element</Col>
                  <Col>new element</Col>
                  <Col>new element</Col>
                </Row>
              </Container>
            </div>
          </ParallaxLayer> */}

          <ParallaxLayer speed={1} offset={5.5} >
            {/* <div className='changess'> */}
              
                <Footer fixed='bottom' />
              
            {/* </div> */}
          </ParallaxLayer>
        </Parallax>

       
      </div>
    </div>
  )
}

export default Home
