import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { grey, red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Col, Container, Row } from 'react-bootstrap'
import LogIn from './LogIn'
import { useDispatch, useSelector } from 'react-redux'

const ServiceUser = (data, key) => {
  const dispatch = useDispatch()
  const loggedInState = (state) => state.loggedIn
  const statey = useSelector(loggedInState)
  //const letter = statey.gamertag[0].toUpperCase()
  const gamertag = statey.gamertag
  const letterFunc = (gamertag) => {
    if (gamertag) {
      const letter = gamertag[0].toUpperCase()
      return letter
    } else {
      return false
    }
  }
  return (
    <div className='center roundedCorners offsetBackground'>
      {letterFunc() ? (
        <Container>
          {/* <Card sx={{ maxWidth: '100%' }} className='offsetBackground'>
          <CardHeader
            avatar={
              
            }
          />

          <CardContent> */}
          <br />
          <br />

          <Row>
            <Col />
            <Col xs={12} className='center1'>
              <Container>
                <Row className='center1'>
                  {/* <Avatar
                    sx={{
                      bgcolor: grey[800],
                      width: '100px',
                      height: '100px',
                      fontSize: '3rem',
                    }}
                    aria-label=''
                  >
                    {letter}
                  </Avatar> */}
                </Row>
                <br />
                <br />
                <Row className='center1'>
                  <Typography variant='h6' color='slateGrey'>
                    Name: {data.data.name}
                  </Typography>
                </Row>
                <br />
                <Row className='center1'>
                  <Typography variant='h6' color='slateGrey'>
                    Gamertag: {data.data.gamertag}
                  </Typography>
                </Row>
                <br />
                <Row className='center1'>
                  <Typography variant='h6' color='slateGrey'>
                    Console: {data.data.console}
                  </Typography>
                </Row>
                <br />
                <Row className='center1'>
                  <Typography variant='body2' color='text.secondary'>
                    {data.data.post}
                  </Typography>
                </Row>
                <br />
              </Container>
            </Col>
            <Col />
          </Row>
          <br />
          <br />

          {/* </CardContent>
        </Card> */}
        </Container>
      ) : (
        <Container>
          {/* <Card sx={{ maxWidth: '100%' }} className='offsetBackground'>
          <CardHeader
            avatar={
              
            }
          />

          <CardContent> */}
          <br />
          <br />

          <Row>
            <Col />
            <Col xs={12} className=''>
              <LogIn />
            </Col>
            <Col />
          </Row>
          <br />
          <br />

          {/* </CardContent>
        </Card> */}
        </Container>
      )}
    </div>
  )
}

export default ServiceUser
