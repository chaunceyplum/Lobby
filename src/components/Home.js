import React from 'react'
import { Button, CardImg, Col, Container, Row } from 'react-bootstrap'
import Counter from './Counter'
import Footer from './Footer.js'
import comp from '../Images/comp.svg'
import comp1 from '../Images/comp1.svg'
import comp2 from '../Images/comp2.svg'
import meteor from '../Images/Meteor.svg'
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
import Testimonials from './Testimonials'
const Home = () => {
  return (
    <div className='homeBackground'>
      <div className='homeBackground'>
        {/* <Parallax pages={6} className='homeBackground' >
          <ParallaxLayer speed={1} offset={0} > */}
        <div
          className='pageLayout meteor'
          style={{ backgroundImage: { meteor } }}
        >
          <Container>
            <br />
            <br />
            <br />
            <br />

            <Row>
              <Col xs={12} lg={4} className='center'>
                <br />
                <br />
                <br />
                <br />
                <div className=' titleBlock roundedCorners text-center headerPadding1 center'>
                  <h3 className=' text2 rem'>Find A Lobby</h3>

                  <h3 className=' text2 '>
                    Connect and Dominate: Find Your Perfect Gaming Team!
                  </h3>
                  <Button variant='secondary' className='center1 buttons1'>
                    Get started
                  </Button>
                </div>
              </Col>

              <Col xs={12} lg={8} className=' center1'>
                <div
                  style={{
                    justtifyContent: 'center',
                    display: 'flex',
                  }}
                >
                  <img
                    src={comp1}
                    alt=''
                    className=''
                    style={{
                      width: '100%',
                      height: '60%',
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* </ParallaxLayer>
          <ParallaxLayer speed={1} offset={1} > */}
        <div className='PageLayout'>
          <Container>
            <Row>
              <div className='text2'>
                <h1 className='center text-center headerPadding1'>
                  Level Up Your Gaming Experience: Connect with Fellow Gamers!
                </h1>

                <p className=' text2 center text-center textPadding'>
                  Welcome to our gaming website, where gamers unite to take
                  their gaming adventures to the next level! Whether you're a
                  casual player seeking new friends to team up with or a
                  competitive gamer in search of worthy adversaries, our
                  platform is designed to bring gamers together in an immersive
                  and vibrant community.
                </p>
              </div>
            </Row>
          </Container>
        </div>
        <div className='offsetBackground1'>
          <Container>
            <Row>
              <Col>
                <Testimonials />
              </Col>
            </Row>
          </Container>
        </div>
        {/* </ParallaxLayer>
          <ParallaxLayer speed={1} offset={2} > */}
        <div className='PageLayout'>
          <Container className='homeCard'>
            <Row>
              <Col xs={12} sm={10} lg={8} className=' center1'>
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
                    className='center'
                    style={{
                      width: '100%',
                      height: '60%',
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
                lg={4}
                className='textPadding center1 text-center '
                // style={{ margin: '0 auto;' }}
              >
                <div className='text2'>
                  <p className='text2 center text-center textPadding'>
                    Discover like-minded gamers who share your passion for your
                    favorite games, from action-packed shooters to immersive
                    RPGs and everything in between. Connect with fellow gamers
                    who understand your gaming journey, exchange tips, and
                    strategies, and forge lasting friendships that extend beyond
                    the virtual realm.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                xs={12}
                sm={10}
                lg={4}
                className='textPadding center1 text-center '
                // style={{ margin: '0 auto;' }}
              >
                <div className='text2'>
                  <p className='text2 center text-center textPadding'>
                    Our intuitive search and matchmaking features make it easy
                    to find gamers who match your playstyle, preferences, and
                    skill level. Explore a vast range of gaming profiles,
                    showcasing players' strengths, favorite genres, and gaming
                    achievements. Whether you're looking to join a team, start a
                    guild, or simply expand your gaming network, our platform
                    provides the perfect hub for connecting with gamers who fit
                    your gaming goals.
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={10} lg={8} className=' center1'>
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
                    src={comp2}
                    alt=''
                    className='center'
                    style={{
                      width: '100%',
                      height: '60%',
                      display: 'flex',
                      justifyContent: 'center',
                      //size: '2em',
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* </ParallaxLayer>

          <ParallaxLayer speed={1} offset={3} > */}
        <div className='PageLayout'>
          <Container className=''>
            <Row className=''>
              <Col xs={12} md={4} className='text-center center'>
                <br />
                <Card
                  sx={{ maxWidth: 600, height: 500 }}
                  className='offsetBackground1'
                >
                  <CardHeader
                    title='Playstation'
                    subheader='Gaming Excellence'
                    className='text2'
                  />
                  <CardContent>
                    <CardImg></CardImg>

                    <Typography
                      variant='body2'
                      color='text.secondary'
                      className='text2'
                    >
                      Enter a realm of gaming excellence with PlayStation's
                      iconic consoles and exclusive games. Immerse yourself in
                      breathtaking worlds and captivating storytelling. Connect
                      with friends, join communities, and showcase your
                      achievements with PlayStation.
                    </Typography>
                  </CardContent>
                </Card>
              </Col>
              <br />
              <Col xs={12} md={4} className='text-center center'>
                <br />
                <Card
                  sx={{ maxWidth: 600, height: 500 }}
                  className='offsetBackground1 text2'
                >
                  <CardHeader title='Xbox' subheader='Unleash Gaming Power' />
                  <CardContent>
                    <CardImg></CardImg>

                    <Typography
                      variant='body2'
                      color='text.secondary'
                      className='text2'
                    >
                      Experience the excitement of Xbox gaming with cutting-edge
                      hardware, immersive gameplay, and exclusive titles.
                      Connect with friends, join parties, and explore endless
                      gaming possibilities. Power up your gaming prowess with
                      Xbox.
                    </Typography>
                  </CardContent>
                </Card>
              </Col>
              <br />
              <Col xs={12} md={4} className='text-center center'>
                <br />
                <Card
                  sx={{ maxWidth: 600, height: 500 }}
                  className='offsetBackground1 text2'
                >
                  <CardHeader
                    title='PC'
                    subheader='Limitless Gaming Possibilities'
                  />
                  <CardContent>
                    <CardImg></CardImg>

                    <Typography
                      variant='body2'
                      color='text.secondary'
                      className='text2'
                    >
                      PC gaming offers versatility, customization, and a vast
                      library of genres and indie titles. Enjoy stunning
                      visuals, smooth gameplay, and precise controls. Dive into
                      a world of flexibility and performance with PC gaming.
                    </Typography>
                  </CardContent>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <br />
        {/* </ParallaxLayer>

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
          </ParallaxLayer> 

          <ParallaxLayer speed={1} offset={5.5} > */}
        {/* <div className='changess'> */}

        {/* </div> */}
        {/* </ParallaxLayer>
        </Parallax> */}
      </div>
    </div>
  )
}

export default Home
